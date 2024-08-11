import { setIsLoading } from "../slices/commonSlice";
import * as TripApi from "../services/tripService"
import { toast } from "react-toastify";
export const addNewTripAction=(formData,navigate)=>async(dispatch)=>{
    try{
        dispatch(setIsLoading(true))
       const response= await TripApi.addPrebookingTrip(formData)
       const {data,error}= response
         console.log({data})
       if (error) {
         
         toast.error(response?.error)
         dispatch(setIsLoading(false))
       } else {
         toast.success(data?.metas?.message)
         dispatch(setIsLoading(false))
        //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
       }
    }
    catch(error){
 
    }
   };