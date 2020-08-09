
const routes = [
  {
    path:'/',
    component: () => import("layouts/Layout1.vue"),
      children : [
        {
          path:'/',
          redirect:'/login',
        },
        {
          path:'/login',
          component: () =>import('pages/login.vue')
        },
        {
          path:'/choose_account',
          component: () => import('pages/choose_account.vue') 
        },
        { 
          path: '/register', 
          component: () => import('pages/register.vue') 
        },
     ]
    },
    {
    path:'/home',
    component: () => import("layouts/Layout2.vue"),
      children: [
       { 
         path: '', 
         component: () => import('pages/Index.vue') 
       },
       { 
         path: '/home/course', 
         component: () => import('pages/courses.vue') 
       },
       { 
        path: '/home/a_course', 
        component: () => import('pages/assign.vue') 
      },
       { 
         path: '/home/course-delegate', 
         component: () => import('pages/course-delegate.vue') 
       },
       { 
         path: '/home/course-schedule', 
         component: () => import('pages/schedule.vue') 
       },
       { 
         path: '/home/course-outline', 
         component: () => import('pages/outline.vue') 
       },
       { 
        path: '/home/view-course-outline', 
        component: () => import('pages/view_outline.vue') 
      },
       {
         path:'/home/record-coverage',
         component : ()=>import('pages/record-coverage.vue')
       },
       { 
         path: '/home/profile', 
         component: () => import('pages/profile.vue') 
       },
       { 
         path: '/home/coverage-statistic', 
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
