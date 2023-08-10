import fastify from 'fastify'
import cors from '@fastify/cors'
import { answerRoutes } from './routes/answer'

export const app = fastify()
app.register(answerRoutes)
 app.register(cors, { 
  origin: '*',
})
