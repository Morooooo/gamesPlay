import { get } from "./api.js"

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