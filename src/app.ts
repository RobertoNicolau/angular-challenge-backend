import fastify from 'fastify'
import { answerRoutes } from './routes/answer'

export const app = fastify()

app.register(answerRoutes)