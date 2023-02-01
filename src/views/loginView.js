import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { login } from '../api/userData.js';
let main=document.querySelector('#main-content')

const loginForm=(submitHandler)=>html`<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="auth">
    <form id="login" @submit="${submitHandler}" >

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>`
export const loginView=(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault();
        let formData=Object.fromEntries(new FormData(e.target))
        console.log(formData)
        login(formData)
        ctx.page.redirect('/')
    }
    let form = loginForm(submitHandler)
    render(form,main)

}