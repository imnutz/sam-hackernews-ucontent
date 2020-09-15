import { render } from 'ucontent'
import { intents, sam } from './sam.js'
import theme from './theme.js'

import express from 'express'

const app = express()
const port = 3000

const middleware = function (req, res, next) {
  sam.setRender((model) => {
    const representation = theme(model, intents)
    render(content => res.end(content), representation)
  })
  next()
}

app.use(middleware)
app.get('/', intents.iGetTopStories)
app.get('/top', intents.iGetTopStories)
app.get('/new', intents.iGetNewStories)
app.get('/show', intents.iGetShowStories)
app.get('/ask', intents.iGetAskStories)
app.get('/jobs', intents.iGetJobStories)

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
