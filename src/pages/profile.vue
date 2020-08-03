<template>
  <q-page class="q-mt-md">
    <div class="row flex flex-center" v-if="!showProfile">
      <q-card class="my-card">
        <q-card-section class="bg-primary">
          <div class="text-center text-h5 text-white">User Profile</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section class="text-weight-bold text-h6">
                <q-item-label><span class="q-pr-sm"><q-icon name="person" style="font-size:2.2em"/></span> Basic Information</q-item-label>
              </q-item-section> 
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>First Name</q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>Last Name  </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>Matricule Number  </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label>Gender  </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
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
                <q-item-label><span class="q-pr-md"><q-icon name="email" style="font-size:1.9em"/></span>Email  </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-ripple>
              <q-item-section class="text-weight-medium">
                <q-item-label><span class="q-pr-md"><q-icon name="phone" style="font-size:1.9em"/></span>Telephone </q-item-label>
              </q-item-section>
              <q-item-section class="text-indigo">
                <q-item-label> Suh</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <q-card-actions align="center">
            <q-btn flat class="bg-primary text-white" @click="showProfile = !showProfile">Update Profile</q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
    <div class="row flex flex-center" v-if="showProfile">
      <q-card class="my-card q-mb-lg">
        <q-card-section class="bg-primary q-pa-md">
          <div class="text-h5 text-center text-white">
            Update Profile
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              v-model="user.first_name"
              label="First Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.last_name"
              label="Last Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.matricule_number"
              label="Matricule Number"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="email"
              v-model="user.email"
              label="Email"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="user.telephone"
              label="Telephone"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="password"
              v-model="user.password"
              label="Password"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              v-model="user.gender"
              :options="option1"
              label="Gender"
              :rules="[val => !!val || 'Field is required']"
            />
            <div class="q-mt-md  q-gutter-md q-mb-lg">
              <q-btn
                type="submit"
                class="full-width q-pa-xs text-center"
                color="primary"
                label="save"
                
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showProfile : false,
      user :{ 
        first_name: "",
        last_name: "",
        matricule: "",
        email: "",
        telephone: "",
        password: "",
        gender:""
      },
      option1: ["Male", "Female"],
      
    };
  }
};
</script>
<style scoped>
.my-card {
  width: 700px;
}
</style>
