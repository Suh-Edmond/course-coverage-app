<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-pa-sm">
        <q-toolbar-title class="text-center text-h6">
          Welcome to Course Coverage 2020.
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="bg-cyan-1">
        <div class="flex flex-center">
          <q-card class="my-card q-mt-md q-mb-md">
            <q-card-section class="flex flex-center">
              <div class="row text-primary text-h6 text-weight-bolder">
                Choose Account Type
              </div>
            </q-card-section>
            <q-card-section class="text-center">
              <div class="row">
                <div class="col-5 q-pa-md">
                  <img src="~assets/instructor.png" width="100" height="90" />
                  <div class="text-h6 text-weight-medium q-mt-md">
                    <q-checkbox v-model="instructor" label="Lecturer" />
                  </div>
                </div>
                <div class="col-2"></div>
                <div class="col-5 q-pa-md">
                  <img src="~assets/student.png" width="100" height="90" />
                  <div class="text-h6 text-weight-medium q-mt-md">
                    <q-checkbox v-model="course_delegate" label="Course Delegate" />
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="text-center text-grey-7 text-weight-medium">
              <q-item-section>
                <q-item-label> Hi Lecturer</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  Please Fill out the form below to get started.
                </q-item-label>
              </q-item-section>
            </q-card-section>
            <q-card-section class="q-my-md q-mx-lg">
              <q-form>
                <q-input
                  outlined
                  :dense="dense"
                  v-model="matricule_number"
                  label="Matricule Number"
                  :rules="[val => !!val || 'Field is required']"
                />
                <q-input
                  v-model="password"
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <div class="q-mt-md">
                  <q-btn
                    type="submit"
                    class="full-width q-pa-xs text-center"
                    color="primary"
                    label="Login"
                  />
                </div>
                <div class="row q-my-lg">
                  <div class="col-6  text-h6">
                    <q-item-label
                      >No Account?
                      <a href="#" class="text-primary">Signup</a></q-item-label
                    >
                  </div>
                  <div class="col-6 text-h6 ">
                    <q-item-label class="float-right">
                      <a href="#" class="text-primary"
                        >Forgot Password?</a
                      ></q-item-label
                    >
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      instructor: false,
      showLogin: false,
      course_delegate: false,
      password: null,
      matricule_number: null,
      dense: false,
      isPwd: true
    };
  },
  methods: {
    goLogin() {
      this.showLogin = false;
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 600px;
}
.col-5 {
  border: 1px solid navy;
  height: 180px;
}
a {
  text-decoration: none;
}
</style>
