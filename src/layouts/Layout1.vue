<template>
  <q-layout view="lHh lpR fFf">
    <q-header   class="bg-primary text-white">
       <q-toolbar class="q-pa-md">
            <q-toolbar-title class="text-center  text-h5 text-weight-bold" > Welcome to Course Coverage 2020</q-toolbar-title>
       </q-toolbar>
    </q-header>
    <q-page-container  >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
};
</script>

<style scoped>
 
</style>
