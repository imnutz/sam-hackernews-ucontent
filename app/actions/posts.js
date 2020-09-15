import {
  fetchTopStories,
  fetchNewStories,
  fetchShowStories,
  fetchAskStories,
  fetchJobStories
} from '../api.js'

export const fetchingStories = () => ({ fetching: true })

export const getTopStories = () => {
  return fetchTopStories().then(stories => ({ stories }))
}

export const getNewStories = () => {
  return fetchNewStories().then(stories => ({ stories }))
}

export const getShowStories = () => {
  return fetchShowStories().then(stories => ({ stories }))
}

export const getAskStories = () => {
  return fetchAskStories().then(stories => ({ stories }))
}

export const getJobStories = () => {
  return fetchJobStories().then(stories => ({ stories }))
}
