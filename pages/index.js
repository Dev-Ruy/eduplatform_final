import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Home() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleAuth = async () => {
  if (type === "signup") {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return alert(error.message);
    alert("Conta criada!");
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
<input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{ width: "100%", marginBottom: 10, padding: 10 }}
/>

<input
  type="password"
  placeholder="Senha"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{ width: "100%", marginBottom: 10, padding: 10 }}
/>
    if (error) return alert(error.message);
    alert("Login feito!");
  }
};

  const openModal = (t) => {
    setType(t);
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* CSS GLOBAL IGUAL AO HTML */}
      <style jsx global>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: 'Inter', sans-serif; background:#141414; color:white; overflow-x:hidden; }

        .header { position:fixed; top:0; width:100%; height:80px; background:rgba(0,0,0,0.9); backdrop-filter:blur(10px); z-index:1000; display:flex; align-items:center; justify-content:space-between; padding:0 40px; }
        .logo { font-size:28px; font-weight:700; background:linear-gradient(135deg,#e50914,#f5f5f1); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .nav { display:flex; gap:30px; }
        .nav a { color:white; text-decoration:none; }

        .btn { padding:10px 24px; border:none; border-radius:6px; cursor:pointer; }
        .btn-primary { background:#e50914; color:white; }
        .btn-secondary { background:transparent; border:1px solid #404040; color:white; }

        .hero { height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; }
        .hero h1 { font-size:4rem; margin-bottom:20px; }

        .section { padding:80px 40px; }
        .section-title { font-size:2.5rem; margin-bottom:40px; border-left:4px solid #e50914; padding-left:20px; }

        .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }
        .card { background:#232329; border-radius:12px; overflow:hidden; transition:.3s; }
        .card:hover { transform:translateY(-10px); box-shadow:0 20px 40px rgba(229,9,20,.3); }
        .thumb { height:180px; background:linear-gradient(45deg,#e50914,#ff6b35); display:flex; align-items:center; justify-content:center; font-size:2rem; }
        .info { padding:20px; }

        .modal { position:fixed; inset:0; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; z-index:2000; }
        .modal-box { background:#232329; padding:40px; border-radius:12px; width:400px; }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="logo">📚 Lumina</div>
        <div className="nav">
          <a href="#">Início</a>
          <a href="#">Cursos</a>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={() => openModal("login")}>Entrar</button>
          <button className="btn btn-primary" onClick={() => openModal("signup")}>Começar</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Aprenda com os Melhores</h1>
          <p>Transforme sua carreira com cursos premium</p>
        </div>
      </section>

      {/* CURSOS */}
      <section className="section">
        <h2 className="section-title">Cursos em Destaque</h2>
        <div className="grid">

          <div className="card">
            <div className="thumb">💻</div>
            <div className="info">
              <h3>React Completo</h3>
              <p>R$ 197</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="thumb">🎨</div>
            <div className="info">
              <h3>UI/UX Design</h3>
              <p>R$ 167</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="thumb">📱</div>
            <div className="info">
              <h3>Flutter</h3>
              <p>R$ 247</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="modal">
          <div className="modal-box">
            <h2>{type === "login" ? "Login" : "Cadastro"}</h2>
            <input placeholder="Email" style={{ width:"100%", marginBottom:10, padding:10 }} />
            <input type="password" placeholder="Senha" style={{ width:"100%", marginBottom:10, padding:10 }} />
            <button className="btn btn-primary" style={{ width:"100%" }}>Entrar</button>
            <button onClick={closeModal} style={{ marginTop:10 }}>Fechar</button>
          </div>
        </div>
      )}

    </>
  );
}
