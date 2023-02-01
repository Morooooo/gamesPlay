import {render,html} from '../../node_modules/lit-html/lit-html.js'
const main=document.querySelector('#main-content')
const homeViewTemplate=(user)=>html`<div id="home-page">
<h1>Latest Games</h1>
${user?html`<div class="game">
<div class="image-wrap">
    <img src="./images/CoverFire.png">
</div>
<h3>Cover Fire</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="#" class="btn details-btn">Details</a>
</div>
</div>
<div class="game">
<div class="image-wrap">
    <img src="./images/ZombieLang.png">
</div>
<h3>Zombie Lang</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="#" class="btn details-btn">Details</a>
</div>
</div>
<div class="game">
<div class="image-wrap">
    <img src="./images/MineCraft.png">
</div>
<h3>MineCraft</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="#" class="btn details-btn">Details</a>
</div>
</div>`:html`<!-- Display paragraph: If there is no games  -->
<p class="no-articles">No games yet</p>`}
<!-- Display div: with information about every game (if any) -->



</div>`
export const homeView=(ctx)=>{
let template=homeViewTemplate(ctx.user)
render(template,main)
}
