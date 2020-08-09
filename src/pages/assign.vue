<template>
  <q-page>
    <div class="row flex flex-center q-gutter-md q-mt-lg">
      <div class="col-4">
        <q-select
          v-model="course_id"
          :options="Courses"
          label="Select Course"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-2">
        <q-btn label="Add Course" color="primary" @click="SubmitData()"/>
      </div>
    </div>
    <div>
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
      //lecturer_id:1,
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
  width: 500px;
}
.my-card2 {
  width: 700px;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
