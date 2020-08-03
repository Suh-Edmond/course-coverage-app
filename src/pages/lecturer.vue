<template>
  <q-page>
    <div class="row flex flex-center" v-if="!showForm">
      <q-card class="my-card">
        <q-card-section class="bg-primary q-pa-xs">
          <div class="text-h6 text-center text-white">Create Account</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              v-model="lecturer.first_name"
              label="First Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="lecturer.last_name"
              label="Last Name"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="lecturer.matricule_number"
              label="Matricule Number"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="email"
              v-model="lecturer.email"
              label="Email"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              v-model="lecturer.telephone"
              label="Telephone"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              type="password"
              v-model="lecturer.password"
              label="Password"
              :rules="[val => !!val || 'Field is required']"
            />
            <q-select
              v-model="lecturer.gender"
              :options="option1"
              label="Gender"
              :rules="[val => !!val || 'Field is required']"
            />
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
    <div class="q-pa-md row flex flex-center" v-if="showForm">
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
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      showItem: false,
      lecturer: {
        first_name: "",
        last_name: "",
        matricule_number: "",
        email: "",
        telephone: "",
        password: "",
        gender: ""
      },
      option1: ["Male", "Female"],
      filter: "",
      columns: [
        {
          name: "first_name",
          align: "left",
          label: "First Name",
          field: "first_name"
        },
        {
          name: "last_name",
          align: "left",
          label: "Last Name",
          field: "last_name"
        },
        {
          name: "matricule_number",
          align: "left",
          label: "Matricule Number",
          field: "matricule_number"
        },
        { name: "email", align: "left", label: "Email", field: "email" },
        {
          name: "telephone",
          align: "left",
          label: "Telephone",
          field: "telephone"
        }
      ],
      
    };
  },
  // mounted () {
  //   this.$store
  //     .dispatch("addLecturer", this.lecturer)
  //     .then(res => {})
     
  // }
  methods: {
    submitForm() {
      //console.log(this.course_delegate)
      this.$store.dispatch("addLecturer", this.lecturer).then(res => {
        this.showForm = false;
        this.lecturer.first_name = null;
        this.lecturer.last_name = null;
        this.lecturer.email = null;
        this.lecturer.matricule_number = null;
        this.lecturer.telephone = null;
        this.lecturer.gender = null;
        this.lecturer.password = null;
      });
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
</style>
