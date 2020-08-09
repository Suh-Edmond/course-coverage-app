import axios from "axios";
import { Notify } from 'quasar'
 

const API = "http://localhost:8000/api/";

 
export const getCourses = ({ commit }) => {
  return axios.get("http://127.0.0.1:8000/api/courses").then(response => {
    commit("SET_COURSES", response.data);
    return response.data;
  });
}; 

export const addCourse = ({ commit }, course) => {
  return axios({
    method: "POST",
    url: "http://127.0.0.1:8000/api/courses",
    data: course
  }).then(response => {
    commit("SET_COURSES", response.data);
     
  }).catch(err => {
  })
};
//get Activities
export const getActivities = ({ commit }) => {
  return axios.get("http://127.0.0.1:8000/api/activities").then(response => {
    commit("SET_ACTIVITIES", response.data);
    // console.log(response.data)
    return response.data;
  });
};
//add course schedule
export const addCourseSchedule = ({ commit }, schedule) => {
 // console.log(schedule);
  return axios({
    method: "POST",
    url: "http://localhost:8000/api/course_schedules",
    data: schedule
  }).then(response => {
    commit("SET_COURSE_SCHEDULE", response.data)
    return response.data;
  });
};
//get course schedules for all courses
 export const getCourseSchedules = ({ commit }) => {
  return axios
    .get("http://localhost:8000/api/course_schedules")
    .then(response => {
      commit("SET_COURSE_SCHEDULE", response.data);
      return response.data;
    });
}; 
//add course for a lecturere
export const selectCourse =({commit}, course_id) => {
  //console.log(course_id)
   return axios({
     method:"POST",
     url:"http://localhost:8000/api/add_course",
     data:course_id
   }).then(response => {
    commit("SET_SELECTED_COURSE", response.data);
     return response.data
   })
 }
 //get selected courses
export const getSelectedCourse =({commit}) => {
  return axios({
    method:"GET",
    url:"http://localhost:8000/api/get_selected_courses"
  }).then(response => {
    commit("SET_SELECTED_COURSE", response.data);
    return response.data
  })
}
  //add outline

  export const addOutline =({commit}, [outline, totalFormNumber])=> {
    return axios({
      method:"POST",
      url:"http://localhost:8000/api/outline",
      data:[outline,totalFormNumber]
    }).then(response => {
      //commit("SET_OUTLINE", response.data)
      return response.data
    })
  }
  //get courses outline
  export const getOutline =({commit},  [course_id, year]) => {
    // console.log(course_id, year)
     return axios({
       method:"GET",
       url:"http://localhost:8000/api/get_outline",
       params: [course_id, year]
     }).then(response => {
       commit("SET_OUTLINE", response.data)
       return response.data
     })
   }

  
  //get all lecturers for a course
export const getCourseLecturers = ({commit}, course_id) => {
  return axios({
    method:"POST",
    url: "http://localhost:8000/api/course_lecturer",
    data: course_id 
  }).then(response  => {
    commit("SET_COURSE_LECTURERS", response.data)
    return response.data
   })
}
//get course Topics
export const getTopics = ({ commit }, [course_id, year]) => {
  //console.log(year);
  return axios({
    method: "POST",
    url: "http://localhost:8000/api/get_course_topics",
    data: [course_id, year]
  }).then(response => {
      commit("SET_COURSE_TOPICS", response.data);
    //console.log(response.data);
    return response.data;
  });
};

//record course work
export const RecordCourseWork =({commit},  coverage) => {
  //console.log(coverage)
  return axios({
    method:"POST",
    url:"http://localhost:8000/api/record_course_work",
    data:coverage
  }).then(response => {
     
    return response.data
  })
}
//action to get coverage statistics for a course
export const getCoverageStatistics = ({ commit }, course_id) => {
  //console.log(course_id)
  return axios({
    method: "POST",
    url: "http://localhost:8000/api/coverage_statistics",
    params: course_id
  }).then(response => {
    commit("SET_COURSE_COVERAGE", response.data);
    return response.data;
  });
};

// action to get number of covered topics

export const getNumberOfCoveredTopics = ({ commit }, course_id) => {
  //console.log(course_id)
  return axios({
    method: "POST",
    url: "http://localhost:8000/api/get_number_of_covered_topics",
    params:  course_id
  }).then(response => {
    commit("SET_COURSE_COVERED_TOPIC_NUMBER", response.data);
    return response.data;
  });
};
//gwt total number of topics for a course
export const getTotalTopicNumberOfCourse = ({ commit }, [course_id, year]) => {
 return axios({
    method: "POST",
     url: "http://localhost:8000/api/course_topic_number",
     data: [course_id,year]
   }).then(response => {
     commit("SET_COURSE_TOPIC_NUMBER", response.data);
     return response.data;
  });
};
 
//get all of course delegates for all courses for a lecturercourse_delegates
export const getCourseDelegates = ({ commit }) => {
  return axios({
    method:"GET",
    url:("http://localhost:8000/api/course_delegates") 
  }).then(response => {
      commit("SET_COURSE_DELEGATE", response.data);
      return response.data;
    });
};
//get number of course delegates for all courses for a lecturer
export const getNumberOfCourseDelegates = ({ commit }) => {
  return axios({
    method:"GET",
    url:("http://localhost:8000/api/course_delegates_number") 
  }).then(response => {
      commit("SET_NUMBER_COURSE_DELEGATE", response.data);
      return response.data;
    });
};
//get number of courses for a lecturer
  export const getNumberOfCoursePerLecturer = ({commit}) => {
    return axios({
      method:'GET',
      url:'http://localhost:8000/api/course_number'
    }).then(response => {
      commit("SET_NUMBER_OF_COURSE", response.data)
     return response.data
   });
 }

//user login
export const Login = ({commit}, [type, matricule_number,password]) => {
  console.log(type, matricule_number, password)
 return axios ({
   method:'POST',
   url:'http://localhost:8000/api/user_login',
   data:[type, matricule_number, password]
 }).then(response => {
   return response.data
 });
}
export const addUser = ({ commit }, [user, userType]) => {
  console.log(user, userType)
    return axios({
     method: "POST",
     url: "http://localhost:8000/api/add_user",
     data: [user, userType]
   }).then(response => {
     return response.data;
   });
};

//choose account
export const chooseAccount = ({commit}, userType) => {
  //console.log(userType)
  return axios({
    method:"POST",
    url:"http://localhost:8000/api/user_type",
    params:userType
  }).then(response => {
    commit("SET_USER_TYPE", response.data)
    //console.log(response.data)
    return response.data
  })
}
   
   //get attend cocurse
   export const getAttendCourses = ({commit})  => {
    return axios ({
        method:"GET",
        url:"http://localhost:8000/api/attend_course"
      }).then (response =>{
        commit("SET_ATTEND_COURSE", response.data)
        return response.data
      }) 
    
   }

 
 











 