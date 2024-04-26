const loadsh = require('loadsh')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return blogs.length === 0 
    ? 0
    : blogs.map(blog => blog.likes).reduce(reducer, 0)
}

const favouriteBlog = (blogs) => {
  return blogs.length === 0
    ? {}
    : blogs.reduce((max, item) => item.likes > max.likes ? item : max)
}

const mostBlogs = (blogs) => {
  const blogsPerAuthor = loadsh.groupBy(blogs, 'author')

  const mostBlogsAuthor = loadsh.maxBy(
    loadsh.keys(blogsPerAuthor),
    author => blogsPerAuthor[author].length
  )

  return 
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}