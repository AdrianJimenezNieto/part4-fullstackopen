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

  return blogs.length === 0
    ? {}
    : { author: mostBlogsAuthor, blogs: blogsPerAuthor[mostBlogsAuthor].length }
}

const mostLikes = (blogs) => {
  const blogsPerAuthor = loadsh.groupBy(blogs, 'author')

  const mostLikesAuthor = loadsh.maxBy(
    loadsh.keys(blogsPerAuthor),
    author => loadsh.sumBy(blogsPerAuthor[author], 'likes')
  )

  return blogs.length === 0
    ? {}
    : {
        author: mostLikesAuthor,
        likes: loadsh.sumBy(blogsPerAuthor[mostLikesAuthor], 'likes')
      }
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}