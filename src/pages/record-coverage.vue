<template>
  <q-page class="q-ma-lg">
    <div class="row flex flex-center q-mt-lg">
      <div class="  text-h5 text-weight-bold">
        Record Course Work
      </div>
    </div>
    <div class="row flex flex-center q-gutter-md q-mt-lg q-mb-lg">
      <div class="col-1"></div>
      <div class="col-2">
           <q-select
              :options="year_options"
              v-model="year"
              label="Choose year "
              :rules="[val => !!val || 'Field is required']"
            />
      </div>
      <div class="col-4">
        <q-select
          :options="getCourses"
          v-model="coverage.course_id"
          label="Choose Course "
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4">
        <q-btn
          color="primary"
          label="display Coverage information"
          @click="SubmitFormData"
         
        >
        </q-btn>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row flex flex-center" v-if="showForm">
      <q-card class="my-card q-mb-lg">
        <q-card-section class="bg-primary q-pa-lg">
          <div class="text-h5 text-center text-white">
            Course Work for {{ this.coverage.course_id.label }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              type="number"
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
              v-model="coverage.day"
              label="Choose day"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="option3"
              v-model="coverage.period"
              label="Choose period "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getCourseTopics"
              v-model="coverage.topic_id"
               
              label="Choose Topic "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getActivities"
              v-model="coverage.activity_id"
              
              label="Choose Activity "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getCourseLecturers"
              v-model="coverage.lecturer_id"
              
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
                @click="RecordCourseWork()"
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
      year:null,
      coverage :{
            course_id: null,
            week_number: null,
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
      this.$store.dispatch("getTopics", [this.coverage.course_id, this.year]).then(res => {
        //console.log(this.year)
      })
    },
//record work done for a course
    RecordCourseWork()
    {
      this.$store.dispatch("RecordCourseWork", this.coverage).then (res => {
         this.Reset();
      }).catch(err=>{})
    },
//reset fields
    Reset(){
      this.coverage.week_number = null;
      this.coverage.day = null;
      this.coverage.period = null;
      this.coverage.topic_id = null;
      this.coverage.activity_id = null;
      this.coverage.lecturer_id = null;
    }
  },
   
};
</script>

<style scoped>
.my-card {
  width: 800px;
}
</style>
