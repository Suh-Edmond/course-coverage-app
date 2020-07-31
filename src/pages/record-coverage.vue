<template>
  <q-page class="q-ma-lg">
    <div class="row flex flex-center q-mt-lg">
      <div class="text-h5">
        Record Course Work
      </div>
    </div>
    <div class="row flex flex-center q-gutter-md q-mt-lg q-mb-lg">
      <div class="col-2"></div>
      <div class="col-4">
        <q-select
          :options="getCourses"
          v-model="coverage.course_id"
          emit-value
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
      <div class="col-2"></div>
    </div>
    <div class="row flex flex-center" v-if="showForm">
      <q-card class="my-card q-mb-lg">
        <q-card-section class="bg-primary q-pa-lg">
          <div class="text-h5 text-center text-white">
            Course Work for
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              type="number"
              v-model="coverage.weekly"
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
              :options="option4"
              v-model="coverage.topics_id"
              label="Choose Topic "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="getActivities"
              v-model="coverage.activities_id"
              emit-value
              label="Choose Activity "
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              :options="option6"
              v-model="coverage.lecturers_id"
              label="Choose Lecturer "
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md  q-gutter-lg q-mb-lg flex flex-center">
              <q-btn
                type="submit"
                class="q-pa-xs text-center"
                color="primary"
                label="Save"
              />
              <q-btn
                type="reset"
                class=" q-pa-xs text-center"
                color="secondary"
                label="Reset"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      coverage :{
            course_id: "",
            weekly: "",
            day: "",
            period: "",
            topics_id: "",
            activities_id: "",
            lecturers_id: "",
      },
      option2: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      option3: ["07-09", "09-11", "11-13", "13-15", "15-17"],
      option4: [
        "Diffie-Hellman",
        "RSA",
        "Introduction to Cryptographic",
        "Protocols"
      ],
      option5: ["Lecture", "Tutorial", "Practical"],
      option6: [
        "Dr.  Nkweteyim Denis",
        "Dr. Nyamsi Madeleine",
        "Dr.Williams Shu"
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getActivities").then(res => {
       // console.log("hello");
    }).catch(res => {});
    this.$store.dispatch("getTopics").then(res => {
        //console.log("Helo");
    }).catch(res =>{});
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
    SubmitFormData() {
      this.showForm = true;
    }
  },
   
};
</script>

<style scoped>
.my-card {
  width: 800px;
}
</style>
