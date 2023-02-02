import {render,html} from '../../node_modules/lit-html/lit-html.js'
import { getAllGames } from '../api/gamesData.js'
const main=document.querySelector('#main-content')
export const gamesList=(ctx)=>{
   let x= getAllGames()
   

}