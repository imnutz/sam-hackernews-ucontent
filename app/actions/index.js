import { startApp } from './init.js'
import {
  getTopStories,
  fetchingStories,
  getNewStories,
  getShowStories,
  getAskStories,
  getJobStories
} from './posts.js'

export default (sam) => {
  const {
    intents: [
      iStartApp,
      iGetTopStories,
      iFetchingStories,
      iGetNewStories,
      iGetShowStories,
      iGetAskStories,
      iGetJobStories
    ]
  } = sam.getIntents([
    startApp,
    getTopStories,
    fetchingStories,
    getNewStories,
    getShowStories,
    getAskStories,
    getJobStories
  ])

  return {
    iStartApp,
    iGetTopStories,
    iFetchingStories,
    iGetNewStories,
    iGetShowStories,
    iGetAskStories,
    iGetJobStories
  }
}
