import Vue from 'vue'

const dataTrs = function(date) {
    if(date){
        let dateList = date.split(" ")
        let newDate = dateList[0].split('-').join(".")
        return newDate
     } else {
         return
     }
    }

 Vue.filter("dateTranslate",dataTrs)