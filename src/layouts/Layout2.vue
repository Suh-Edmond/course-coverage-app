<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-pa-md">
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-center">
          Welcome to Course Coverage 2020.
        </q-toolbar-title>
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
      <div class="heading q-ma-lg  text-grey-10 text-h5">Dashboard</div>
      <q-list v-for="nav in navs" :key="nav.id" class="text-light-blue-10">
        <q-item
          clickable
          v-ripple
          exact
          :to="nav.to"
          active-class="text-grey-10"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon"></q-icon>
          </q-item-section>

          <q-item-section>{{ nav.label }}</q-item-section>
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
  data () {
    return {
      left: false,
       miniState: true,
      navs :[
        {
          label:"Home",
          icon:"home",
          to:"/"
        },
        {
          label:"Courses",
          icon:"book",
          to:"/course"
        },
        {
          label:"Appointed Courses",
          icon:"book",
          to:"/appointed_course"
        },

        {
          label:"Course Delegates",
          icon:"people",
          to:"/course-delegate"
        },
        {
          label:"Course Outline",
          icon:"people",
          to:"/course-outline"
        },
        {
          label:"Schedule",
          icon:"schedule",
          to:"/course-schedule"
        },
        {
          label:"Record Coverage",
          icon:"analytics",
          to:"/record-coverage"
        },
        {
          label:"Coverage Statistic",
          icon:"analytics",
          to:"/coverage-statistic"
        },

        {
          label:"Profile",
          icon:"about",
          to:"/profile"
        },
        {
          label:"Logout",
          icon:"about",
          to:"/logout"
        }
      ]

    }
  },

  mounted() {
     this.$store
       .dispatch("getCourses")
       .then(res => {
         // console.log(res)
       })
       .catch(err => {});
      
  }


   
  // mounted() {
  //   this.$store.dispatch("getActivities").then(res => {

  //   }).catch(err => {})
  // }
}
</script>
<style scoped></style>
