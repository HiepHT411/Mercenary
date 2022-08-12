import * as httpRequest from "../utils/httpRequest"

export const getAll = async()=>{
    try {
        const res = await httpRequest.get('orders/all');
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const store = async(data)=>{
    try {
        const res = await httpRequest.post("orders/store",data);
        return res
    } catch (error) {
        console.log(error);
    }
}