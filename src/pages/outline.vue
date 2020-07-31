<template>
  <div class="q-pa-md">
    <q-btn
      label="Reset"
      push
      color="white"
      text-color="primary"
      @click="step = 1"
      class="q-mb-md"
    />

    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
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
                  :options="getCourses"
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
            label="Continue"
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
        <div class="row flex flex-center">
          <q-card class="my-card q-mb-lg">
            <q-card-section>
              <q-form class="q-gutter-md">
                <div class="row q-col-gutter-lg q-ml-xs">
                  <template v-for="initial in totalFormNumber">
                    <div class="col-md-6">
                      <q-input
                        v-model="outline_data.topic[initial].name"
                        @change="
                          outline_data.topic[initial] = {
                            name: null,
                            week_number: null
                          }
                          ;
                          totalFormNumber == initial
                            ? (totalFormNumber += 1)
                            : totalFormNumber
                        "
                        :key="initial"
                        label="Topic"
                        :rules="[val => !!val || 'Field is required']"
                      />
                    </div>
                    <div class="col-2">
                      <q-input
                        outlined
                        :key="initial"
                        v-model="outline_data.topic[initial].week_number"
                        label="Weekly"
                        :rules="[
                          val =>
                            (val !== null && val !== '') ||
                            'Please type a credit value',
                          val =>
                            (val > 0 && val <= 15) ||
                            'Please type a valid credit value'
                        ]"
                      />
                    </div>
                    <div class="col-4">
                      <q-select
                        :key="initial"
                        multiple
                        
                        :options="activity_options"
                        label="Choose Activity"
                        :rules="[val => !!val || 'Field is required']"
                      />
                    </div>
                  </template>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="onSubmit"
            color="primary"
            label="Finish"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      initial: 1,
      totalFormNumber: 1,
      outline_data: {
        outline: {
          course_id: null,
          year: null
        },
        topic: [{
          outline_id: null,
          name: null,
          week_number: null 
        },
        {
          outline_id: null,
          name: null,
          week_number: null 
        }
        ],
        topic_activity: {
          topic_id: null,
          activity_id: null
        }
      },
      year_options: [
        "2019/2020",
        "2020/2021",
        "2021/2022",
        "2022/2023",
        "2023/2024"
      ],
      activity_options: [
        {
          label: "Lecturer",
          value: "1"
        },
        { label: "Tutorial", value: "3" },
        { label: "Practical", value: "2" }
      ]
    };
  },

  computed: {
    getCourses() {
      var courses = [];
      this.$store.getters.getCourse.forEach(course => {
        courses.push({
          label: course.course_code + " " + course.title,
          value: course.id
        });
      });

      return courses;
    }
  },

  methods: {
    onSubmit () {
      console.log(this.outline_data)
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 700px;
}
</style>
