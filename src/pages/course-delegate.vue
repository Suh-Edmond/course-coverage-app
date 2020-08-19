<template>
  <q-page>
    <!-- <div v-if="showForm" class="flex flex-center">
      <q-card class="my-card">
        <q-card-section class="bg-primary q-pa-xs">
          <div class="text-h6 text-center text-white">Create Account</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              v-model="course_delegate.user_name"
              label="First Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="course_delegate.matricule_number"
              label="Matricule Number"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="email"
              v-model="course_delegate.email"
              label="Email"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="course_delegate.telephone"
              label="Telephone"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="password"
              v-model="course_delegate.password"
              label="Password"
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md">
              <q-btn
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Create Account"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div> -->
    <div>
         
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  // mounted() {
  //   this.$store
  //     .dispatch("getCourseDelegates")
  //     .then(res => {})
  //     .catch(err => {});
  // },

  computed: {
    
  },

  methods: {
    /*submitForm() {
      //console.log(this.course_delegate)
      this.$store
        .dispatch("addCourseDelegate", this.course_delegate)
        .then(res => {
          this.showForm = false;
          this.course_delegate.user_name = null;
          this.course_delegate.email = null;
          this.course_delegate.matricule_number = null;
          this.course_delegate.telephone = null;
          this.course_delegate.password = null;
        });
    }*/
  }
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
</style>
