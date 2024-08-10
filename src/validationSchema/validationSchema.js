import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const loginSchema = Yup.object().shape({
    PhoneNumber: Yup.string()
      .min(10, "too short")
      .matches(phoneRegExp, 'Phone number is not valid')
      .required("Enter Valid Phone Number"),
      Password:Yup.string().required("Enter Your Password Here")
  });

export const signUpSchema= Yup.object().shape({
    Name:Yup.string().required("Name is Required"),
Email:Yup.string().email("Enter a Valid Email").required("A Valid Email is Required"),
Password:Yup.string().required("Password is required"),
PhoneKey:Yup.string().max(4,"Enter a Valid Country Code").required("Select a Country Code"),

// IdentityNumber:"1064860119",
PhoneNumber:Yup.string().matches(phoneRegExp, 'Phone number is not valid')
.required("Enter Valid Phone Number"),
DateOfBirth:Yup.date("Enter a Valid Date").required("Enter Date of Birth"),
// CityId:18,
// Gender:true,
})