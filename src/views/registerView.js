import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/userData.js';
let main=document.querySelector('#main-content')
const registerForm=(submitHandler)=>html`<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="content auth">
    <form id="register" @submit="${submitHandler}">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>`
export const registerView=(ctx)=>{
    const submitHandler=(e)=>{
        e.preventDefault();
          let  formData=Object.fromEntries(new FormData(e.target))
        console.log(formData)
          register(formData);
        ctx.page.redirect('/')
    }
    let form=registerForm(submitHandler)
    render(form,main)
  // console.log('-+-')
}