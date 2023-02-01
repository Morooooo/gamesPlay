import { getUserData } from "../api/userData.js";
export const verifyUserData=(ctx,next)=>{
    ctx.user=getUserData()
    next()
}