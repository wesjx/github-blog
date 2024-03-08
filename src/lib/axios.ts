import axios from 'axios'

const username = 'wesjx'; 

export const apiProfile = axios.create({
  baseURL: `https://api.github.com/users/${username}`,
})


export const apiPostsIssue = axios.create({
    baseURL: 'https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge',
})

export const apiPostsIssueFull = axios.create({
    baseURL: 'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/',
})
