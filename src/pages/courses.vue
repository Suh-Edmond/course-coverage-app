<template>
  <q-page>
     <q-ajax-bar
      ref="bar"
      position="top"
      color="positve"
      size="10px"
      skip-hijack
    />
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
    <div v-if="!showTable">
      <q-table
        class="q-pt-lg q-my-lg q-mx-xs col-xs-12"
        :data="getCourse"
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
            :class="$q.screen.xs? 'text-h6-sm q-mr-lg q-mb-lg q-mt-lg full-width': 'text-h6-sm q-mr-lg'  "
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
          >
            
          </q-btn>
        </template>
      </q-table>
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
      showTable: false,
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
  mounted(){
    
       this.$store.dispatch("getAttendCourses").then(res => {
        
       })
    
  },
   
  methods: {
    submitForm(){
      //console.log(this.course);

      this.$store.dispatch("addCourse", this.course).then(res => {
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
    },
     trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  },

  computed: {
    getCourse() {
      console.log(this.$store.getters.getAttendCourses);
      return this.$store.getters.getAttendCourses;
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
