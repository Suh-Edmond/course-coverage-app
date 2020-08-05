//set courses
export const SET_COURSES = (state, courses) => {
  state.courses = courses;
};
//set activities
export const SET_ACTIVITIES = (state, activities) => {
  state.activities = activities
}

//set course schedule
export const SET_COURSE_SCHEDULE = (state, course_schedule) => {
  state.course_schedule = course_schedule
}
//set topic og a lecturer
export const SET_SELECTED_COURSE = (state, lecturer_course) => {
  state.taughtCourse = lecturer_course
}
//set course lecturers
export const SET_COURSE_LECTURERS = (state, course_lecturers) => {
  state.courseLecturer = course_lecturers
}
//set course topics
export const SET_COURSE_TOPICS = (state, course_topics) => {
  state.courseTopics = course_topics
}
 
//set coverage of course
export const SET_COURSE_COVERAGE = (state, coverage) => {
  state.coverage = coverage
}
///set total number of topics for a course
export const SET_COURSE_TOPIC_NUMBER = (state, course_topic_number) => {
  state.courseTopicNumber = course_topic_number
}
//set total number of topics covered
 
export const SET_COURSE_COVERED_TOPIC_NUMBER = (state,  courseCovered_topic_number) => {
 state.courseCoveredTopicNumber =  courseCovered_topic_number
}
//set course delegate
 export const  SET_COURSE_DELEGATE = (state, course_delegate) => {
   state.courseDelegate = course_delegate;
 }
//set number of course per lecturer
export const SET_NUMBER_OF_COURSE = (state, course_number_per_lecturer)=> {
  state.courseNumberPerLecturer = course_number_per_lecturer;
}
//set user type
  export const SET_USER_TYPE =(state, user_type) => {
     state.userType = user_type
  }

//get details of user
export const SET_USER_DETAILS =(state, details) => {
  state.userDetails = details
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