import axios from "axios";
const API = "http://localhost:8000/api/";
 
export const getCourseCodes = ({commit}) =>{
  return axios.get("http://localhost:8000/api/course_codes").then(response =>{
    commit("SET_COURSE_CODE", response.data);
    return response.data
  });
}

export const getCourses = ({ commit }) => {
   return axios.get("http://127.0.0.1:8000/api/courses").then(response => {
    commit("SET_COURSES", response.data);
    return response.data
  });
};

 
export const addCourse =  ({commit}, course) =>
{
  //console.log(course)
   return axios({
      method: 'POST',
      url: "http://127.0.0.1:8000/api/courses",
      data: course
    }).then(response => {
      return response.data
    })
}

export const getCourseDelegates = ({commit}) =>{
  return axios.get("http://localhost:8000/api/course_delegates").then(response => {
    commit("SET_COURSE_DELEGATE", response.data);
    return response.data
  });
}

export const addCourseDelegate = ({commit}, course_delegate) => {
  //console.log(course_delegate)
  return axios({
    method:'POST',
    url:'http://localhost:8000/api/course_delegate',
    data:course_delegate
  }).then(response => {
    return response.data
  })
}

export const addLecturer = ({commit}, lecturer) => {
  //console.log(lecturer)
  return axios({
    method:'POST',
    url:'http://localhost:8000/api/lecturers',
    data:lecturer
  }).then(response => {
    return response.data
  })
}

// export const getActivities = ({commit}, activities) => { 
//   return axios.get("http://localhost:8000/api/activities");
// }

export const addCourseSchedule = ({commit}, schedule) => {
  console.log(schedule)
  return axios({
    method:'POST',
    url:'http://localhost:8000/api/course_schedules',
    data:schedule
  }).then(response => {
    return response.data
  })
}
//action to get course schedules for all courses
export const getCourseSchedules = ({commit}) =>{
  return axios.get("http://localhost:8000/api/course_schedules").then(response => {
    commit("SET_COURSE_SCHEDULE", response.data);
    return response.data
  });
}
//action to get coverage statistics for a course
export const getCoverageStatistics =({commit}, course_id) => {
  //console.log(course_id)
  return axios({
    method:'POST',
    url: "http://localhost:8000/api/coverage_statistics",
    params: {
     course_id: course_id
    },
   }).then(response => {
    commit("SET_COURSE_COVERAGE", response.data);
    return response.data
  })
}
// action to get number of covered topics
export const getNumberOfCoveredTopics = ({commit}, course_id) => {
  //console.log(course_id)
  return axios({
    method:'POST',
    url: "http://localhost:8000/api/get_number_of_covered_topics",
    params: {
     course_id: course_id
    },
   }).then(response => {
    commit("SET_COURSE_COVERED_TOPIC_NUMBER", response.data);
    return response.data
  })
}

//action to get number of topics for a course
   export const getTotalTopicNumberOfCourse = ({commit}, course_id) => { 
     //console.log(course_id)
      return axios({
            method:'POST',
            url: "http://localhost:8000/api/course_topic_number",
            params: {
            course_id: course_id
        }
      }).then(response => { 
        commit("SET_COURSE_TOPIC_NUMBER", response.data) 
        return response.data
      })
   }
  

  //get Activities
  export const getActivities = ({ commit }) => {
    return axios.get("http://127.0.0.1:8000/api/activities").then(response => {
     commit("SET_ACTIVITIES", response.data);
    // console.log(response.data)
     return response.data
   });
 };

 //getTopics
 export const getTopics = ({ commit }, course_id) => {
  return axios({
    method:'POST',
    url: "http://localhost:8000/api/get_topics",
    params:{
        course_id:course_id
    }
  }).then(response => {
  //  commit("SET_ACTIVITIES", response.data);
    console.log(response.data)
   return response.data
 });
};
 
