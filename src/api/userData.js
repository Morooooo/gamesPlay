import {get,post,del,put} from './api.js'
export const saveUserData=(data)=>{
    if(data.accessToken){
        sessionStorage.setItem('userData',JSON.stringify(data));

    }
}
export const getUserData=(data)=>{
    let rowData=sessionStorage.getItem('userData')
    if(rowData){
        return JSON.parse(rowData)
    }
}
export const clearUserData=()=>{
    sessionStorage.removeItem('userData')
}
export const register=async(data)=>{
  let res=await post('/users/register',data);
  let x= await res.json()
  saveUserData(x)
}
export const login= async(data)=>{
    let res=await post('/users/login',data);
    let x=await res.json()
    saveUserData(x)
}
export const logout=()=>{
    get('/users/logout')
    return clearUserData('userData')
}