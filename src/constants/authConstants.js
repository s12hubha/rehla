export const LOGOUT = "LOGOUT";

export const APICONSTANTS={
    loginpath:({PhoneNumber,Password})=>`/Users/Login?PhoneNumber=${PhoneNumber}&Password=${Password}`,
    sigupPath:'/Users/Register',
    getUserDetailsPath:"/Users/GetUserProfile",
    updateProfilePath:"/updateProfile",
    updateProfileImagePath:"/changeUserPhoto",
}
export const ROUTESCONSTANTS={
    LOGIN:"/login",
    LOGOUT:"/logout",
    REGISTER:"/registration",
    FORGOT_PASSWORD:"/forget-password",
    NEW_PASSWORD:"/new-password",
    EDIT_PROFILE:"/edit-profile",
    HOME:"/",
    SERVICES:"/services",
    CONTACT_US:"/contact-us",
    ABOUT_US:"/about-us",
    FAQ:"/faq",
    PREBOOKING_TRIPS:"/prebooking-trips",
    TOURISM_TOURS:"/tourism-tours",
    NEWS:"/news",
    NEWS_DETAILS:"/news-details",
    VERIFICATION:"/verification",
    PRIVACY_POLICY:"/privacy-policy",
    TERM_OF_USE:"/terms-of-use",
    CITY_TOUR:"/city-tour-al-ula",
    CITY_TOUR_SINGLE:"/city-tour-al-ula-single",
    MY_TRIP:"/my-trip",
    MY_RATES:"/my-rates",
    NOTIFICATIONS:"/notifications",
    VERIFICATIONS:"/verifications",
    WITHDRAW_BALANCE:"/withdraw-balance",
    MY_WALLET:"/my-wallet",
    REGISTER_TRAVELER:"/register-traveler",
    BOOK_TOUR:"/book-tour",
    ADD_BALANCE:"/add-balance",
    ADD_BALANCE_FORM:"/add-balance-form",
    MY_PREFERENCE:"/my-preferences"

}