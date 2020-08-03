<template>
  <div class="q-pa-md">
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
            @click=" () => {
                done1 = true;
                step = 2;
              }"
            color="primary"
            label="Continue"
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
      <q-scroll-area style="height: 200px;" 
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle">
        <div class="row flex flex-center">
          <q-card class="my-card q-mb-lg">
            <q-card-section>
              <q-form class="q-gutter-md">
                <div class="row q-col-gutter-lg q-ml-xs">
                  <template v-for="initial in  totalFormNumber">
                    <div class="col-md-6"  :key="initial + 'a'">
                      <q-input
                        v-model="outline_data.topic[initial-1].name"
                        label="Topic"
                        :rules="[val => !!val || 'Field is required']"
                      />
                    </div>
                    <div class="col-2"  :key="initial + 'b'">
                      <q-input
                        outlined
                        v-model="outline_data.topic[initial-1].week_number"
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
                    <div class="col-4"  :key="initial + 'c'">
                      <q-select
                        multiple
                        v-model="outline_data.topic[initial-1].topic_activity"
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
               <div >
                   <q-btn @click="addFields()" color="primary" icon="add" size="md" round>
                       <q-tooltip> click to  fields for topic, weekly and activity</q-tooltip>
                    </q-btn>
                </div>
            </q-card-section>

          </q-card>
        </div>
      </q-scroll-area>
        <q-stepper-navigation>
          <q-btn   color="primary" label="Create Account" @click="SubmitData()">
            
          </q-btn>
          <q-btn
            @click=" step = 1"
            color="secondary"
            label="Back"
            icon="arrow_back"
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
      done1:false,
      alert :false,
      initial: 1,
      totalFormNumber: 1,
      outline_data: {
        outline: {
          course_id: null,
          year: null
        },
        topic: [{
          name: null,
          week_number: null,
          topic_activity: null
        }]
      },
      year_options: [
        "2019"+"/"+"2020",
        "2020"+ "/"+ "2021",
       "2021"+"/"+"2022",
        "2022"+"/"+"2023",
        
      ],
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },

      contentActiveStyle: {
        
        color: 'black'
      },

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
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
    },
    getActivities() {
      var activities = [];
      this.$store.getters.getActivities.forEach(activity => {
        activities.push({
          label: activity.type,
          value: activity.id
        });
      });
      console.log(activities);
      return activities;
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
          this.totalFormNumber = this.totalFormNumber +1;
        },
        SubmitData()
        {
          this.$store.dispatch("addOutline", [this.outline_data , this.totalFormNumber]).then(res => {
               // console.log(this.outline_data);
          }).catch(err=>{})
        },
        Reset()
        {
          this.outline_data.outline.course_id = null;
          this.outline_data.outline.year = null;
          this.outline_data.topic.name = null;
          this.outline_data.topic.week_number = null;
          this.outline_data.topic.topic_activity = null;
        },
        veriifyData(){
            
        }
  }
};
</script>

<style scoped>
.my-card {
  width: 700px;
    /* v-model="outline_data.topic[initial].topic_activity[initial].activtity_id" */
}

</style>
  