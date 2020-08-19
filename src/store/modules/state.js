import { LocalStorage } from 'quasar'

export default {
  numb:[],
  courses: [],
  activities :[],
  courseSchedule:[],
  selectedCourse :[],
  courseLecturer:[],
  courseTopics:[],
  coverage:[],
  courseTopicNumber:null,
  courseCoveredTopicNumber:null,
  courseNumberPerLecturer:null,
  userType:null,
  Type: LocalStorage.getItem('type') || null,
  userDetails:[],
  courseDelegate:[],//change of design
  outline:[],
  NumOfCourseDelegate:null,
  attendCourse:[],
  topics:[],//covered topics
  accessId:null,//used to register a course dele
  lecturer:1,
  course_delegate :2,
  app: {
    clientSecret: 'OkFo0y37UVp7WrH8cYCTYpqof5IHVjyDwuVRanea',
    clientId: 2,
    isAuthenticated: LocalStorage.getItem('authenticated') || false, //isAuthenticated: true||false
    token: LocalStorage.getItem('token') || false,
    loginStatus: null // attempted|pending|success|fail_0|fail_1
  },
  
 /* course_delegate :[],
  coverage:[],
  courseTopicNumber:null,
  courseCoveredTopicNumber:null,
  courseLecturer:[],
  courseTopics:[],
  courseOfLecturer:[]*/
 
};
