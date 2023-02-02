import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { gameDetails } from '../api/gamesData.js'
const main=document.querySelector('#main-content')

const detailsTemplate=(game,user,submitHandler)=>html`<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="../..${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: 4</span>
            <p class="type">Action, Crime, Fantasy</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>${game.comments?game.comments.map(x=>html`<li class="comment">
                    <p>Content: ${x}</p>
                </li>`):html`<p class="no-comment">No comments.</p>`}
               
                
            </ul>
            <!-- Display paragraph: If there are no games in the database -->
            
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${user._id==game._ownerId?html`<div class="buttons">
            <a href="#" class="button">Edit</a>
            <a href="#" class="button">Delete</a>
        </div>`:html`<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit="${submitHandler}">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`}
        
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    

</section>`
export const detailsView=async(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault()
        let formData=Object.fromEntries(new FormData(e.target))
    console.log(formData)

    }
  
     let res=await gameDetails(Object.values(ctx.params)[0])
      console.log(res)
    let template=detailsTemplate(res,ctx.user,submitHandler)
    render(template,main)
}
