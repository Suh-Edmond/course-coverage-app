<template>
    <q-layout view="lHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar class="q-pa-lg">
              <q-toolbar-title class="text-center text-h4">    
                Welcome to Course Coverage 2020.
                </q-toolbar-title>
            </q-toolbar>
         </q-header>
          
             
       
        <q-page-container>
            <q-page class="q-ma-lg">
              
                <div class="row flex flex-center text-h5 q-mt-lg" id="heading">
                    Choose Account to Login
                </div>
                <div class="row  q-gutter-md">
                   <div class="col-3"></div>
                    <div class="col-2">
                        <q-card class="my-card">
                            <q-card-section class="text-center">
                                <div>
                                    <img  src="~assets/instructor.png" width="150" height="100"/>
                                </div>
                            </q-card-section>
                            <q-separator/>
                            <q-card-section class="text-center">
                                <div class="text-h5">
                                    <q-checkbox v-model="instructor" label="Instructor" />
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-2">
                        <q-card class="my-card">
                            <q-card-section class="text-center">
                                <div>
                                    <img  src="~assets/lecturer.png" width="150" height="100"/>
                                </div>
                            </q-card-section>
                            <q-separator/>
                            <q-card-section class="text-center">
                                <div class="text-h5">
                                    <q-checkbox v-model="lecturer" class="q-pr-md" label="Lecturer" />
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-2">
                        <q-card class="my-card">
                            <q-card-section class="text-center">
                                <div>
                                    <img  src="~assets/student.png" width="150" height="100"/>
                                </div>
                            </q-card-section>
                            <q-separator/>
                            <q-card-section class="text-center">
                                <div class="text-h5">
                                    <q-checkbox v-model="course_delegate" label="Course Delegate" />
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-3"></div>
                </div>
               
            </q-page>
            <router-view />
        
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    data(){
        return {
           instructor:false,
            lecturer:false,
            course_delegate:false
        }
    }
    
}
</script>

<style scoped>
    #heading {
        margin-top: 70px;
        margin-bottom:90px;
    }
</style>