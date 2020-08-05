<template>
  <q-page>
    <div class="flex flex-center">
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
            <div class="col-5 q-pa-md">
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
            <div class="col-2"></div>
            <div class="col-5 q-pa-md">
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
        <!-- <q-card-section>
          <q-dialog v-model="alert">
            <q-card>
              <q-card-section>
                <div class="text-h6">Alert</div>
              </q-card-section>
              <q-card-section class="q-pt-none text-red-10" >
               Passowrd or Matricule Number id incorrect
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card-section> -->
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
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Login"
                @click="SubmitData"
              />
            </div>
            <div class="row q-my-md">
              <div class="col-6  text-h6">
                <q-item-label
                  >No Account?
                  <a
                    href="http://localhost:8080/#/choose_account"
                    class="text-primary"
                    >Signup</a
                  ></q-item-label
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
</template>

<script>
// //type="a"
//                    href="http://localhost:8080/#/home"
export default {
  data() {
    return {
      user: "",
      type: "",
      password: null,
      matricule_number: null,
      dense: false,
      isPwd: true,
      alert:false,
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
        .dispatch("Login", [this.type, this.matricule_number, this.password])
        .then(res => {
          this.$router.push("/home");
        })
        .catch(err => {{ 
          this.alert =true
         }});
    }
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
