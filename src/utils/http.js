import axios from 'axios'

const http = {
    get(url) {
        return axios.get(url)
            .then(function (result) {
                return result.data.data
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //axios提交表单数据
    post({ url, data }) {
        return axios({
            url,
            data,
            method: 'POST',    
            //对Data中的数据进行预处理，处理后的数据进行提交
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data["params"]) {
                    //转码拼接
                    ret += encodeURIComponent(it) + '%3D' + encodeURIComponent(data["params"][it]) + '%26'
                }
                return 'params='+ ret
            }],       
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (result) {
                return result.data.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export default http