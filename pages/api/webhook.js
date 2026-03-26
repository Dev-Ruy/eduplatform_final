import mercadopago from "mercadopago";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export default async function handler(req, res) {
  try {
    const body = req.body;

    if (body.type === "payment") {
      const paymentId = body.data.id;

      const payment = await mercadopago.payment.findById(paymentId);

      const status = payment.body.status;
      const email = payment.body.payer.email;
      const courseId = payment.body.description;

      if (status === "approved") {
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .single();

        if (user) {
          await supabase.from("purchases").insert([
            {
              user_id: user.id,
              course_id: courseId,
              status: "approved",
            },
          ]);
        }
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "erro webhook" });
  }
}
