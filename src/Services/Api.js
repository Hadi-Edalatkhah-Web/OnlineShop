import axios from "axios";


const BASE_URL="https://fakestoreapi.com";

export const getProducts=async()=>{
    
    const response=await axios.get(`${BASE_URL}/products`);
    console.log("API")

    return response.data
    
}

// export const getProduct=async(id)=>{
//     const response=await axios.get(`${BASE_URL}/products/${id}`)
//     return response.data;
// }