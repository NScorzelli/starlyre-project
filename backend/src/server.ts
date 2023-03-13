import express from 'express'
import routes from './shared/routes/routes'

const port = 3000
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log(`Server is running on port ${port} 🚀`)
}
)
