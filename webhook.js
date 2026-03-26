import mercadopago from "mercadopago";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // IMPORTANTE (service role)
);

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export default async function handler(req, res) {
  try {
    const body = req.body;

    // Mercado Pago envia vários tipos de eventos
    if (body.type === "payment") {
      const paymentId = body.data.id;

      // Buscar detalhes do pagamento
      const payment = await mercadopago.payment.findById(paymentId);

      const status = payment.body.status;
      const email = payment.body.payer.email;
      const courseId = payment.body.description || "1";

      console.log("Pagamento:", status, email);

      if (status === "approved") {
        // Buscar usuário no Supabase
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

        if (user) {
          // Salvar compra
          await supabase.from("purchases").insert([
            {
              user_id: user.id,
              course_id: courseId,
              status: "approved",
            },
          ]);

          console.log("Curso liberado!");
        } else {
          console.log("Usuário não encontrado");
        }
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "erro no webhook" });
  }
}