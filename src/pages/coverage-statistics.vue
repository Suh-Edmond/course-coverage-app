<template>
    <q-page class="q-ma-lg" >
              <div class="row flex flex-center q-mt-lg">
                    <div class="text-h5">
                        Coverage Statistic of Courses
                    </div>
                </div>
                <div class="row flex flex-center q-gutter-md q-mt-lg">
                     
                        <div class="col-4">
                            <q-select 
                                :options="getCourses" 
                                emit-value
                                v-model="course_id"
                                label="Choose Course " 
                                :rules="[val => !!val || 'Field is required']"
                            />
                        </div>
                         
                        <div class="col-2">
                            <q-btn color="primary" label="View Statistics" @click="SubmitForm"/>
                        </div>
                     
                </div>
        
        <div  class="q-pt-lg q-my-lg q-mx-xs col-xs-12" v-if="showForm">  
             <div class="row q-my-md text-h6 flex flex-center">
               Coverage Statistic for  
            </div>                  
            <q-table
            :dense="$q.screen.lt.md"
            :data="getCoverageStatistics"
            :columns="columns"
            row-key="name">
            </q-table>
            <div class="row q-mt-lg">
            <div class="col-md-6">
                <q-card>
                    <q-card-section  class="q-ml-md">
                        <div class="text-h6">
                            Total Topics For the Course :  {{  getCourseTopicNumber }}
                        </div>
                    </q-card-section>
                    <q-card-section  class="q-ml-md">
                        <div class="text-h6">
                            Total Topics Covered in Class :  {{ getCoveredTopicNumber}} 
                        </div>
                    </q-card-section>
                    <q-card-section class="q-ml-md">
                        <div class="text-h6">
                            Percentage Attained for the Course: {{ computePercentage +' %' }}
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div> 
    </div>
        
     </q-page>
</template>
<script>

import {mapActions} from 'vuex'
export default {

    data(){
        return {
                showForm :false,
                course_id:"",
                courseTopicsNumber:null,
                numberOfCoveredTopics:null,
                coursePercentage:null,
                columns: 
                [
                         { name: 'week_number', align: 'left', label: 'Week Number', field: 'week_number' },
                        { name: 'day', align: 'left', label: 'Day', field: 'day' },
                        { name: 'period', align: 'left', label: 'Period', field: 'period'},
                        {name:'name', align:'left', label:'Topic Name', field:'name'},
                        { name: 'type', align: 'left', label: 'Activity Type', field: 'type' },
                        { name: 'first_name', align: 'left', label: "Lecturer's Name", field: 'first_name' },
                        
                        
                ],
                    
        }
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
        getCoverageStatistics(){
            
            return this.$store.getters.getCoverage
        },
        getCoveredTopicNumber() {
            
            this.numberOfCoveredTopics =  this.$store.getters.getTotalTopicsCovered
            //console.log(this.numberOfCoveredTopics)
            return this.$store.getters.getTotalTopicsCovered
        },
         getCourseTopicNumber() {
            
            this.courseTopicsNumber = this.$store.getters.getTotalTopicNumber
           // console.log(this.courseTopicsNumber)
            return this.$store.getters.getTotalTopicNumber
       }, 
       computePercentage() {
           this.coursePercentage = (this.numberOfCoveredTopics / this.courseTopicsNumber) * 100
          // console.log(MATH.ceil(this.coursePercentage))
           return (this.coursePercentage)
       }
    },
    methods: {
        SubmitForm(){
           // console.log(this.course_id);
            this.$store.dispatch('getCoverageStatistics', this.course_id).then(res => {
                this.showForm = true
            })
            this.getNumberOfCoveredTopics()
            this.getTotalTopicNumberOfCourse()
            
        },
         getTotalTopicNumberOfCourse() {
             this.$store.dispatch('getTotalTopicNumberOfCourse', this.course_id).then(res => {

             })
         }, 
        getNumberOfCoveredTopics(){
            this.$store.dispatch('getNumberOfCoveredTopics', this.course_id).then(res => {

            })
        },
        
    }
}
</script>
<style   scoped>
    .my-card{
        width:500px;
    }
     
</style>