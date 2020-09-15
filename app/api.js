import fetch from 'node-fetch'

const API_BASE = 'https://hacker-news.firebaseio.com'
const API_VERSION = 'v0'

const createEndpoint = (...resources) => {
  return [ API_BASE, API_VERSION].concat(resources).join('/')
}

const fetchStories = (resource) => {
  const endpoind = createEndpoint([resource, '?limitToFirst=30&orderBy="$key"'].join(''))
  return fetch(endpoind)
    .then(res => res.json())
    .then(data => {
      const promises = data.map(fetchStory)

      return Promise.all(promises)
    })
}

export const fetchStory = (id) => {
  const endpoind = createEndpoint('item', [id, '.json'].join(''))

  return fetch(endpoind).then(res => res.json())
}

export const fetchTopStories = () => {
  return fetchStories('topstories.json')
}

export const fetchNewStories = () => {
  return fetchStories('newstories.json')
}

export const fetchShowStories = () => {
  return fetchStories('showstories.json')
}

export const fetchAskStories = () => {
  return fetchStories('askstories.json')
}

export const fetchJobStories = () => {
  return fetchStories('jobstories.json')
}
