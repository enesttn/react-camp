import axios from "axios";

export default class ProductService {
getProducts(){
    return axios.get("https://localhost:7093/api/Products/getall")
}

getByProductId(productId){
    return axios.get("https://localhost:7093/api/Products/getbyid?productId=" + productId)
}

}