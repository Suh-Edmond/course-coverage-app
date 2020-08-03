<template>
<q-page>
      <div class="row flex flex-center q-mb-sm">
      <q-card class="my-card">
        <q-card-section class="bg-primary q-pa-sm">
          <div class="text-h6 text-center text-white q-pa-md">Enter Matricule Number and Password to Login</div>
        </q-card-section>
        <q-card-section>
          <q-form  @submit="verifyLoginInfo">
            <q-input
              v-model="matricule_number"
              label="Matricule Number"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="password"
              type="password"
              label="Password"
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md">
              <q-btn
                type="submit"
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Login"
                 
              />
            </div>
          </q-form>
        </q-card-section>
        <q-card-section class="q-mb-md">
            <div class="row">
                <div class="col-6">
                    <q-btn
                        type="submit"
                        class="q-pa-xs text-center"
                        color="primary"
                        label="Create Account" 
                    />
                </div>
                <div class="col-6 flex flex-end">
                    <q-btn
                        type="submit"
                        class="q-pa-xs text-center"
                        color="primary"
                        label="Forgot Password?"    
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
    data(){
        return {
            password:null,
            matricule_number:null
        }
    },
    methods:
    {
        verifyLoginInfo(){

        }
    }
    
}
</script>

<style>
    .my-card{
        width:500px;
    }
</style>