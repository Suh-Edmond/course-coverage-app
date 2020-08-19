<template>
  <q-page class="flex flex-center">
    <div class="q-mt-lg q-mt-xl-md q-mt-xs-xs ">
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
              <img src="~assets/instructor.png" width="120" height="120" />
              <div class="text-h6 text-weight-medium q-mt-md">
                    <q-radio name="userType" v-model="userType" val="lecturers" label="Lecturer" />
              </div>
            </div>
            <div class="col-2 col-md-2 q-my-sm col-xl-2"></div>
            <div class="col-5 col-md-5 col-xl-5  col-xs-12 q-pa-md">
              <img src="~assets/student.png" width="120" height="120" />
              <div class="text-h6 text-weight-medium q-mt-md">
                       <q-radio
                            name="userType"
                            v-model="userType"
                            val="course_delegates"
                            label="Course delegate"
                            
                            />
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section  >
          <div class="flex flex-center">
            <div>
                <q-btn
              class="q-pa-md text-center"
              color="primary"
              label="Next"
              icon-right="arrow_forward"
              @click="chooseAccount()"
            />
            </div>
            <q-space/>
            <div>
              <q-btn
              class=" q-pa-md text-center"
              color="primary"
              label="back"
              @click="chooseAccount()"
               
              to="/login"
              icon="arrow_back"
            />
            </div>
          </div>
        </q-card-section>
      </q-card>
      
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
    userType:'',
    link:"http://localhost:8080/#/course_delegates"
    }
  },

  methods: {
    chooseAccount(){
        this.$store.dispatch("chooseAccount", this.userType).then(res => {
           if(this.userType == "course_delegates"){
             this.$router.push("/register_course_delegates")
           }
           else if(this.userType =="lecturers") {
             this.$router.push("/register_lecturers")
           }else{
             this.$router.push("*")
           }
        })
    }
  }
}
</script>

<style scoped>
.my-card{
  width:700px;
}
.col-5 {
  border: 1px solid navy;
  height: 180px;
}
</style>
