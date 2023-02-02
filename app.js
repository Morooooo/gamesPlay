import page from './node_modules/page/page.mjs'
import { getAllGames } from './src/api/gamesData.js'

import { navBarMiddleware } from './src/middlewares/navBarMiddleWare.js'
import { verifyUserData } from './src/middlewares/validateUserDataMiddleWare.js'
import { detailsView } from './src/views/detailsView.js'
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
page.start()
