import { navBarView } from "../views/navBarView.js";
import {render} from '../../node_modules/lit-html/lit-html.js'
const header=document.querySelector('#header')
export const navBarMiddleware=(ctx,next)=>{
    let template=navBarView(ctx)
    render(template,header)
    next()
}