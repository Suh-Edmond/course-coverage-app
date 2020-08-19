import state from "./state";

//set courses
export const SET_COURSES = (state, courses) => {
  state.courses = courses;
};
//set activities
export const SET_ACTIVITIES = (state, activities) => {
  state.activities = activities
}

//set course schedule
export const SET_COURSE_SCHEDULE = (state, courseSchedule) => {
  state.courseSchedule = courseSchedule
}
//set topic og a lecturer
export const SET_SELECTED_COURSE = (state, selectedCourse) => {
  state.selectedCourse = selectedCourse
}
//set course lecturers
export const SET_COURSE_LECTURERS = (state, courseLecturers) => {
  state.courseLecturer = courseLecturers
}
//set course topics
export const SET_COURSE_TOPICS = (state, courseTopics) => {
  state.courseTopics = courseTopics
}
 
//set coverage of course
export const SET_COURSE_COVERAGE = (state, coverage) => {
  state.coverage = coverage
}
export const setnum= (state, num) => {
  state.numb = num
}
///set total number of topics for a course
export const SET_COURSE_TOPIC_NUMBER = (state, courseTopicNumber) => {
  state.courseTopicNumber = courseTopicNumber
}
//set total number of topics covered
 
  export const SET_COURSE_COVERED_TOPIC_NUMBER = (state,  courseCoveredTopicNumber) => {
   state.courseCoveredTopicNumber =  courseCoveredTopicNumber
  }
//set course delegate
//  export const  SET_COURSE_DELEGATE = (state, courseDelegate) => {
//    state.courseDelegate = courseDelegate;
//  }
 //set number of course delegates
//  export const SET_NUMBER_COURSE_DELEGATE = (state, numberCourseDelegate) => {
//   state.NumOfCourseDelegate = numberCourseDelegate;
//  }
//set number of course per lecturer
export const SET_NUMBER_OF_COURSE = (state, courseNumberPerLecturer)=> {
  state.courseNumberPerLecturer = courseNumberPerLecturer;
}
//set user type
  export const SET_USER_TYPE =(state, userType) => {
     state.userType = userType
  }

//set details of user
export const SET_USER_DETAILS =(state, details) => {
  state.userDetails = details
}
//set outline
export const SET_OUTLINE = (state, outline) => {
  state.outline = outline
}
///set attend course
  export const SET_ATTEND_COURSE = (state, attendCourse) =>{
    state.attendCourse = attendCourse
  }
 //getting all covered topics in order to plot the graph
export const SET_ALL_C_TOPICS =(state, topics) => {
  state.topics = topics
}

//set access id
export const SET_ACCESS_ID = (state, access_id) => {
  state.accessId = access_id
}

export function setLoginStatus (state, status) {
  state.app.loginStatus = status
}

export function isAuthenticated (state, value) {
	state.app.isAuthenticated = value
}

export function setToken (state, token) {
	console.log('waoh')
	state.app.token = token
}
export function USERTYPE (state, type) {
  state.Type = type
}
































 /*
//set coverage of course
 export const SET_COURSE_COVERAGE = (state, coverage) => {
    state.coverage = coverage
 }
//set total number of topics covered
 export const SET_COURSE_COVERED_TOPIC_NUMBER = (state,  courseCovered_topic_number) => {
   state.courseCoveredTopicNumber =  courseCovered_topic_number
 }
///set total number of topics for a course
  export const SET_COURSE_TOPIC_NUMBER = (state, course_topic_number) => {
    state.courseTopicNumber = course_topic_number
  }

  

  export const SET_COURSE_LECTURERS = (state, course_lecturers) => {
    state.courseLecturer = course_lecturers
  }

  export const SET_COURSE_TOPICS = (state, course_topics) => {
    state.courseTopics = course_topics
  }

  //set topic og a lecturer
  export const SET_SELECTED_COURSE = (state, course_of_lecturer) => {
    state.courseOfLecturer = course_of_lecturer
  }
  */