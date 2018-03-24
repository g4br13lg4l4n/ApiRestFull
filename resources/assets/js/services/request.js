import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Request = {}

Request.getCostumers = () => {
    return new Promise((resolve, reject)=>{
        Axios.get(Api.AppCostumers.getCostumers)
        .then(res => {
            resolve(res.data)
        })
        .catch(error =>{
            reject(error.data)
        })
    })
}

Request.addCostumer = (user) => {
    return new Promise((resolve, reject) => {
        Axios.post(Api.AppCostumers.addCostumer, user)
        .then(res => {
            resolve(res)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default Request