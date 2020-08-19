<template>
  <q-page >
    <q-ajax-bar
      ref="bar"
      position="top"
      color="positive"
      size="10px"
      skip-hijack
    />
    <div class="row flex flex-center q-mt-md">
      <div class="  text-h5 text-weight-bold">
        Record Course Work
      </div>
    </div>
    <div class="row flex flex-center q-gutter-sm q-mt-xs q-my-lg q-mx-auto">
      <div class="col-1"></div>
      <div class="col-2 col-xs-12 col-md-2 col-xl-2">
           <q-select
              :options="year_options"
              v-model="coverage.year"
              label="Choose year "
              dense
              :rules="[val => !!val || 'Field is required']"
            />
      </div>
      <div class="col-4  col-xs-12 col-md-4 col-xl-4">
        <q-select
          :options="getCourses"
          dense
          v-model="coverage.course_id"
          label="Choose Course "
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4 col-xs-12 col-md-4 col-xl-4">
        <q-btn
          color="primary"
          label="display Coverage information"
          @click="SubmitFormData"
        >
        </q-btn>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row q-mx-xs flex flex-center q-mt-lg" v-if="showForm">
      <q-card class="my-card q-mb-lg">
        <q-card-section class="bg-primary q-pa-md">
          <div class="text-h6 text-center text-white">
            Course Work: {{ this.coverage.course_id.label }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-sm" @submit="RecordCourseWork">
            <q-input
              type="number"
              dense
              v-model="coverage.week_number"
              label="Weekly"
              :rules="[
                val =>
                  (val !== null && val !== '') || 'Please type a credit value',
                val =>
                  (val > 0 && val <= 15) || 'Please type a valid credit value'
              ]"
            />
            <q-select
              :options="option2"
              dense
              v-model="coverage.day"
              label="Choose day"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="option3"
              v-model="coverage.period"
              dense
              label="Choose period "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getCourseTopics"
              v-model="coverage.topic_id"
              dense
              label="Choose Topic "
              :rules="[val => !!val || 'Field is required']"
              
            />
            <q-select
              :options="getActivities"
              v-model="coverage.activity_id"
              dense
              label="Choose Activity "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getCourseLecturers"
              v-model="coverage.lecturer_id"
              dense
              label="Choose Lecturer "
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md  q-mb-lg flex flex-center">
              <q-btn
                type="submit"
                class="q-pa-xs text-center q-mr-lg"
                color="primary"
                label="Record Work"
                size="md"
                @click="trigger"
              />
              <q-btn
                type="reset"
                class="q-pa-xs text-center q-mr-lg"
                color="secondary"
                label="Reset"
                size="md"
                @click="Reset()"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      showForm: false,
      completed:false,
      coverage :{
            course_id: null,
            week_number: null,
            year:null,
            day: null,
            period:null,
            topic_id:null,
            activity_id:null,
            lecturer_id:null,
      },
      option2: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
       year_options: [
        "2019"+"/"+"2020",
        "2020"+ "/"+ "2021",
      ],
      option3: ["07-09", "09-11", "11-13", "13-15", "15-17"],
 
    };
  },
  computed: {
    getCourses() {
      var courses = [];
      this.$store.getters.getAttendCourses.forEach(course => {
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
       
      return activities;
    },
    getCourseLecturers() {
      var courseLecturer = [];
       this.$store.getters.getCourseLecturers.forEach(lecturer => {
          courseLecturer.push({
          label:lecturer.user_name,
         value:lecturer.id
        });
       });
      //console.log(courseLecturer);
       return courseLecturer;
    },
    getCourseTopics(){
      var topics = [];
      this.$store.getters.getCourseTopics.forEach(topic  => {
        topics.push({
          label:topic.name,
          value:topic.id
        })
      })
      return topics
    }
  },
  methods: {
    SubmitFormData() {
      this.showForm = true;
      this.GetCourseLecturers();
      this.GetCourseTopics();
      
    },

    GetCourseLecturers()
    {
      this.$store.dispatch("getCourseLecturers", this.coverage.course_id).then (res => {
          //console.log(this.coverage.course_id)
      })
    },
//get all course topics
    GetCourseTopics()
    {
      this.$store.dispatch("getTopics", [this.coverage.course_id, this.coverage.year]).then(res => {
        //console.log(this.year)
      })
    },
//record work done for a course
    RecordCourseWork()
    {
      this.$store.dispatch("RecordCourseWork", this.coverage).then (res => {
      //   this.$q.loading.show()
      //    this.timer = setTimeout(() => {
      //   this.$q.loading.hide()
      //   this.timer = void 0
      //  }, 6000)
       this.$q.notify({
           message: 'Course Work was Successfully Recorded',
           status: '201',
           timeout: Math.random() * 1000 + 3000,
           color:"positive",
           position:"top-right"
        })
      }).catch(err=>{
        this.$q.notify({
           message: 'Error! Course Work was not Successfully Recorded',
           status: '422',
          timeout: Math.random() * 5000 + 3000,
          color:"negative",
           position:"top-right"
        })
      })
    },
//reset fields
    Reset(){
      this.coverage.week_number = null;
      this.coverage.day = null;
      this.coverage.period = null;
      this.coverage.topic_id = null;
      this.coverage.activity_id = null;
      this.coverage.lecturer_id = null;
      
    },
    trigger() {
       const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  },
   
};
</script>

<style scoped>
.my-card {
  width: 800px;
}
</style>
