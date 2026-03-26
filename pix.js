import mercadopago from 'mercadopago'

mercadopago.configure({ access_token: process.env.MP_TOKEN })

export default async function handler(req,res){
  const payment = await mercadopago.payment.create({
    transaction_amount: 100,
    description: 'Curso',
    payment_method_id: 'pix',
    payer: { email: user.email }
  })
  res.json(payment.body)
}
