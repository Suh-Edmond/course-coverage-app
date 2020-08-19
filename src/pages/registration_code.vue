<template>
  <q-page>
    <div class="row flex flex-center">
      <h4 class="text-h5 text-weight-bold ">Generate Course delegate Registration Code</h4>
    </div>
    <div class="row q-gutter-md flex flex-center q-mb-lg">
      <div :class="$q.screen.xs ? 'col-xs-6' : 'col-4'">
        <q-input
          v-model="course_code"
          label="Enter Course Code"
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div>
        <q-btn
          :class="$q.screen.xs ? 'col-xs-6' : 'col-3'"
          color="primary"
          label="generate code"
          @click="generateAccessId()"
        />
      </div>
    </div>
    <div class="row flex flex-center">
      <div :class="$q.screen.xs ? 'col-xs-6' : 'col-3'">
            <q-item-label class="text-center text-weight-bold"> Registration Code </q-item-label>
        <q-input 
          v-model="this.access_id"
          readonly
          outlined
        />
      </div>
      
    </div>
     <!-- <div class="row flex flex-center q-mt-md">
       <div :class="$q.screen.xs ? 'col-xs-6' : 'col-3'">
            <q-btn
              type="reset"
              color="negative"
              label="Reset code"
              @click="reset()"
            />
        </div>
      </div>  -->
  </q-page>
</template>
<script>
//import { mapActions } from 'vuex'
export default {
  data() {
    return {
      filter: '',
      access_id:null,
      course_code:null,
    };
  },
 

  computed: {
     
  },
  methods : {
    // ...mapActions('actions/generateAccessId', ['code']),
    generateAccessId(){
      this.$store.dispatch("generateAccessId", this.course_code).then(res => {
        this.access_id = res.data
      })
    },
    reset(){
      this.access_id = null
    }
  }
};
</script>

<style scoped></style>
