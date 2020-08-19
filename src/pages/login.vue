<template>
  <q-page  class="flex flex-center">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="positive"
      size="10px"
      skip-hijack
    />
    <div>
      <q-card class="my-card">
        <q-card-section
          class="row text-primary text-h6 text-weight-bolder flex flex-center"
        >
          <div>
            Choose Account Type
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div class="row">
            <div class="col-5 col-md-5 col-xl-5 col-xs-12 q-pa-md">
              <img src="~assets/instructor.png" width="100" height="90" />
              <div class="text-h6 text-weight-medium q-mt-md">
                <q-radio
                  v-model="user"
                  name="user"
                  val="Lecturer"
                  label="Lecturer"
                />
              </div>
            </div>
            <div class="col-2 q-my-sm col-md-2 col-xl-2"></div>
            <div class="col-5 col-md-5 col-xl-5 col-xs-12 q-pa-md">
              <img src="~assets/student.png" width="100" height="90" />
              <div class="text-h6 text-weight-medium q-mt-md">
                <q-radio
                  v-model="user"
                  name="user"
                  val="Course delegate"
                  label="Course delegate"
                />
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="text-center text-grey-7 text-weight-medium">
          <q-item-section>
            <q-item-label> Hi {{ user }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Please Fill out the form below to get started.
            </q-item-label>
          </q-item-section>
        </q-card-section>
        <q-card-section class="q-my-sm q-mx-xs">
            <q-form @submit="SubmitData">
              <div>
                <q-input
                  outlined
                  :dense="dense"
                  v-model="email"
                  label="Email"
                  :rules="[val => !!val || 'Field is required']"
                />
              </div>
              <q-input
                v-model="password"
                outlined
                :type="isPwd ? 'password' : ''"
                label="Password"
                :rules="[val => !!val || 'Field is required']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="q-mt-sm col-xs-8">
                <q-btn
                  class="full-width q-pa-xs text-center"
                  color="primary"
                  label="Login"
                  type="submit"
                  @click="trigger"
                />
              </div>
              <div  class="flex flex-center q-mt-lg col-xs-6">
                  <q-btn
                  class="full-width q-pa-xs text-center"
                  color="primary"
                  label=" Create Account"
                  type="submit"
                 to="choose_account"
                  @click="trigger"
                />
                 
                <!-- <div class="col-6 col-md-6 col-xs-6 text-h6 ">
                  <q-item-label class="float-right">
                    <a href="#"  @click="trigger" class="text-primary"
                      >Forgot Password?</a
                    ></q-item-label
                  >
                </div> -->
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
      user: "",
      type: "",
      password: null,
      email: null,
      dense: false,
      isPwd: true
    };
  },
  methods: {
    SubmitData() {
      if (this.user == "Course delegate") {
        this.type = "course_delegates";
      } else if (this.user == "Lecturer") {
        this.type = "lecturers";
      } else {
        this.type = "";
      }
      this.$store
        .dispatch("logInUser", {type: this.type, email: this.email, password: this.password})
        .then(res => {
       this.$store.dispatch("SAVETYPE", this.type).then(res => {

       })
       this.$q.notify({
          message: 'Login was Successful',
          status: '422',
          timeout: Math.random() * 5000 + 3000,
          color:"positive",
          position:"top-right"
        })
          this.$router.push("/home");
        })
        .catch(err => {
          {
               this.$q.notify({
          message: 'Error! Login Failed',
          status: '422',
          timeout: Math.random() * 5000 + 3000,
          color:"negative",
          position:"top-right"
        })
          }
        });
    },
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    },
      
  }
};
</script>

<style>
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
