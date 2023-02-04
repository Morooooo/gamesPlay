import { deleteGame } from "../api/gamesData.js"

export const deleteView=(ctx)=>{
    let id =Object.values(ctx.params)[0]
    
    deleteGame(id)
    ctx.page.redirect(`/`)
}