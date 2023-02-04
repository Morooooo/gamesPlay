import page from './node_modules/page/page.mjs'
import { getAllGames } from './src/api/gamesData.js'

import { navBarMiddleware } from './src/middlewares/navBarMiddleWare.js'
import { verifyUserData } from './src/middlewares/validateUserDataMiddleWare.js'
import { createView } from './src/views/createView.js'
//import { commentsView } from './src/views/commentsView.js'
import { deleteView } from './src/views/deleteGame.js'
import { detailsView } from './src/views/detailsView.js'
import { editView } from './src/views/editView.js'
import { homeView } from './src/views/homeView.js'
import { loginView } from './src/views/loginView.js'
import { logoutView } from './src/views/logoutView.js'
import { registerView } from './src/views/registerView.js'
page(verifyUserData )
page(navBarMiddleware)

page('/',homeView)
page('/register',registerView)
page('/login',loginView) 
page('/logout',logoutView)
page('/allGames',getAllGames)
page('/allGames/:params',detailsView)
page('/allGames/:params/edit',editView)
page('/allGames/:params/delete',deleteView)
page('/create',createView)
//page(`/allGames/:params/comments`,commentsView)
page.start()
