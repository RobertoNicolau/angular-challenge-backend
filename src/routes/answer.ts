import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export async function answerRoutes(app: FastifyInstance) {
  app.post('/answer', async (req, res) => {
    const answerSchema = z.object({
      answer: z.string(),
    })
    const { answer } = answerSchema.parse(
      req.body,
    )

    if(!answer) {
      return res.code(400).send({status: 'error', message: 'Por favor, preencha todos os campos!'});
    }

    if(answer.toUpperCase().trim() !== 'SIM'){
      return res.code(400).send({ received: answer, status: 'error', message: 'Erro: Que Pena, sua resposta não foi aprovada.'});
    }
    return res.code(200).send({received: answer, status: 'success', message: 'Parabéns! Vocé está prestes a se juntar ao time CONVEM!'});
  })

  app.get('/answer', async (req, res) => {
    return res.code(200).send({status: 'success', message: 'Vocé está no caminho certo!'});
  })
}