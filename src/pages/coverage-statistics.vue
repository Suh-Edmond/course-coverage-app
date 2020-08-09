<template>
  <q-page class="q-ma-lg">
    <div class="row flex flex-center q-mt-lg">
      <div class="text-h5 text-weight-bold">
        Course Coverage Statistic
      </div>
    </div>
    <div class="row flex flex-center q-gutter-md q-mt-lg">
      <div class="col-1"></div>
      <div class="col-3">
           <q-select
              :options="year_options"
              v-model="year"
              label="Choose year "
              :rules="[val => !!val || 'Field is required']"
            />
      </div>
      <div class="col-4">
        <q-select
          :options="getCourses"
          v-model="course_id"
          label="Choose Course "
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-3">
        <q-btn color="primary" label="View Statistics" @click="SubmitForm" />
      </div>
      <div class="col-1"></div>
    </div>

    <div class="q-pt-lg q-my-lg q-mx-xs col-xs-12" v-if="showForm">
      <div class="row q-my-md text-h5 flex flex-center">
        Coverage Statistic for {{ this.course_id.label }}
      </div>
      <q-table
        :dense="$q.screen.lt.md"
        :data="getCoverageStatistics"
        :columns="columns"
        row-key="name"
      >
      </q-table>
      <div class="row q-mt-lg">
        <div class="col-md-6">
          <q-card>
            <q-card-section class="q-ml-md">
              <div class="text-h6">
                Total Topics For the Course : {{  getCourseTopicNumber }}
              </div>
            </q-card-section>
            <q-card-section class="q-ml-md">
              <div class="text-h6">
                Total Topics Covered in Class : {{  getCoveredTopicNumber }}
              </div>
            </q-card-section>
            <q-card-section class="q-ml-md">
              <div class="text-h6">
                Percentage Attained for the Course:
                {{ computePercentage + "%" }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      label:'',
      showForm: false,
      course_id: "",
      year:"",
      courseTopicsNumber: null,
      numberOfCoveredTopics: null,
      coursePercentage: "",
      year_options: [
        "2019"+"/"+"2020",
        "2020"+ "/"+ "2021",
      ],
      columns: [
        {
          name: "week_number",
          align: "left",
          label: "Week Number",
          field: "week_number"
        },
        { name: "day", align: "left", label: "Day", field: "day" },
        { name: "period", align: "left", label: "Period", field: "period" },
        { name: "name", align: "left", label: "Topic Name", field: "name" },
        { name: "type", align: "left", label: "Activity Type", field: "type" },
        {
          name: "user_name",
          align: "left",
          label: "Lecturer's Name",
          field: "user_name"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getSelectedCourse").then(res => {
        
       });
  },
  computed: {
    getCourses() {
      var courses = [];
      this.$store.getters.getSelectedCourse.forEach(course => {
        courses.push({
          label: course.course_code + " " + course.title,
          value: course.id
        });
      });

      return courses;
    },
    
    getCoverageStatistics() {
      return this.$store.getters.getCoverage;
    },

     getCoveredTopicNumber() {
       this.numberOfCoveredTopics = this.$store.getters.getTotalTopicsCovered
        
       return this.$store.getters.getTotalTopicsCovered;
     },
     getCourseTopicNumber() {
       this.courseTopicNumber = this.$store.getters.getTotalTopicNumber
       // console.log(this.courseTopicNumber)
        return this.$store.getters.getTotalTopicNumber;
      },
     computePercentage() {
      if(this.numberOfCoveredTopics == 0){
        this.coursePercentage = 0.0
      }else{
         this.coursePercentage = ((this.numberOfCoveredTopics /this.courseTopicNumber) * 100).toFixed(2);
      }
       return this.coursePercentage;
    }
  },
  methods: {
    SubmitForm() {
      // console.log(this.course_id);
      this.$store
        .dispatch("getCoverageStatistics", { course_id: this.course_id.value })
        .then(res => {
          this.showForm = true;
            
        });
         this.getNumberOfCoveredTopics();
          this.getTotalTopicNumberOfCourse();
       
    },
      getTotalTopicNumberOfCourse() {
        this.$store
         .dispatch("getTotalTopicNumberOfCourse", [{ course_id: this.course_id.value }, this.year])
          .then(res => {
           //console.log(this.course_id)
          });
      },
     getNumberOfCoveredTopics() {
        this.$store
         .dispatch("getNumberOfCoveredTopics",{ course_id: this.course_id.value })
         .then(res => {});
     }
  }
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
</style>
