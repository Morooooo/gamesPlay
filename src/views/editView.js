import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { editGame } from '../api/gamesData.js'
const main=document.querySelector('#main-content')
const editForm=(submitHandler)=>html`<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="auth">
    <form id="edit" @submit="${submitHandler}">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`
export const editView=async(ctx)=>{
   const submitHandler=(e)=>{
        e.preventDefault();
        const formData=Object.fromEntries(new FormData(e.target))
        let id=Object.values(ctx.params)[0]
        //console.log(formData)
        
       if(formData.title==''||formData.category==''||formData.maxLevel==''
       ||formData.imageUrl==''||formData.summary=='') {
        return alert('Fill all fields,you wanker!')||ctx.page.redirect(`/allGames/${id}`)
    }editGame(id,formData).then(()=>ctx.page.redirect(`/`))
         
    }
     let form=editForm(submitHandler)
     render(form,main)

}