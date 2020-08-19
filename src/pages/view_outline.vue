<template>
  <q-page>
 
        <div class="row flex flex-center text-center q-mt-md">
          <div class="text-h5 text-weight-bold">
            Course Outline
          </div>
        </div>
        <div class="row flex flex-center q-gutter-md">
          <div class="col-1 col-xs-10 col-md-1 col-xl-1"></div>
          <div class="col-3 col-xs-10 col-md-3 col-xl-3">
            <q-select
              :options="year_options"
              v-model="outline.year"
              label="Choose year "
              :rules="[val => !!val || 'Field is required']"
            />
          </div>
          <div class="col-4 col-xs-10 col-md-4 col-xl-4">
            <q-select
              :options="Courses"
              v-model="outline.course_id"
              label="Choose Course "
              :rules="[val => !!val || 'Field is required']"
            />
          </div>
          <div class="col-3 col-xs-10 col-md-3 col-xl-3 ">
            <q-btn color="primary" label="View outline" @click="displayOutline" />
          </div>
          <div class="col-1 col-xs-12 col-md-1 col-xl-1"></div>
        </div>

    <div v-if="showTable" class="row">
      <div class="col-1 col-xs-12 col-md-1 col-xl-1"></div>
      <div class="col-10 col-xs-12 col-md-10 col-xl-10">
            <q-table
        class="q-pt-md q-my-lg q-mx-xs"
        :data="getOutline"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-left>
          <div class="text-h5 text-weight-meduim">
             Course Outline:  {{ " " + outline.course_id.label +"  "+ outline.year}}
          </div>
        </template>
        <template v-slot:top-right>
          <q-input
            outlined
            dense
            :class="$q.screen.xs? 'text-h6-sm q-mr-md q-mb-lg q-mt-lg full-width ': 'text-h6-sm q-mr-lg'  "
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
      </div>
      <div class="col-1 col-xs-12 col-md-1 col-xl-1"></div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      showTable:false,
      filter:"",
      year_options: [
        "2019"+"/"+"2020",
        "2020"+ "/"+ "2021",
      ],
      outline : {
        course_id:null,
        year:null,
     },
        columns: [
        {
          name: "week_number",
          align: "left",
          label: "Weekly",
          field: "week_number"
        },
        { name: "name", align: "left", label: "Topic Title", field: "name" },
      ],
    };
  },
  mounted(){
      this.$store.dispatch("getSelectedCourse").then(res => {
      
       });
  },
  computed: {
        Courses() {
          var courses = [];
          this.$store.getters.getSelectedCourse.forEach(course => {
            courses.push({
              label: course.course_code + " " + course.title,
              value: course.id
            });
          });

          return courses;
      },
      getOutline() {
      return this.$store.getters.getCourseOutline;
    }
  },
  methods: {
      displayOutline(){ 
            this.$store.dispatch("getOutline", [this.outline.course_id.value,this.outline.year]).then(res => {
              this.showTable=true
              console.log(this.outline.course_id)
        });
      }
  }
};
</script>

<style scoped></style>
