<template>
  <q-page class="q-mt-md">
    <div class="row flex flex-center" v-if="showForm">
      <q-card class="my-card ">
        <q-card-section class="bg-primary q-pa-xs">
          <div class="text-h6 text-center text-white">Add Course Schedule</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="SubmitForm">
            <q-select
              v-model="schedule.course_id"
              :options="getCourses"
              emit-value
              label="Choose Course"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              v-model="schedule.day"
              :options="option1"
              label="Course Day"
              :rules="[val => !!val || 'Field is required']"
            />

            <q-select
              v-model="schedule.period"
              :options="option2"
              label="Period"
              :rules="[val => !!val || 'Field is required']"
            />

            <q-input
              v-model="schedule.venue"
              label="Venue"
              :rules="[val => !!val || 'Field is required']"
            />

            <div class="q-mt-md">
              <q-btn
                type="submit"
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Save"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="!showForm">
      <q-table
        class="q-pt-lg q-my-lg q-mx-xs col-xs-12"
        :data="getCourseSchedule"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-left>
          <div class="text-h5">
            Course Schedules
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
            label="ADD Course Schedule"
            padding="0.5rem 2.2rem"
            dense
            :class="$q.screen.xs ? 'full-width' : ''"
            @click="showForm = !showForm"
          >
             
          </q-btn>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      schedule: {
        day: "",
        period: "",
        course_id: "",
        venue: ""
      },
      option1: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      option2: ["07-09", "09-11", "11-13", "13-15", "15-17"],
      filter: "",
      columns: [
         
        {
          name: "course_code",
          align: "left",
          label: "Course Code",
          field: "course_code"
        },
        { name: "title", align: "left", label: "Title", field: "title" },
        { name: "day", align: "left", label: "Course Day", field: "day" },
        {
          name: "period",
          align: "left",
          label: "Course Period",
          field: "period"
        },
        { name: "venue", align: "left", label: "Venue", field: "venue" }

      ]
    };
  },
   mounted() {
    this.$store
      .dispatch("getCourseSchedules")
      .then(res => {
         console.log('res')
      })
      .catch(err => {});
  
   
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
    getCourseSchedule() {
      return this.$store.getters.getCourseSchedules
    }
  },

  methods: {
    SubmitForm() {
      //console.log(this.schedule);
      this.$store.dispatch("addCourseSchedule", this.schedule).then(res => {
        (this.showForm = false),
          (this.schedule.course_id = null),
          (this.schedule.day = null),
          (this.schedule.period = null),
          (this.schedule.venue = null);
      });
    }
  },
  
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
</style>
