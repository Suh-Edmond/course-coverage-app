<template>
  <q-page>
    <div class="row flex flex-center">
      <h4 class="text-h5 ">Add Appointed Course</h4>
    </div>
    <div class="row q-gutter-md flex flex-center q-mb-lg">
      <div :class="$q.screen.xs ? 'col-xs-6' : 'col-4'">
        <q-select
          :options="course_options"
          v-model="course_id"
          label="Choose Course"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div>
        <q-btn
          :class="$q.screen.xs ? 'col-xs-6' : 'col-3'"
          color="primary"
          label="Add Course"
        />
      </div>
    </div>
    <div class="row flex flex-center">
      <q-btn
        color="primary"
        label="View Appointed Courses"
        @click="showForm = true"
      />
    </div>
    <div v-if="showForm" class="row q-mx-lg flex flex-center">
      <q-table
        class="q-pt-lg q-my-lg q-mx-xs col-xs-12"
         :data="getCourse"
        :columns="columns"
        row-key="id"
        :filter="filter"
      >
        <template v-slot:top-left>
          <div class="text-h6">
            Appointed Courses
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
export default {
  data() {
    return {
      filter: '',
      showForm: false,
      course_id:'',
      course_options:[],
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
  //  mounted() {
  //   this.$store
  //     .dispatch("getCourseCodes")
  //     .then(res => {
  //       // console.log(res)
  //     })
  //     .catch(err => {});
  // },

  computed: {
    getCourse() {
      //console.log(this.$store.getters.getCourse);
       return this.$store.getters.getCourse;
    },
    getCourseCode() {
     console.log(this.$store.getters.getCourseCode);
    }
  }
};
</script>

<style scoped></style>
