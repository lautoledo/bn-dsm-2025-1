import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

<<<<<<< HEAD
/*************** ROTAS ***************/
    
import categoriasRouter from './routes/categorias.js'
app.use('/categorias', categoriasRouter)

import fornecedoresRouter from './routes/fornecedores.js'
app.use('/fornecedores', fornecedoresRouter)

=======
/***************** ROTAS ***********************/

import categoriasRouter from './routes/categorias.js'
app.use('/categorias', categoriasRouter)

import clientesRouter from './routes/clientes.js'
app.use('/clientes', clientesRouter)

import fornecedoresRouter from './routes/fornecedores.js'
app.use('/fornecedores', fornecedoresRouter)

import produtosRouter from './routes/produtos.js'
app.use('/produtos', produtosRouter)

>>>>>>> upstream/main
export default app
