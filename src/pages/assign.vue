<template>
  <q-page>
    <q-ajax-bar
      ref="bar"
      position="top"
      color="positve"
      size="10px"
      skip-hijack
    />
    <div class="row flex flex-center q-gutter-md q-mt-lg">
      <div class="col-4 col-md-4 col-xl-4 col-xs-6">
        <q-select
          v-model="course_id"
          :options="Courses"
          label="Select Course"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-2 col-md-2 col-xl-2 col-xs-4">
        <q-btn label="Add Course" color="primary" @click="SubmitData()"/>
      </div>
    </div>
    <div v-if="!showTable">
      <q-table
        class="q-pt-lg q-my-lg q-mx-xs col-xs-12"
        :data="getSelectedCourse"
        :columns="columns"
        row-key="id"
        :filter="filter"
      >
        <template v-slot:top-left>
          <div class="text-h5">
            Courses
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
            label="Create Course"
            padding="0.5rem 2.2rem"
            dense
            :class="$q.screen.xs? 'full-width': ''"
            @click="showTable = !showTable"
          />
        </template>
      </q-table>
    </div>
   <div  class="row flex flex-center"  v-if="showTable">
      <q-card class="my-card col-xs-12 q-my-xs q-mx-xs">
        <q-card-section class="bg-primary q-pa-md">
          <div class="text-h6 text-center text-white">Create New Course</div>
        </q-card-section>
        <q-card-section>
          <q-form  @submit="submitForm">
            <q-input
              v-model="course.course_code"
              label="Course Code"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="course.title"
              label="Title"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="number"
              v-model="course.credit_value"
              label="Credit Value"
              :rules="[
                val =>
                  (val !== null && val !== '') || 'Please type a credit value',
                val =>
                  (val >= 2 && val <= 6) || 'Please type a valid credit value'
              ]"
            />
            <q-select
              v-model="course.type"
              :options="option1"
              label="Type"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              v-model="course.semester"
              :options="option2"
              label="Semester"
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md">
              <q-btn
                type="submit"
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Add"
                
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
 
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  namespaced: true,
  data() {
    return {
      showTable:false,
      course_id: null,
      visible: false,
      filter: null,
      option1: ["Major", "Elective"],
      option2: ["First Semester", "Second Semester"],
      course: {
        semester: "",
        type: "",
        credit_value: "",
        title: "",
        course_code: ""
      },
      columns: [
        {
          name: "course_code",
          align: "left",
          label: "Course Code",
          field: "course_code"
        },
        { name: "title", align: "left", label: "Title", field: "title" },
        {
          name: "credit_value",
          align: "left",
          label: "Credit Value",
          field: "credit_value"
        },
        { name: "type", align: "left", label: "Type", field: "type" },
        {
          name: "semester",
          align: "left",
          label: "Semester",
          field: "semester"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getSelectedCourse").then(res => {
        
       });
  },
  methods: {
    SubmitData() {
      
      this.$store.dispatch("selectCourse", this.course_id).then(res => {
         
           
      });
       this.$store.dispatch("getSelectedCourse").then(res => {
        
       });
    },
    submitForm() {
          this.$store.dispatch("lecturerAddCourse", this.course).then(res => {
        this.$q.notify({
           message: 'Course was Successfully Created',
           status: '201',
           timeout: Math.random() * 5000 + 3000,
           color:"positive",
           position:"top-right"
        })
        
       this.$store.dispatch("getAttendCourses").then(res => {
        
       })
         this.showTable = false;
         this.course.course_code =null
         this.course.credit_value =null
         this.course.type =null;
         this.course.semester=null
         this.course.title =null
      }).catch(err=> {
        this.$q.notify({
           message: 'Error! Course was not Created',
           status: '422',
          timeout: Math.random() * 5000 + 3000,
          color:"negative",
           position:"top-right"
        })
      })
    }
  },

  computed: {
    //getting all courses for a lecturer
      getSelectedCourse() {
        return this.$store.getters.getSelectedCourse
       },
       //list of all courses in  system
    Courses() {
      var courses = [];
      this.$store.getters.getCourse.forEach(course => {
        courses.push({
          label: course.course_code + " " + course.title,
          value: course.id
        });
      });

      return courses;
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 700px;
}
.my-card2 {
  width: 700px;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
