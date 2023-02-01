import {render,html} from '../../node_modules/lit-html/lit-html.js'
import {logout } from '../api/userData.js';
let main=document.querySelector('#main-content')
export const logoutView=(ctx)=>{
     logout()
     ctx.page.redirect('/')
}
