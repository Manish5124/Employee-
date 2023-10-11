import axios from "axios";

const titleAPI ='https://fakestoreapi.com/products/1'; 

export function requestGetFakeStore(){
    return axios.request({
        method:"get",
        url: titleAPI
    })

}
