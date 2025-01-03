const express = require('express') // require --> commonJS
const crypto = require('node:crypto')
const movies = require('./movies.json')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// Todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: result.error.message })
  }

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }
  // Esto no sería REST, porque estamos guardando
  // el estado de la aplicción en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // actualizar la caché del cliente
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
