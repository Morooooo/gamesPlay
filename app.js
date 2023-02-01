import page from './node_modules/page/page.mjs'
console.log()
import { navBarMiddleware } from './src/middlewares/navBarMiddleWare.js'
import { verifyUserData } from './src/middlewares/validateUserDataMiddleWare.js'
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
page.start()
