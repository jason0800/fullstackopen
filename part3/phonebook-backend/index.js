const express = require('express')
const morgan = require('morgan')
const app = express()

let persons = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

app.use(express.json())

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (request, response) => {
  response.send('<h1>Phonebook</h1>')
})

app.get('/info', (request, response) => {
  const numberOfContacts = persons.length
  const timeReceived = new Date().toUTCString()

  response.send(
    `<h2>Phonebook has ${numberOfContacts} contacts.</h2>
     <p>${timeReceived}</p>`
  )
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const generateId = () => {
    return Math.floor(Math.random()*1000000)
  }

  const checkNameAndNumber = (body) => {
    const personExists = persons.some(person => person.name === body.name)
    const numberExists = persons.some(person => person.number === body.number)

    return personExists || numberExists
  }

  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  if (checkNameAndNumber(body)) {
    return response.status(400).json({
      error: 'name or number already exists'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId().toString(),
  }

  persons = persons.concat(person)

  response.json(person)
})

console.log("hello");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
