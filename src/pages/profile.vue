<template>
  <q-page class="q-mt-md flex flex-center">
    <div>
      <q-card class="my-card">
        <q-card-section class="bg-primary">
          <div class="text-center text-h5 text-white">User Profile</div>
        </q-card-section>
        <q-card-section v-for="details in getUserDetails" :key="details[details]">
          <q-list>
            <q-item>
              <q-item-section class="text-weight-bold text-h6">
                <q-item-label><span class="q-pr-sm"><q-icon name="person" style="font-size:2.2em"/></span> Basic Information</q-item-label>
              </q-item-section> 
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>Name</q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo text-weight-medium">
                <q-item-label>{{getUserDetails[0]['user_name']}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>Matricule Number  </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo text-weight-medium">
                <q-item-label>{{getUserDetails[0]['matricule_number']}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section>
          <q-list>
             <q-item v-ripple>
              <q-item-section class="text-weight-bold text-h6">
                <q-item-label>Contact Information</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label><span class="q-pr-md"><q-icon name="email" style="font-size:1.9em"/></span>  Email</q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo text-weight-medium">
                <q-item-label>{{getUserDetails[0].email}}</q-item-label>
              </q-item-section>
            </q-item>
           <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label><span class="q-pr-md"><q-icon name="phone" style="font-size:1.9em"/></span> Telephone </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo text-weight-medium">
                <q-item-label>{{ getUserDetails[0]['telephone']}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      
      user :{ 
        user_name :null,
        matricule_number:null,
        email: null,
        telephone:null,
         type:null,
      },
      
 
      
    };
  },
  mounted(){
    this.$store.dispatch("getDetailsOfCurrentUser").then(res => {

    })
  },
  computed: {
    getUserDetails(){
      
      return this.$store.getters.getUserDetails
    },
    // getUserType() {
    //   this.user.type = getUserType
    // }
  },
  methods: {
    updateProfile(){
      this.$store.dispatch("updateProfile", this.user).then(res => {
        console.log(this.user)
      })
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 700px;
}
</style>
