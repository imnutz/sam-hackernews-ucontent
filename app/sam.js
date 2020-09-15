import samPattern from 'sam-pattern'
import initialState from './initialState.js'

import setupActions from './actions/index.js'

import posts from './components/posts.js'

const { api, createInstance } = samPattern

export const sam  = api(createInstance())

sam.addComponent(posts)

sam.addInitialState(initialState)

export const intents = setupActions(sam)
