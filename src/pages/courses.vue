<template>
  <q-page>
    <div class="row flex flex-center " v-if="showForm">
      <q-card class="my-card col-xs-12 q-my-xs q-mx-xs">
        <q-card-section class="bg-primary q-pa-sm">
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
                @click="addCourse()"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="!showForm">
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
            @click="showForm = !showForm"
          >
            
          </q-btn>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="showItem">
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
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  namespaced: true,
  data() {
    return {
      showForm: false,
      showItem: false,
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
    submitForm() {
      //console.log(this.course);
      this.$store.dispatch("addCourse", this.course).then(res => {
        this.showForm = false;
        this.course.course_code =null,
        this.course.title=null,
        this.course.credit_value=null,
        this.course.semester=null,
        this.course.type=null
      });
    }
  },

  computed: {
    getCourse() {
      //console.log(this.$store.getters.getCourse);
      return this.$store.getters.getCourse;
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
