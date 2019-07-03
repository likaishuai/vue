import axios from 'axios'

const http={
    get( url){
           
        return  axios.get(url)
            .then(function(result) {
                return result.data.data
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
export default http