<template>
  <q-page class="q-mb-lg">
    <div class="row flex flex-center q-mt-lg">
      <div class="text-h5 text-weight-bold">
        Course Coverage Statistic
      </div>
    </div>
    <div class="row flex flex-center q-gutter-xs q-mt-lg q-mx-sm">
      <div class="col-1"></div>
      <div class="col-3 col-xs-12 col-md-3 col-xl-3">
        <q-select
          :options="year_options"
          v-model="year"
          dense
          label="Choose year "
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4 col-xs-12 col-md-4 col-xl-4">
        <q-select
          :options="getCourses"
          v-model="course_id"
          dense
          label="Choose Course "
          :rules="[val => !!val || 'Field is required']"
        />
      </div>
      <div class="col-3 col-xs-12 col-md-3  col-xl-3 ">
        <q-btn color="primary" label="View Statistics" @click="SubmitForm" />
      </div>
      <div class="col-1"></div>
    </div>

    <div class="q-pt-sm q-my-lg q-mx-xs col-xs-12 q-mx-md" v-if="showForm">
      <div class="row q-my-md text-h6 text-weight-medium">
        <div>Coverage Statistic:{{ this.course_id.label }}</div>
        <q-space />
        <div>Year:{{ this.year }}</div>
      </div>
      <q-table
        :dense="$q.screen.lt.md"
        :data="getCoverageStatistics"
        :columns="columns1"
        row-key="name"
      >
      </q-table>
      <q-list bordered separator class="list">
        <q-item>
          <q-item-section>Total Number of Topics Covered</q-item-section>
          <q-item-section class="text-bold" side>
                {{ getCoveredTopicNumber }}
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Total Number of Topics for the Course</q-item-section>
          <q-item-section class="text-bold" side>
               {{ getCourseTopicNumber }}
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Percentage Attained</q-item-section>
          <q-item-section class="text-bold" side>
               {{ computePercentage() + "%" }}
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row">
        <coverageChart :width="700" :height="300"> </coverageChart>
     </div> 
       
    </div>
  </q-page>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      label: "",
      
      data:[],
      showForm: false,
      course_id: "",
      year: null,
      topis:null,
      courseTopicNumber: null,
      numberOfCoveredTopics: null,
      coursePercentage: 0.0,
      year_options: ["2019" + "/" + "2020", "2020" + "/" + "2021"],
      columns1: [
        {
          name: "week_number",
          align: "left",
          label: "Week Number",
          field: "week_number"
        },
        { name: "day", align: "left", label: "Day", field: "day" },
        { name: "period", align: "left", label: "Slot", field: "period" },
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
    this.$store.dispatch("getSelectedCourse").then(res => {});
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
      this.numberOfCoveredTopics = this.$store.getters.getTotalTopicsCovered;
      return this.$store.getters.getTotalTopicsCovered;
    },
    getCourseTopicNumber() {
      this.courseTopicNumber = this.$store.getters.getTotalTopicNumber;
      return this.$store.getters.getTotalTopicNumber;
    },
    //from the coverage table for ploting
    // getWeek() {
    //    this.topics = this.$store.getters.getAllCTopics
    //    var weeks =[]
    //    this.topics['weeks'].forEach(topic =>{
    //      weeks.push(topic.week_number)
    //    }) 
    //  return weeks
    // },

     numtop() {
       var num =[];
        this.$store.getters.getnumb.forEach(t => {
            num.push(t.num)
        })
      //  console.log(num)
       return  num
    }
  },
  components: {
    coverageChart: require("components/coverageChart.vue").default
  },
  methods: {
    SubmitForm() {
      // console.log(this.course_id);
      this.$store
        .dispatch("getCoverageStatistics",  [this.course_id.value, this.year])
        .then(res => {
         // console.log(course_id)
          this.showForm = true;
          this.getNumberOfCoveredTopics();
          this.getTotalTopicNumberOfCourse();
          this.numberOfCoveredTopicsPerWeek();
          this.getop()
        });
    },
    getTotalTopicNumberOfCourse() {
      this.$store
        .dispatch("getTotalTopicNumberOfCourse", [
          { course_id: this.course_id.value },
          this.year
        ])
        .then(res => {
          //console.log(this.course_id)
        });
    },
    getNumberOfCoveredTopics() {
      this.$store
        .dispatch("getNumberOfCoveredTopics", [this.course_id.value, this.year])
        .then(res => {});
    },
    computePercentage() {
      if(this.numberOfCoveredTopics >= this.courseTopicNumber) {
        this.coursePercentage = 100
      }
      else if (this.numberOfCoveredTopics >= 1 || this.courseTopicNumber >= 1) {
        this.coursePercentage =
          (this.numberOfCoveredTopics / this.courseTopicNumber) * 100;
      } else if (this.numberOfCoveredTopics < 1 ||this.courseTopicNumber >= 1) {
        this.coursePercentage = 0.0;
      } 
      else if (this.numberOfCoveredTopics < 1 || this.courseTopicNumber < 1) {
        this.coursePercentage = 0.0;
      }
      
      return this.coursePercentage.toFixed(1);
    },
    numberOfCoveredTopicsPerWeek() {
      this.$store.dispatch("getNumOfCoveredTopicsPerWeek", [this.course_id.value, this.year]).then(res => {
          
     
        
      })
    },
    getop() {
    //   var num = [];
    // //  for(var i =0; i<this.data.length;i++){
    // //    num.push(this.data[i].number)
    // //  }
    // // console.log(this.data)
    //   return num
    },  

   
  }
};
</script>
<style scoped>
.my-card {
  width: 500px;
}
 .list {
   width:500px;
 }
</style>
