import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { getAllGames } from '../api/gamesData.js'
const main=document.querySelector('#main-content')

const game=(g)=>html`<div class="game">
<div class="image-wrap">
    <img src="${g.imageUrl}">
</div>
<h3>${g.title}</h3>
<div class="rating">
    ${html`<span>☆</span>`}
</div>
<div class="data-buttons">
    <a href="/allGames/${g._id}" class="btn details-btn">Details</a>
</div>
</div>`
const allGames=(games)=>html`<ul>${games.map(g=>game(g))}</ul>
`
const homeViewTemplate=(user,list)=>html` <!--Home Page-->
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    

      <div id="home-page">

<h1>Latest Games</h1>
${user?allGames(list):html`<!-- Display paragraph: If there is no games  -->
<p class="no-articles">No games yet</p>`}
<!-- Display div: with information about every game (if any) -->
</div>  
        
    </div>
</section>`
/**/
export const homeView=async(ctx)=>{
    let list=await getAllGames()
    //list.map(x=>console.log(x)) 
let template=homeViewTemplate(ctx.user,list)
render(template,main)
//console.log(ctx.user)
}
