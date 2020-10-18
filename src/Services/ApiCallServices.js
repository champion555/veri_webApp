import axios from 'axios'

class ApiService {
    static apiCall(method, url, data, callback) {
        // let preload = " <img src='../assets/img/new.gif'  style='position:absolute;top:50%;left:50%' width='20%'/>";
        let headers = {
            "Authorization": sessionStorage.getItem('user_token'),
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Headers": "X-Requested-With, privatekey"
        }
        axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        })
            .then(function (res) {
                // console.log(res)
                callback(res)
            })
            .catch(function (err) {
                console.log("errors : ", err)
                callback(err)
                // callback(preload)
            })
    }
}
export default ApiService