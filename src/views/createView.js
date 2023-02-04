  import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { createGame } from '../api/gamesData.js'
const main=document.querySelector('#main-content')


const createForm=(submitHandler)=>html`<!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="auth">
    <form id="create" @submit="${submitHandler}>
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>
`
export const createView=(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault()
        const formData =Object.fromEntries(new FormData(e.target))
        // console.log(typeof formData)
    Object.values(formData).some(x=>{x.length<1?alert('Fill all fields'):
    createGame(formData).then(()=>ctx.page.redirect('/'))  })
      
        
      
        
    }
    let form=createForm(submitHandler)

    render(form,main)
}