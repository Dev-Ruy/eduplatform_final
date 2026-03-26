import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (!user) {
    return <h2 style={{ padding: 20 }}>Acesso negado 🔒</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Painel Admin</h2>
      <p>Bem-vindo: {user.email}</p>
    </div>
  );
}
