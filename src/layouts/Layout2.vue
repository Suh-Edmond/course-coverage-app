<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-pa-sm">
        
             <div>
            <q-btn dense flat round icon="menu" @click="left = !left" />
        </div>
        <q-space/>
        <div >
          <q-btn flat round dense icon="person" />
           <q-menu>
              <q-list style="min-width: 120px; height:60px;">
                <q-item clickable v-close-popup >
                    <q-item-section  @click="logout" class="text-center text-h5 text-weight-meduim">
                      Logout
                    </q-item-section>
                </q-item>
              </q-list>
           </q-menu>
        </div>
        
         
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      bordered
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="270"
      content-class="bg-grey-11"
    >
      <div class=" a2 q-ma-lg   flex flex-center">
        <img src="~assets/statistics_image2.png" width="80" height="60" />
        <h5 class="heading text-h5 text-weight-bold" v-if="miniState == false">{{ heading }}</h5>
      </div>
      <q-list class="text-light-blue-10">
           
        <q-item
          clickable
          v-ripple
          exact
          to="/home"
          active-class="text-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="home"></q-icon>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/home/course"
          active-class="text-grey-10"
          v-if="getUserType == 'course_delegates'"
        >
          <q-item-section avatar>
            <q-icon name="book"></q-icon>
          </q-item-section>
          <q-item-section>Course</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/home/lecture/courses"
          active-class="text-grey-10"
          v-if="getUserType == 'lecturers'"
        >
          <q-item-section avatar>
            <q-icon name="book"></q-icon>
          </q-item-section>
          <q-item-section>Course</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/home/registration_code"
          active-class="text-grey-10"
          v-if="getUserType=='lecturers'"
        >
          <q-item-section avatar>
            <q-icon name="lock"></q-icon>
          </q-item-section>
          <q-item-section>Registration Code</q-item-section>
        </q-item>
          <q-item
          clickable
          v-ripple
          exact
          to="/home/course-schedule"
          active-class="text-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="schedule"></q-icon>
          </q-item-section>
          <q-item-section>Schedule</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/home/course-outline"
          active-class="text-grey-10"
          v-if="getUserType == 'course_delegates'"
        >
          <q-item-section avatar>
            <q-icon name="description"></q-icon>
          </q-item-section>
          <q-item-section>Course Outline</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/home/view-course-outline"
          active-class="text-grey-10"
          v-if="getUserType == 'lecturers'"
        >
          <q-item-section avatar>
            <q-icon name="description"></q-icon>
          </q-item-section>
          <q-item-section>View Course Outline</q-item-section>
        </q-item>
 
        <q-item
          clickable
          v-ripple
          exact
          to="/home/record-coverage"
          active-class="text-grey-10"
          v-if="getUserType == 'course_delegates'"
        >
          <q-item-section avatar>
            <q-icon name="create"></q-icon>
          </q-item-section>
          <q-item-section>Record Coverage</q-item-section>
        </q-item>
         <q-item
          clickable
          v-ripple
          exact
          to="/home/coverage-statistic"
          active-class="text-grey-10"
          v-if="getUserType == 'lecturers'"
        >
          <q-item-section avatar>
            <q-icon name="analytics"></q-icon>
          </q-item-section>
          <q-item-section>Coverage Statistic</q-item-section>
        </q-item>
         <q-item
          clickable
          v-ripple
          exact
          to="/home/profile"
          active-class="text-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="portrait"></q-icon>
          </q-item-section>
          <q-item-section>Profile</q-item-section>
        </q-item>
      </q-list>
       
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      miniState: true,
      heading: "Dashboard",
      navs: [
        {
          label: "Home",
          icon: "home",
          to: "/home"
        },
        {
          label: "Courses",
          icon: "book",
          to: "/home/course"
        },
        {
          label: " A.Courses",
          icon: "book",
          to: "/home/a_course"
        },
        {
          label: "Registration Code",
          icon: "lock",
          to: "/home/registration_code"
        },
        {
          label: "Schedule",
          icon: "schedule",
          to: "/home/course-schedule"
        },
        {
          label: "Course Outline",
          icon: "description",
          to: "/home/course-outline"
        },
        {
          label: "View Course Outline",
          icon: "description",
          to: "/home/view-course-outline"
        },
        {
          label: "Record Coverage",
          icon: "create",
          to: "/home/record-coverage"
        },
        {
          label: "Coverage Statistic",
          icon: "analytics",
          to: "/home/coverage-statistic"
        },

        {
          label: "Profile",
          icon: "portrait",
          to: "/home/profile"
        },
         
      ]
    };
  },
  mounted() {
    this.$store
      .dispatch("getCourses")
      .then(res => {
        // console.log(res)
      })
      .catch(err => {});
    this.$store
      .dispatch("getActivities")
      .then(res => {})
      .catch(err => {});
  },

  methods: {
    logout() {
      this.$store.dispatch("logOut").then(res => {
           this.$router.push('auth/login')
      })
    }
  },
  computed: {
    getUserType() {
       console.log(this.$store.getters.getType)
       return this.$store.getters.getType
    }
  }
};
</script>
<style scoped></style>
