import state from "./state"

 //get total courses
 export const getCourse = (state) => {
     return state.courses
 }
//get course delegates
 export const getCourseDelegate = (state) => {
     return state.course_delegate
 }
//get course schedules
 export const getCourseSchedules = (state) => {
     return state.course_schedule
 }
//get coverage statistics
 export const getCoverage = (state) => {
     return state.coverage
 }
//get total topics covered
 export const getTotalTopicsCovered = (state) => {
     return state.courseCoveredTopicNumber 

 }

 //get total course topic number
   export const getTotalTopicNumber = (state) => {
        return state.courseTopicNumber
    }

//get all activities

export const getActivities = (state) => {
    return state.activities
}

//get course Lecturers

export const getCourseLecturers = (state) => {
    return state.courseLecturer
}

//get course Topics
export const getCourseTopics = (state) => {
    return state.courseTopics
}

 //get course of a lecturer

 export const getCourseOfLecturer = (state) => {
     return state.courseOfLecturer
 }



