import {render, html } from "../../node_modules/lit-html/lit-html.js"
const navBar=(user)=>html` <!-- Navigation -->
<h1><a class="home" href="#">GamesPlay</a></h1>
<nav >
    <a href="/allGames">All games</a>
    ${user?html`<!-- Logged-in users -->
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>`:html`<!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        </nav>
    </div>`}`
export const navBarView=(ctx)=>{
    return navBar(ctx.user);

}
