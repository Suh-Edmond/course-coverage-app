<template>
  <q-page class="row flex flex-center">
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
            <div class="col-5 q-pa-md">
              <img src="~assets/instructor.png" width="100" height="90" />
              <div class="text-h6 text-weight-medium q-mt-md">
                    <q-radio name="userType" v-model="userType" val="lecturers" label="Lecturer" />
              </div>
            </div>
            <div class="col-2"></div>
            <div class="col-5 q-pa-md">
              <img src="~assets/student.png" width="100" height="90" />
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
        <q-card-section class="flex flex-center">
          <div>
            <q-btn
              class="full-width q-pa-xs text-center"
              color="primary"
              label="Continue"
              type="a"
              href="http://localhost:8080/#/register"
              @click="chooseAccount()"
            />
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
      
    }
  },

  methods: {
    chooseAccount(){
        this.$store.dispatch("chooseAccount", this.userType).then(res => {
           // console.log(this.userType)
        })
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 700px;
}
.col-5 {
  border: 1px solid navy;
  height: 180px;
}
</style>
