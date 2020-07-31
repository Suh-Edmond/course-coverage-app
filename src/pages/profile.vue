<template>
      <q-page class="q-ma-lg">
        <div class="row q-mb-md flex flex-center"> 
            <q-card class="my-card">
                  <q-card-section class="bg-primary">
                    <div class="text-center text-h5 text-white">User Profile</div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                      <q-item-label header>
                        <icon name="person"/>
                        Basic Information
                      </q-item-label>
                  </q-card-section>
                  <q-card-section>
                      <q-list>
                            <q-item  v-ripple>
                              <q-item-section >
                                  <q-item-label>First Name :</q-item-label>
                              </q-item-section>         
                            </q-item>
                              <q-item  v-ripple>
                              <q-item-section >
                                  <q-item-label>Last Name :</q-item-label>
                              </q-item-section>         
                            </q-item>
                              <q-item  v-ripple>
                              <q-item-section >
                                  <q-item-label>Matricule Number :</q-item-label>
                              </q-item-section>         
                            </q-item>
                              <q-item  v-ripple>
                              <q-item-section >
                                  <q-item-label>Gender :</q-item-label>
                              </q-item-section>         
                            </q-item>
                      </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                      <q-item-label header>
                        <icon name="contacts"/>
                       Contact Information
                      </q-item-label>
                  </q-card-section>
                  <q-card-section>
                      <q-list>
                            <q-item  v-ripple>
                              <q-item-section >
                                <q-icon name="mail-open-outline"/>
                                <q-item-label>Email :</q-item-label>
                              </q-item-section>         
                            </q-item>
                              <q-item  v-ripple>
                              <q-item-section >
                                  <q-icon name="call-outline" />
                                  <q-item-label>Telephone :</q-item-label>
                              </q-item-section>         
                            </q-item>
                      </q-list>
                  </q-card-section>
                  <q-separator />
                  <q-card-section class="q-mb-md">
                    <q-card-actions align="center" >
                        <q-btn flat class="bg-primary text-white" >Update Profile</q-btn>
                    </q-card-actions>
                  </q-card-section>
            </q-card>
        </div>
            <div class="row flex flex-center">
                <q-card 
                  class="my-card q-mb-lg"
                >
                <q-card-section 
                  class="bg-primary q-pa-md" >
                    <div 
                      class="text-h5 text-center text-white">
                      Update Profile
                    </div>
                </q-card-section>
                <q-card-section>
                  <q-form
                    
                   
                    class="q-gutter-md"
                    >
                    <q-input
                      v-model="first_name"
                      label="First Name"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-input
                      v-model="last_name"
                      label="Last Name"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-input
                      v-model="matricule"
                      label="Matricule Number"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-input
                      type="email"
                      v-model="email"
                      label="Email"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-input
                      v-model="telephone"
                      label="Telephone"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-input
                      type="password"
                      v-model="password"
                      label="Password"
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <q-select 
                      v-model="model" 
                      :options="option1" 
                      label="Gender" 
                        :rules="[val => !!val || 'Field is required']"
                    />
                    <div class="q-mt-md  q-gutter-md q-mb-lg">
                       <q-btn  type="submit"   class="full-width q-pa-xs text-center" color="primary" label="save" />
                    </div>
                </q-form>
            </q-card-section>
          </q-card>          
        </div>
      </q-page>
</template>
<script>
export default {
  data(){
    return {
      first_name:'',
      last_name:'',
      matricule:'',
      email:'',
      telephone:'',
      password:'',
      option1:[
          'Male','Female'
      ],
      model:''
    }
  }
    
}
</script>
<style scoped>
.my-card{
width: 500px;
    
}
</style>