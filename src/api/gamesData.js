import { get,put,post,del } from "./api.js"

export const getAllGames=async()=>{
    let res= await get('/data/games?sortBy=_createdOn%20desc')
    let x=res.json()
    return x
} 
export const gameDetails=async(id)=>{
    let res=await get(`/data/games/${id}`)
    let x=res.json()
    return x

}
export const editGame=async(id,data)=>{
   let res=await put(`/data/games/${id}`,data)
   let  x=res.json()
}
export const deleteGame=(id)=>{
    return del(`/data/games/${id}`)
}
export const addComment=async(id,data)=>{
    let res=await post('/data/comment',{id,data})
    return
}
export const getComments=async(id)=>{
let res=await get(`/data/comments?where=gameId%3D%22{${id}}%22`)
let x=res.json()

}
export const createGame=async(data)=>{
let res= await post(`/data/games`,data)
let x=res.json()
}
