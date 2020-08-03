<template>
  <q-page>
    <div class="row flex flex-center q-gutter-md q-mt-lg">
      <div class="col-4">
        <q-select
          v-model="course_id"
          :options="addCourse"
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
        :data="getCourseOfLecturer"
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

    <!-- <q-dialog v-model="showItem">
      <q-card class="my-card2 q-mb-lg">
        <q-card-section class="bg-primary q-pa-lg">
          <div class="text-h5 text-center text-white">Update Course</div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
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
              v-model="course.model_type"
              :options="course.option1"
              label="Type"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              v-model="course.model_semester"
              :options="course.option2"
              label="Semester"
              :rules="[val => !!val || 'Field is required']"
            />
          </q-form>
        </q-card-section>

        <q-card-actions class="q-pa-lg q-gutter-md row justify-between">
          <div>
            <q-btn
              v-close-popup
              color="primary"
              label="update"
              @click="showItem = !showItem"
            />
          </div>
          <div>
            <q-btn v-close-popup color="red" label="delete" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog> -->
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  namespaced: true,
  data() {
    return {
        lecturer_id:1,
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

  methods: {
    SubmitData() {
      //console.log(this.course);
      this.$store.dispatch("selectCourse", [this.course_id, this.lecturer_id]).then(res => {
        //console.log(this.course_id, this.lecturer_id);
      });
      this.$store.dispatch("getSelectedCourse",  this.lecturer_id).then(res => {
       // console.log(this.course_id, this.lecturer_id);
      });
    }
  },

  computed: {
      getCourseOfLecturer() {
        console.log(this.$store.getters.getCourse);
        return this.$store.getters.getCourse;
      },
    addCourse() {
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
