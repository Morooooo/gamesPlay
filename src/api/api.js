import { clearUserData, getUserData } from "./userData.js";

const host='http://localhost:3030'
const request=async(url,method,data)=>{
    const options={
        method,
        headers:{}
    }
    if(method!=='GET'){
        options.headers['Content-Type']='application/json';
       options.body=JSON.stringify(data);
 }
    const user=getUserData ()
    if(user){
        options.headers['X-Authorization']=user.accessToken
    }
    try {
        let res= fetch(host+url,options)
if (res.ok=false){
       if(res.status=403){
        clearUserData(res);
      }
      const err=res.json()
      throw new Error(err.message)
    
    }if(res.status=204){
        return res}
        else{return res.json()}
    } catch (err) {
        alert(err.message)
        throw new Error(err)
        }
}
export const get=(url)=>{return request(url,'GET')}
export const post=(url,data)=>{return request(url,'POST',data)}
export const put=(url,data)=>{return request (url,'PUT',data)}
export const del=(url)=>{return request (url,'DELETE',)}