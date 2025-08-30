import type { ApiResponseType, CountryType, StateType } from "../types";
import axios from "axios";
export const getCountries = async ():Promise<CountryType[]>=>{
   const result = await axios.get("https://countriesnow.space/api/v0.1/countries")
   return result.data.data
}

export const getStates =async (country:string):Promise<ApiResponseType<StateType[]>>=>{
    const result = await axios.post("https://countriesnow.space/api/v0.1/countries/states",{country})
    if(result.data.error !== undefined && !result.data.error){
        return {
             response:result?.data?.data?.states || [],
             responseStatus:true,
             responseMessage:"",
             statusCode:200
        }
    }else{
        return {
            response:null,
             responseStatus:true,
             responseMessage:"",
             statusCode:200
        }
    }
}

export const getCities = async ({country,state}:{country:string,state:string}):Promise<ApiResponseType<string[]>>=>{
         const result = await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities",{country,state})
    if(result.data.error !== undefined && !result.data.error){
        return {
             response:result?.data?.data || [],
             responseStatus:true,
             responseMessage:"",
             statusCode:200
        }
    }else{
        return {
            response:null,
             responseStatus:true,
             responseMessage:"",
             statusCode:200
        }
    }
}