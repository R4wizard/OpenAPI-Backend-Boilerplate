import fs from 'fs'
import express from 'express'
import cors from 'cors'
import OpenAPIBackend from 'openapi-backend'

import * as handlers from '~/handlers'
import * as security from '~/security'
import  { PORT } from '~/environment'

const api = new OpenAPIBackend({
  definition: './openapi.yml',
  quick: true,
  validate: true,
  handlers,
})

for(let key in security)
  api.registerSecurityHandler(key, security[key])

const app = express()
api.init()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.sendStatus = code => res.status(code).send()
  next()
})
app.use((req, res) => api.handleRequest(req, req, res))
app.listen(PORT, () => console.info(`API listening on port ${PORT}.`))
