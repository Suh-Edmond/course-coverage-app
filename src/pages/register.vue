<template>
  <q-page class="row flex flex-center">
    <div>
      <q-card class="my-card">
        <q-card-section class="bg-primary q-pa-sm">
          <div class="text-h6 text-center text-white">
            Fill the form to create account!
          </div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              type="text"
              v-model="user.user_name"
              label="Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
             type="text"
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
              v-model="user.password"
              :type="isPwd ? 'password' : 'text'"
              label="Password"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
             </q-input>
            <div class="q-mt-md">
              <q-btn
                type="submit"
                class="full-width q-pa-xs text-center"
                color="primary"
                label="Create Account"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <!-- <div class="q-pa-md row flex flex-center" v-if="showForm">
      <q-card>
        <q-card-section class="row bg-primary q-pa-md">
          <div class="text-h5 text-white">Lecturers</div>
        </q-card-section>
        <q-card-section class="q-ma-lg">
          <div class="row">
            <q-table
              
              :columns="columns"
              row-key="name"
              class="q-pt-lg"
            >
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  class="text-h6-sm q-pb-lg"
                  v-model="filter"
                  placeholder="Search by name"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </div>
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      showItem: false,
      user: {
        user_name: "",
        matricule_number: "",
        email: "",
        telephone: "",
        password: ""
      },
      userType: null,
      isPwd: true,
      dense: false
    };
  },

  methods: {
    submitForm() {
      this.userType = this.$store.getters.getUserType;
      this.$store.dispatch("addUser", [this.user, this.userType]).then(res => {
        this.$q.notify({
           message: 'Account was Successfully Created',
           status: '201',
           timeout: Math.random() * 5000 + 3000,
           color:"positive",
           position:"top-right"
        })
        this.$router.push("/login");
      }).catch(err => {
          this.$q.notify({
           message: 'Error! Account was not Created',
           status: '422',
          timeout: Math.random() * 5000 + 3000,
          color:"negative",
           position:"top-right"
        })
      })
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
</style>
