
import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import { handleApiError } from "./utils";

export const addPrebookingTrip = async (formData) => {
    try {
      const res = await authInterceptor.post(APICONSTANTS.AddPrebookingTrip,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };