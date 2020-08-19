import { LocalStorage } from 'quasar'
import { axios } from '../../boot/axios'
import { Notify } from 'quasar'
 

const API = "http://localhost:8000/api/";
const BaseUrl = 'http://localhost:8000'

  
export const getCourses = ({ commit }) => {
  return axios.get( API + "courses").then(response => {
    commit("SET_COURSES", response.data);
    return response.data;
  });
}; 

export const addCourse = ({ commit }, course) => {
  return axios({
    method: "POST",
    url: API + "courses",
    data: course
  }).then(response => {
    commit("SET_COURSES", response.data);     
  }).catch(err => {
  })
};
export const lecturerAddCourse  =({commit}, course) => {
  return axios({
    method: "POST",
    url: API + "courses",
    data: course
  }).then(response => {
    commit("SET_COURSES", response.data);     
  }).catch(err => {
  })
};
//get Activities
export const getActivities = ({ commit }) => {
  return axios.get( API + "activities").then(response => {
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
    url: API +"course_schedules",
    data: schedule
  }).then(response => {
    commit("SET_COURSE_SCHEDULE", response.data)
    return response.data;
  });
};
//get course schedules for all courses
 export const getCourseSchedules = ({ commit }) => {
  return axios
    .get(API + "course_schedules")
    .then(response => {
      commit("SET_COURSE_SCHEDULE", response.data);
      return response.data;
    });
}; 
//add course for a lecturere
export const selectCourse =({commit}, courseId) => {
  //console.log(courseId)
   return axios({
     method:"POST",
     url: API +"add_course",
     data:courseId
   }).then(response => {
    commit("SET_SELECTED_COURSE", response.data);
     return response.data
   })
 }
 //get selected courses
export const getSelectedCourse =({commit}) => {
  return axios({
    method:"GET",
    url: API+ "get_selected_courses"
  }).then(response => {
    commit("SET_SELECTED_COURSE", response.data);
    return response.data
  })
}
  //add outline

  export const addOutline =({commit}, [outline, totalFormNumber])=> {
    return axios({
      method:"POST",
      url:API + "outline",
      data:[outline,totalFormNumber]
    }).then(response => {
      commit("SET_OUTLINE", response.data)
      return response.data
    })
  }
  //get courses outline
  export const getOutline =({commit},  [courseId, year]) => {
    // console.log(courseId, year)
     return axios({
       method:"GET",
       url: API + "get_outline",
       params: [courseId, year]
     }).then(response => {
       commit("SET_OUTLINE", response.data)
       return response.data
     })
   }

  
  //get all lecturers for a course
export const getCourseLecturers = ({commit}, courseId) => {
  return axios({
    method:"POST",
    url: API + "course_lecturer",
    data: courseId 
  }).then(response  => {
    commit("SET_COURSE_LECTURERS", response.data)
    return response.data
   })
}
//get course Topics
export const getTopics = ({ commit }, [courseId, year]) => {
  //console.log(year);
  return axios({
    method: "POST",
    url: API + "get_course_topics",
    data: [courseId, year]
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
    url:API + "record_course_work",
    data:coverage
  }).then(response => {
     
    return response.data
  })
}
//action to get coverage statistics for a course
export const getCoverageStatistics = ({ commit }, [courseId, year]) => {
  console.log(courseId)
  return axios({
    method: "POST",
    url: API + "coverage_statistics",
    params: [courseId, year]
  }).then(response => {
    commit("SET_COURSE_COVERAGE", response.data);
    return response.data;
  });
};

// action to get number of covered topics

export const getNumberOfCoveredTopics = ({ commit }, [courseId, year]) => {
  //console.log(course_id)
  return axios({
    method: "POST",
    url: API + "get_number_of_covered_topics",
    params:  [courseId, year]
  }).then(response => {
    commit("SET_COURSE_COVERED_TOPIC_NUMBER", response.data);
    return response.data;
  });
};
//gwt total number of topics for a course
export const getTotalTopicNumberOfCourse = ({ commit }, [courseId, year]) => {
 return axios({
    method: "POST",
     url: API +  "course_topic_number",
     data: [courseId,year]
   }).then(response => {
     commit("SET_COURSE_TOPIC_NUMBER", response.data);
     return response.data;
  });
};
 
//get all of course delegates for all courses for a lecturercourse_delegates
// export const getCourseDelegates = ({ commit }) => {
//   return axios({
//     method:"GET",
//     url:(API + "course_delegates") 
//   }).then(response => {
//       commit("SET_COURSE_DELEGATE", response.data);
//       return response.data;
//     });
// };
//get number of course delegates for all courses for a lecturer
// export const getNumberOfCourseDelegates = ({ commit }) => {
//   return axios({
//     method:"GET",
//     url:(API + "course_delegates_number") 
//   }).then(response => {
//       commit("SET_NUMBER_COURSE_DELEGATE", response.data);
//       return response.data;
//     });
// };
//get number of courses for a lecturer
  export const getNumberOfCoursePerLecturer = ({commit}) => {
    return axios({
      method:'GET',
      url: API + "course_number"
    }).then(response => {
      commit("SET_NUMBER_OF_COURSE", response.data)
     return response.data
   });
 }

//user trying to hide the details for different
 export const UserType = ({commit},  type) => {
  return
  commit("USERTYPE", type);
 }
 export const SAVETYPE =({commit}, type) => {
   LocalStorage.set('type', type)
  commit("USERTYPE", type);
 }
export const addUser = ({ commit }, [user, userType]) => {
  console.log(user, userType)
    return axios({
     method: "POST",
     url: API + "add_lecturer",
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
    url: API+ "user_type",
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
        url: API + "attend_course"
      }).then (response =>{
        commit("SET_ATTEND_COURSE", response.data)
        return response.data
      }) 
    
   }

 //get details of a user
  export const getDetailsOfCurrentUser = ({commit}) => {
    return axios({
      method:"GET",
      url: API + "user_details"
    }).then(response => {
      commit("SET_USER_DETAILS",response.data)
      return response.data
    })
  }

  //update user details
  export const updateProfile = ({commit}, user) => {
    
  }
  
  export function  getNumOfCoveredTopicsPerWeek({commit}, [courseId, year]) {
    return axios({
      method:"GET",
      url:API+"topics_covered_per_week",
      params:[courseId, year]
    }).then(response => {
      //return response
    commit("setnum", response.data)
        
    }).catch(err=> {
      throw err
    })
  }


  export function generateAccessId({commit}, course_code){
    //console.log(course_code)
    return axios({
      method:"GET",
      url:API +"access_id",
      params:course_code
    }).catch(err => {
      throw err
    })
  }

  //change of design now adding course delegate
  export const addCourseDelegate = ({commit}, [user, userType]) => {
      return axios({
        method:"POST",
        url:API + "add_course_delegate",
        data:[user, userType]
      }).then(response => {
       // commit("SET_COURSE_DELEGATE", response.data)
        return response
      })
  }

 

  //Implementing login
  export function setAuthStatus ({ commit }, status) {
    commit('isAuthenticated', status)
  }
  
  export function loginRequest (payload) { 
    const auth_url = 'http://localhost:8000/' + 'oauth/token'
    return axios({
      method: 'post',
      url: auth_url,
      data: {
        grant_type : 'password',
        client_id : payload.client_id,
        client_secret: payload.client_secret,
        username : payload.email,
        password : payload.password,
        type: payload.type,
        scope : '*',
      },
      headers: {
        Accept: 'Application/json'
      }
    })
  }
  
  export function canYouHearMe(token) {
    return axios({
      method: 'POST',
      url: '/auth/hello_remote'
    })
  }
  
  export function setToken({ commit }, token) {
    commit('setToken', token)
  }
  
  export function logInUser ({ commit, state }, payload){
    commit('setLoginStatus', 'attempted')
  
    return loginRequest({  
      ...payload, 
      client_id: state.app.clientId,
      client_secret: state.app.clientSecret
    }).then(res => {
      console.log('hello_remote')
      commit('setLoginStatus', 'pending')
      commit('setToken', res.data.access_token)
      //user succesfully logged in
        commit('isAuthenticated', true)
        LocalStorage.set('authenticated', true)
        LocalStorage.set('token', res.data.access_token)
        commit('setLoginStatus', 'success')
        return res
  
    }).catch(err => {
      console.log(err)
      commit('setLoginStatus', 'failed_1')
      LocalStorage.remove('authenticated')
      return err
  
    })
  }
  
  export function logOut({ commit, state}) {
    return axios({
      method: 'get',
      url:API +"auth/logout",
  }).then(res => {
  
        commit('isAuthenticated', false)
        LocalStorage.remove('authenticated')
        LocalStorage.remove('token')
        console.log(res)
        return res
    }).catch(err => {throw err})
  }
  
 
  

 