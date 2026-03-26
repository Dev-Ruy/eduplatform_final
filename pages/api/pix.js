import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export default async function handler(req, res) {
  const payment = await mercadopago.payment.create({
    transaction_amount: 100,
    description: "1",
    payment_method_id: "pix",
    payer: { email: "teste@email.com" },
  });

  res.status(200).json(payment.body);
}
