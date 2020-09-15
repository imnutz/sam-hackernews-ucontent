import { html, render } from 'ucontent'
import { intents, sam } from './sam'
import theme from './theme'

const renderer = (model) => {
  const representation = theme(model, intents)
  render(document.body, html`${representation}`)
}

sam.setRender(renderer)
