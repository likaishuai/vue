import Vue from 'vue'
import path from 'path'
const imgAddress = (value) =>{
    return   'https://static.228.cn/'+ value 
}

Vue.filter("imgAddress", imgAddress)