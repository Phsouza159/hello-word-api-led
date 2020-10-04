import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { sendCommand , commands } from './services/sendCommand.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const router = express.Router()

const getView = view => path.join(`${__dirname}/public/view/${view}.html`) 


/*
 * Index.html
 */
router.get('/', (req, res) => {

  res.sendFile(getView('index'))
})

router.post('/onLed', (req, res) => {

  sendCommand(commands.onLed)
    .then((result) => {

      console.log('sucess comand - onled', result)
      res.send({})
    })
    .catch((err) => {

      console.log('error command - onled', err)
      res.status(500).send()
    })
})

router.post('/offLed', (req, res) => {

  sendCommand(commands.offLed)
    .then((result) => {

      console.log('sucess comand - offled', result)
      res.send({})
    })
    .catch((err) => {

      console.log('error command - offled', err)
      res.status(500).send()
    })
})

app.use(express.static('public/assets'));
app.use('/', router)

app.listen(3000)