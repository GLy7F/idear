import jwtDecode from 'jwt-decode';

// export const URL = "http://localhost:5000";

export function decode (){

    let user = jwtDecode(localStorage.getItem('usertoken'))
    console.log(user)
    return user._id
}

export const logout = (user)=>{
    localStorage.removeItem('usertoken') // localStorage in the browser
    window.location.replace("/");
}