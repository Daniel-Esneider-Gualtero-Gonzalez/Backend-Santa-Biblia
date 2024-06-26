import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong feo 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on http://localhost:${port}`)
})