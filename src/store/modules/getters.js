import state from "./state"

export function isAuthenticated(state) {
    return state.app.isAuthenticated
}
 //get total courses
 export const getCourse = (state) => {
     return state.courses
 }

//get all activities

export const getActivities = (state) => {
    return state.activities
}

//get course schedules
export const getCourseSchedules = (state) => {
    return state.courseSchedule
}
 //get courses of a lecturer

 export const getSelectedCourse = (state) => {
    return state.selectedCourse
}

//get course Lecturers

export const getCourseLecturers = (state) => {
    return state.courseLecturer
}

//get course Topics
export const getCourseTopics = (state) => {
    return state.courseTopics
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
  
//get course delegates
 export const getCourseDelegate = (state) => {
     return state.courseDelegate
 }
//get num of course delegates for all courses of a lecturer
export const getNumberOfCourseDelegate = (state) => {
    return state.NumOfCourseDelegate
}
 //get number of course per lecturer
   export const getNumberOfCoursePerLecturer = (state) => {
       return state.courseNumberPerLecturer
   }
export const getnumb = (state) =>{
    return state.numb
}
 //get user type
 export const getUserType = (state) => {
     return state.userType
 }
//getuser details
export const getUserDetails = (state) => {
    return state.userDetails
}
// //get course outline
 export const getCourseOutline = (state) => {
     return state.outline
 }

 //get attend courses
  export const getAttendCourses = (state) => {
       return state.attendCourse
  }


// export const getAllCTopics = (state) => {
//     return state.topics
// }

export const getAccessId = (state) => {
    return state.accessId
}

export const getType = (state) => {
    return state.Type
}












 /*
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
*/


