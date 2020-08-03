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
      <div class="heading q-ma-lg  text-h5 text-weight-bold flex flex-center">
        <img src="~assets/statistics_image2.png" width="80" height="60" />
        {{ heading }}
      </div>
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
  data() {
    return {
      left: false,
      miniState: true,
      heading: "Dashboard",
      navs: [
        {
          label: "Home",
          icon: "home",
          to: "/"
        },
        {
          label: "Courses",
          icon: "book",
          to: "/course"
        },
        {
          label: " A.Courses",
          icon: "book",
          to: "/a_course"
        },
        {
          label: "Lecturer",
          icon: "people",
          to: "/lecturer"
        },
        {
          label: "Course Delegates",
          icon: "people",
          to: "/course-delegate"
        },
        {
          label: "Schedule",
          icon: "schedule",
          to: "/course-schedule"
        },
        {
          label: "Course Outline",
          icon: "description",
          to: "/course-outline"
        },
        {
          label: "Record Coverage",
          icon: "create",
          to: "/record-coverage"
        },
        {
          label: "Coverage Statistic",
          icon: "analytics",
          to: "/coverage-statistic"
        },

        {
          label: "Profile",
          icon: "portrait",
          to: "/profile"
        },
        {
          label: "Logout",
          icon: "exit_to_app",
          to: "/logout"
        }
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
  }

  // mounted() {
  //   this.$store.dispatch("getActivities").then(res => {

  //   }).catch(err => {})
  // }
};
</script>
<style scoped></style>
