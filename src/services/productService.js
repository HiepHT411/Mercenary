import * as httpRequest from "../utils/httpRequest"
export const post = async(data)=>{
    try {
        const res = await httpRequest.post("post/store",data)
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getAllProducts = async()=>{
    try {
        const res = await httpRequest.get(`products/all`)
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async(data)=>{
    try {
        const res = await httpRequest.post(`products/gets`,data)
        return res;
    } catch (error) {
        console.log(error);
    }
}