import { html } from 'ucontent';
import { timeAgo, host } from './utils.js'


const header = (appName, data) => {
  const menuKeys = Object.keys(data)
  return html`
    <div class="header">
      <h3>${appName}</h3>
      <ul>
        ${
          menuKeys.map(key => {
            return html.for(data[key], 'name')`
              <li><a href=${data[key].path}>${data[key].name}</a></li>
            `
          })
        }
      </ul>
    </div>
  `
}

const getTitle = (post) => {
  if (!post.url) {
    return post.title
  } else {
    return html`<a href=${post.url}>${post.title}</a> <span>(${host(post.url)})</span>`
  }
}

const renderPosts = (posts = []) => {
  return html`
    <div class="posts">
      ${
        posts.map((post) => {
          return html.for(post, 'id')`
            <div class="post">
              <span class="score">${post.score}</span>
              <div class="info-wrapper">
                <h3>${getTitle(post)}</h3>
                <p class="info">
                  <span>by ${post.by} ${timeAgo(post.time)} ago</span> |
                  <span>${post.descendants || 0} comments</span>
                </p>
              </div>
            </div>
          `
        })
      }
    </div>
  `
}

export default (state, style) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${style}</style>
      <title>Hacker News</title>
    </head>
    <body>
      <div class="app">
        ${header(state.appName, state.header)}
        ${renderPosts(state.stories)}
      </div>
    </body>
    </html>
  `
}
