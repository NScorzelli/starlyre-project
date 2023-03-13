import express from 'express'

const port = 3000
const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log(`Server is running on port ${port} 🚀`)
}
)
