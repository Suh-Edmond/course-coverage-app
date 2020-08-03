
const routes = [
  {
    path:'/',
    component: () => import("layouts/Layout2.vue"),
    //  path: '/',
    //  component: () => import('layouts/Layout1.vue'),
    //  children : [
    //    {
    //      path:'/login',
    //      component: () =>import('pages/login.vue')
    //    }
    //  ]
      children: [
       { 
         path: '', 
         component: () => import('pages/Index.vue') 
       },
       { 
         path: '/course', 
         component: () => import('pages/courses.vue') 
       },
       { 
        path: '/a_course', 
        component: () => import('pages/assign.vue') 
      },
       { 
         path: '/course-delegate', 
         component: () => import('pages/course-delegate.vue') 
       },
       { 
         path: '/lecturer', 
         component: () => import('pages/lecturer.vue') 
       },
    
       { 
         path: '/course-schedule', 
         component: () => import('pages/schedule.vue') 
       },
       { 
         path: '/course-outline', 
         component: () => import('pages/outline.vue') 
       },
       {
         path:'/record-coverage',
         component : ()=>import('pages/record-coverage.vue')
       },
       { 
         path: '/profile', 
         component: () => import('pages/profile.vue') 
       },
       { 
         path: '/coverage-statistic', 
         component: () => import('pages/coverage-statistics.vue') 
       },
      
       
     ] 
  },

  //  Always leave this as last one,
  //  but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
