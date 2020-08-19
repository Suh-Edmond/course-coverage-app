<template>
  <q-page>
      <div class="row q-mt-md q-mr-md q-ml-sm q-col-gutter-sm">
        <div class="col-3 col-xs-12 col-md-3 col-xl-3">
           <q-card class="my-card-home bg-primary" v-if="getType == 'lecturers'">
             <q-card-section class="text-white">
            <div class="text-h6 text-center">Course</div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="text-white text-h5">
            <q-item-section> 
              <q-item-label>
                Total: {{ getNumberOfCoursePerLecturer }}
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div>
        <!-- <div class="col-3  col-xs-12 col-xl-3 col-md-3">
           <q-card class="my-card-home bg-primary">
             <q-card-section class="text-white">
            <div class="text-h6 text-center">Course Delegate</div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="text-white text-h5">
            <q-item-section> 
              <q-item-label>
                Total:{{ getNumberOfCourseDelegate }}
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div> -->
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  

 mounted() {
     this.$store.dispatch("getNumberOfCoursePerLecturer").then(res => {

     })
    //  this.$store.dispatch("getNumberOfCourseDelegates").then(res => {

    //  })
  },
  computed:{
    getNumberOfCoursePerLecturer()
    {
      return this.$store.getters.getNumberOfCoursePerLecturer;
    },
    getNumberOfCourseDelegate()
    { 
      return this.$store.getters.getNumberOfCourseDelegate;
    },
    getType() {
      this.$store.getters.getType
    }
  }
}
</script>


<style scoped>
   .my-card-home {
     height:150px;
   }
</style>
