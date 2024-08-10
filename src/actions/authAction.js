
import { resetUserDetails, setAuth, setIsUploading, setUserDetails } from "../slices/userSlice";
import * as Api from "../services/authService"
import { setIsLoading } from "../slices/commonSlice";
import { toast } from "react-toastify";
export const setInitialAuthState = (navigate) => async (dispatch) => {
    await dispatch(resetUserDetails());
    navigate("/login");
  };

  export const initializeAuth = () => async (dispatch) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken||JSON.parse(sessionStorage.getItem("profile"))?.accessToken;
   
  
    if (accessToken ) {
     
        
        dispatch(setUserDetails(JSON.parse(localStorage.getItem("profile")).user));
      } else {
        // await dispatch(refreshTokenAction(refreshToken));
      }
    }
  
  export const signInAction = (formData, navigate) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
      const response = await Api.signIn(formData);
      const { error, data } = response;
      console.log({response:response?.data?.model})
      if (error) {
        // dispatch({
        //   type: types.SIGNIN_FAIL,
        //   payload: error,
        // });
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {
        const { Token, refreshToken:
          RefreshToken
           } = data?.model;
        const profile = {
          user:response?.data?.model,
          accessToken:Token[0]?.access_token,
          refreshToken:RefreshToken,
          accessTokenUpdatedAt:Token[0]?.expires_in,
        };
        if(formData?.remember_me){
            localStorage.setItem("profile", JSON.stringify(profile));

        }
        else{
          sessionStorage.setItem("profile", JSON.stringify(profile))
        }
        // dispatch({
        //   type: types.SIGNIN_SUCCESS,
        //   payload: profile,
        // });
        dispatch(setUserDetails({...profile?.user}));
        dispatch(setIsLoading(false))
        navigate("/");
      }
    } catch (error) {
        
    //   await dispatch({
    //     type: types.SIGNIN_FAIL,
    //     payload: types.ERROR_MESSAGE,
    //   });
      navigate("/login");
    }
  };

  export const signUpAction =
  (formData, navigate) =>
  async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
      localStorage.removeItem("profile");
      sessionStorage.removeItem("profile");
      const response = await Api.signUp(formData);
      const { error,data } = response;
      if (error) {
        // dispatch({
        //   type: types.SIGNUP_FAIL,
        //   payload: error,
        // });
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {
        console.log({data})
        toast.success(data?.metas?.message)
        dispatch(setIsLoading(false))
        // if (!isConsentGiven) {
        //   dispatch({
        //     type: types.SIGNUP_SUCCESS,
        //     payload: types.SIGNUP_SUCCESS_MESSAGE,
        //   });
        //   navigate("/signin");
        // }

        // if (isConsentGiven) {
        //   dispatch({
        //     type: types.SIGNUP_SUCCESS,
        //     payload: types.SIGNUP_SUCCESS_MESSAGE,
        //   });
        //   navigate("/auth/verify", { state: email });
        // }
        navigate("/login")
      }
    } catch (error) {
        dispatch(setIsLoading(false))
   
    }
  };

  export const getProfileAction=()=>async(dispatch)=>{
    try{
      dispatch(setIsLoading(true));
      const response = await Api.getUserDetails();
      const { error, data } = response;
      console.log({data})
      if (error) {
        
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {

      }
    }
    catch(error){

    }
  }

  export const updateProfileAction=(formData)=>async(dispatch)=>{
    try{
      dispatch(setIsLoading(true));
      const response = await Api.updateUserDetails(formData);
      const { error, data } = response;
      console.log({data})
      if (error) {
        
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {

      }
    }
    catch(error){
      console.log(error)
    }
  };
  export const updateProfileImageAction=(formData)=>async(dispatch)=>{
    try{
      
      dispatch(setIsUploading(true));
      const response = await Api.updateProfileImage(formData);
      const { error, data } = response;
      console.log({data,response})
      if (error) {
        
        toast.error(response?.error)
        dispatch(setIsUploading(false))
      } else {
        dispatch(setUserDetails({...data?.model,ProfilePhoto:process.env.REACT_APP_BASE_URL+data?.model?.ProfilePhoto}));
        dispatch(setIsUploading(false))
      }
    }
    catch(error){
      console.log(error)
    }
  };

  