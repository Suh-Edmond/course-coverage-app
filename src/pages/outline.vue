<template>
  <q-page>
    <q-ajax-bar
      ref="bar"
      position="top"
      color="positive"
      size="10px"
      skip-hijack
    />
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
        v-if="!showTable"
      >
        <q-step
          :name="1"
          title="Add Course Outline"
          :done="step > 1"
          :header-nav="step > 1"
        >
          <div class="row flex flex-center">
            <q-card class="my-card q-mb-lg">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-select
                    v-model="outline_data.outline.course_id"
                    :options="getAttendCourse"
                    label="Choose Course"
                    :rules="[val => !!val || 'Field is required']"
                  />
                  <q-select
                    v-model="outline_data.outline.year"
                    :options="year_options"
                    label="Choose year"
                    :rules="[val => !!val || 'Field is required']"
                  />
                </q-form>
              </q-card-section>
            </q-card>
          </div>

          <q-stepper-navigation>
            <q-btn
              @click="
                () => {
                  done1 = true;
                  step = 2;
                }
              "
              color="primary"
              label="Next"
              icon-right="arrow_forward"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Add Topic"
          icon="create_new_folder"
          :done="step > 2"
          :header-nav="step > 2"
        >
          <q-scroll-area
            style="height: 200px;"
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
          >
            <div class="row flex flex-center">
              <q-card class="my-card q-mb-lg">
                <q-card-section>
                  <q-form class="q-gutter-md">
                    <div class="row q-col-gutter-lg q-ml-xs">
                      <template v-for="initial in totalFormNumber">
                        <div
                          class="col-md-6 col-xl-6 col-xs-12"
                          :key="initial + 'a'"
                        >
                          <q-input
                            v-model="outline_data.topic[initial - 1].name"
                            label="Topic"
                            :rules="[val => !!val || 'Field is required']"
                          />
                        </div>
                        <div
                          class="col-2 col-md-2 col-xl-2 col-xs-12"
                          :key="initial + 'b'"
                        >
                          <q-input
                            outlined
                            v-model="
                              outline_data.topic[initial - 1].week_number
                            "
                            label="Weekly"
                            :rules="[
                              val =>
                                (val !== null && val !== '') ||
                                'Please type a credit value',
                              val =>
                                (val > 0 && val <= 20) ||
                                'Please type a valid credit value'
                            ]"
                          />
                        </div>
                        <div
                          class="col-4 col-md-4 col-xl-4 col-xs-12 "
                          :key="initial + 'c'"
                        >
                          <q-select
                            multiple
                            v-model="
                              outline_data.topic[initial - 1].topic_activity
                            "
                            :options="getActivities"
                            label="Choose Activity"
                            :rules="[val => !!val || 'Field is required']"
                          />
                        </div>
                      </template>
                    </div>
                  </q-form>
                </q-card-section>
                <q-card-section class="row flex flex-end">
                  <div>
                    <q-btn
                      @click="addFields()"
                      color="primary"
                      icon="add"
                      size="md"
                      round
                    >
                      <q-tooltip>
                        click to fields for topic, weekly and
                        activity</q-tooltip
                      >
                    </q-btn>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-scroll-area>
          <q-stepper-navigation>
            <q-btn color="primary" label="Create Outline" @click="SubmitData()">
            </q-btn>
            <q-btn
              @click="step = 1"
              color="secondary"
              label="Back"
              icon="arrow_back"
              class="q-ml-sm"
            />
            <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Next" icon-right="arrow_forward" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
        <q-step
          :name="3"
          title="View Course Outline"
          icon="add_comment"
           
        >
          <div class="col-10 col-xs-12 col-md-10 col-xl-10">
            <q-table
              class=" q-pt-lg q-my-lg q-mx-xs"
              :data="getOutline"
              :columns="columns"
              row-key="name"
              :filter="filter"
            >
              <template v-slot:top-left>
                <div class="text-h5 text-weight-meduim">
                  Course Outline:
                  {{
                    " " +
                      outline_data.outline.course_id.label +
                      "   " +
                      outline_data.outline.year
                  }}
                </div>
              </template>
              <template v-slot:top-right>
                <q-input
                  outlined
                  dense
                  :class="
                    $q.screen.xs
                      ? 'text-h6-sm q-mr-lg q-mb-lg q-mt-lg full-width'
                      : 'text-h6-sm q-mr-lg'
                  "
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                 
              </template>
            </q-table>
          </div>
          <q-stepper-navigation>
            
            <q-btn
               
              @click="step = 2"
              color="secondary"
              label="Back"
              icon="arrow_back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <div v-if="showTable" class="row">
        <div class="col-1 col-xs-12 col-md-1 col-xl-1"></div>
        <div class="col-10 col-xs-12 col-md-10 col-xl-10">
          <q-table
            class=" q-pt-lg q-my-lg q-mx-xs"
            :data="getOutline"
            :columns="columns"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:top-left>
              <div class="text-h5 text-weight-meduim">
                Course Outline:
                {{
                  " " +
                    outline_data.outline.course_id.label +
                    "   " +
                    outline_data.outline.year
                }}
              </div>
            </template>
            <template v-slot:top-right>
              <q-input
                outlined
                dense
                :class="
                  $q.screen.xs
                    ? 'text-h6-sm q-mr-lg q-mb-lg q-mt-lg full-width'
                    : 'text-h6-sm q-mr-lg'
                "
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn
                color="primary"
                size="md"
                label="Create Outline"
                padding="0.5rem 2.2rem"
                dense
                :class="$q.screen.xs ? 'full-width' : ''"
                @click="showTable = !showTable"
              >
              </q-btn>
            </template>
          </q-table>
        </div>
        <div class="col-1 col-xs-12 col-md-1 col-xl-1"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      done1: false,
      done3:false,
      alert: false,
      showTable: false,
      filter: "",
      topicId: null,
      initial: 1,
      totalFormNumber: 1,
      outline_data: {
        outline: {
          course_id: null,
          year: null
        },
        topic: [
          {
            name: null,
            week_number: null,
            topic_activity: null
          }
        ]
      },
      year_options: ["2019" + "/" + "2020", "2020" + "/" + "2021"],
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555"
      },

      contentActiveStyle: {
        color: "black"
      },

      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      },
      columns: [
        {
          name: "week_number",
          align: "center",
          label: "Weekly",
          field: "week_number"
        },
        { name: "name", align: "center", label: "Topic Title", field: "name" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getAttendCourses").then(res => {
      this.$q.notify({
            message: "To View Created Course Outline, select Course and Year below, then click on View Course Outline."+
            "Select Course and Year then click on Next Button to Create  Outline",
            status: "201",
            timeout: Math.random() * 9000 + 3000,
            color: "info",
            position: "top"
          });
    });
  },
  computed: {
    /*  getCourses() {
      var courses = [];
      this.$store.getters.getAttendCourses.forEach(course => {
        courses.push({
          label: course.course_code + " " + course.title,
          value: course.id
        });
      });

      return courses;
    }, */
    getActivities() {
      var activities = [];
      this.$store.getters.getActivities.forEach(activity => {
        activities.push({
          label: activity.type,
          value: activity.id
        });
      });
      //console.log(activities);
      return activities;
    },
    getOutline() {
      return this.$store.getters.getCourseOutline;
    },
    getAttendCourse() {
      var courses = [];
      this.$store.getters.getAttendCourses.forEach(course => {
        courses.push({
          label: course.course_code + " " + course.title,
          value: course.id
        });
      });
      // console.log( courses)
      return courses;
    }
  },

  methods: {
    addFields() {
      //console.log(this.totalFormNumber)
      this.outline_data.topic.push({
        outline_id: null,
        name: null,
        week_number: null,
        topic_activity: null
      });
      this.totalFormNumber = this.totalFormNumber + 1;
    },
    SubmitData() {
      this.$store
        .dispatch("addOutline", [this.outline_data, this.totalFormNumber])
        .then(res => {
          const bar = this.$refs.bar;

          bar.start();

          this.timer = setTimeout(() => {
            if (this.$refs.bar) {
              this.$refs.bar.stop();
            }
          }, Math.random() * 5000 + 1000);
          this.$q.notify({
            message: "Course Outline was Successfully Created",
            status: "201",
            timeout: Math.random() * 5000 + 3000,
            color: "positive",
            position: "top-right"
          });
          //this.showTable = true;
        })
        .catch(err => {
          this.$q.notify({
            message: "Error! Course Outline was not Successfully Created",
            status: "422",
            timeout: Math.random() * 5000 + 3000,
            color: "negative",
            position: "top-right"
          });
        });
      this.$store
        .dispatch("getOutline", [
          this.outline_data.outline.course_id.value,
          this.outline_data.outline.year
        ])
        .then(res => {});
    },
    showActivity() {
      console.log(this.topicId);
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 800px;
}
</style>
