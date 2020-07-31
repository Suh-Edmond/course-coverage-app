export const SET_COURSES = (state, courses) => {
  state.courses = courses;
};

 export const  SET_COURSE_DELEGATE = (state, course_delegate) => {
   state.course_delegate = course_delegate;
 }

//  export const SET_COURSE_CODE =(state, course_code) => {
//      state.course_code = course_code
//  }

 export const SET_COURSE_SCHEDULE = (state, course_schedule) => {
   state.course_schedule = course_schedule
 }

 export const SET_COURSE_COVERAGE = (state, coverage) => {
    state.coverage = coverage
 }

 export const SET_COURSE_COVERED_TOPIC_NUMBER = (state,  courseCoveredTopicNumber) => {
   state.courseCoveredTopicNumber =  courseCoveredTopicNumber
 }

  export const SET_COURSE_TOPIC_NUMBER = (state, courseTopicNumber) => {
    state.courseTopicNumber = courseTopicNumber
  }

  export const SET_ACTIVITIES = (state, activities) => {
    state.activities = activities
  }