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

 export const SET_COURSE_COVERED_TOPIC_NUMBER = (state,  courseCovered_topic_number) => {
   state.courseCoveredTopicNumber =  courseCovered_topic_number
 }

  export const SET_COURSE_TOPIC_NUMBER = (state, course_topic_number) => {
    state.courseTopicNumber = course_topic_number
  }

  export const SET_ACTIVITIES = (state, activities) => {
    state.activities = activities
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