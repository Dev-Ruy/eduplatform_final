import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const courses = [
    { id: 1, title: "JavaScript Moderno", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "UX/UI Design", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Marketing Digital", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
  ];

  return (Aqui está um site completo de venda de cursos com design no padrão Netflix:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CursoFlix - Aprenda com os Melhores</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: #141414;
            color: white;
            overflow-x: hidden;
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            background: rgba(0,0,0,0.9);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, #e50914, #f5f5f1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #e50914;
        }

        .auth-buttons {
            display: flex;
            gap: 15px;
        }

        .btn {
            padding: 10px 24px;
            border: none;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: #e50914;
            color: white;
        }

        .btn-primary:hover {
            background: #f40612;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 1px solid #404040;
        }

        .btn-secondary:hover {
            background: white;
            color: #141414;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%2301020a" width="1200" height="600"/><circle fill="%23e50914" opacity="0.1" cx="200" cy="200" r="150"/><circle fill="%23ff6b35" opacity="0.05" cx="800" cy="300" r="200"/><circle fill="%2331d2f2" opacity="0.05" cx="1000" cy="150" r="100"/></svg>');
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero-content h1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
        }

        .hero-content p {
            font-size: 1.4rem;
            margin-bottom: 40px;
            max-width: 600px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.3s forwards;
        }

        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 0.6s forwards;
        }

        /* Categories */
        .section {
            padding: 80px 20px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 40px;
            padding-left: 20px;
            border-left: 4px solid #e50914;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 60px;
        }

        .category-card {
            background: #232329;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .category-card:hover {
            transform: translateY(-10px);
            background: #e50914;
        }

        .category-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        /* Courses Grid */
        .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .course-card {
            background: #232329;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .course-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(229, 9, 20, 0.3);
        }

        .course-thumbnail {
            height: 180px;
            background: linear-gradient(45deg, #e50914, #ff6b35);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            position: relative;
        }

        .course-info {
            padding: 20px;
        }

        .course-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .course-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            font-size: 0.9rem;
            color: #b3b3b3;
        }

        .course-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #e50914;
        }

        .course-actions {
            display: flex;
            gap: 10px;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: #232329;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            padding: 40px;
            position: relative;
            animation: modalSlideIn 0.3s ease;
        }

        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            color: #b3b3b3;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .hero-content p {
                font-size: 1.1rem;
            }
            
            .nav-links {
                display: none;
            }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #141414;
        }

        ::-webkit-scrollbar-thumb {
            background: #e50914;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div class="logo">📚 Lumina</div>
            <ul class="nav-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#categories">Categorias</a></li>
                <li><a href="#courses">Cursos</a></li>
                <li><a href="#about">Sobre</a></li>
            </ul>
            <div class="auth-buttons">
                <a href="#" class="btn btn-secondary" onclick="showModal('login')">Entrar</a>
                <a href="#" class="btn btn-primary" onclick="showModal('signup')">Começar agora</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Aprenda com os Melhores</h1>
            <p>Transforme sua carreira com cursos premium criados por experts do mercado. Acesso ilimitado por apenas R$29,90/mês.</p>
            <div class="hero-buttons">
                <a href="#" class="btn btn-primary" style="padding: 16px 40px; font-size: 1.2rem;">Começar 7 dias grátis</a>
                <a href="#courses" class="btn btn-secondary" style="padding: 16px 40px; font-size: 1.2rem;">Ver cursos</a>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section id="categories" class="section">
        <h2 class="section-title">Escolha sua área</h2>
        <div class="categories-grid">
            <div class="category-card">
                <div class="category-icon">💻</div>
                <h3>Programação</h3>
            </div>
            <div class="category-card">
                <div class="category-icon">🎨</div>
                <h3>Design</h3>
            </div>
            <div class="category-card">
                <div class="category-icon">📱</div>
                <h3>Mobile</h3>
            </div>
            <div class="category-card">
                <div class="category-icon">🚀</div>
                <h3>DevOps</h3>
            </div>
            <div class="category-card">
                <div class="category-icon">💼</div>
                <h3>Negócios</h3>
            </div>
            <div class="category-card">
                <div class="category-icon">📊</div>
                <h3>Dados</h3>
            </div>
        </div>
    </section>

    <!-- Featured Courses -->
    <section id="courses" class="section">
        <h2 class="section-title">Cursos em Destaque</h2>
        <div class="courses-grid">
            <div class="course-card">
                <div class="course-thumbnail">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="course-info">
                    <div class="course-title">React Completo do Zero ao Avançado</div>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> 28h</span>
                        <span><i class="fas fa-users"></i> 12.5k alunos</span>
                    </div>
                    <div class="course-price">R$ 197</div>
                    <div class="course-actions">
                        <button class="btn btn-primary" style="flex: 1;">Comprar</button>
                        <button class="btn btn-secondary" style="padding: 10px;"><i class="fas fa-play"></i></button>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="course-thumbnail">
                    <i class="fas fa-paint-brush"></i>
                </div>
                <div class="course-info">
                    <div class="course-title">UI/UX Design com Figma</div>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> 22h</span>
                        <span><i class="fas fa-users"></i> 8.2k alunos</span>
                    </div>
                    <div class="course-price">R$ 167</div>
                    <div class="course-actions">
                        <button class="btn btn-primary" style="flex: 1;">Comprar</button>
                        <button class="btn btn-secondary" style="padding: 10px;"><i class="fas fa-play"></i></button>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="course-thumbnail">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="course-info">
                    <div class="course-title">Flutter: Apps Nativos Multiplataforma</div>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> 35h</span>
                        <span><i class="fas fa-users"></i> 15.3k alunos</span>
                    </div>
                    <div class="course-price">R$ 247</div>
                    <div class="course-actions">
                        <button class="btn btn-primary" style="flex: 1;">Comprar</button>
                        <button class="btn btn-secondary" style="padding: 10px;"><i class="fas fa-play"></i></button>
                    </div>
                </div>
            </div>

            <div class="course-card">
                <div class="course-thumbnail">
                    <i class="fas fa-database"></i>
                </div>
                <div class="course-info">
                    <div class="course-title">Python para Data Science</div>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> 42h</span>
                        <span><i class="fas fa-users"></i> 20.1k alunos</span>
                    </div>
                    <div class="course-price">R$ 297</div>
                    <div class="course-actions">
                        <button class="btn btn-primary" style="flex: 1;">Comprar</button>
                        <button class="btn btn-secondary" style="padding: 10px;"><i class="fas fa-play"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div id="authModal" class="modal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 id="modalTitle">Faça login na sua conta</h2>
            <form id="authForm" style="margin-top: 30px;">
                <div style="margin-bottom: 20px;">
                    <input type="email" placeholder="Email" required style="
                        width: 100%; padding: 15px; border: 1px solid #404040; 
                        border-radius: 6px; background: #1a1a1a; color: white;
                        font-size: 16px;
                    ">
                </div>
                <div style="margin-bottom: 20px;">
                    <input type="password" placeholder="Senha" required style="
                        width: 100%; padding: 15px; border: 1px solid #404040; 
                        border-radius: 6px; background: #1a1a1a; color: white;
                        font-size: 16px;
                    ">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px; font-size: 1.1rem;">
                    Entrar
                </button>
            </form>
            <div style="text-align: center; margin-top: 20px; color: #b3b3b3;">
                <span id="modalToggleText">Não tem conta?</span> 
                <a href="#" id="modalToggle" onclick="toggleModalType()">Cadastre-se grátis</a>
            </div>
        </div>
    </div>

    <script>
        // Modal functions
        function showModal(type) {
            const modal = document.getElementById('authModal');
            const title = document.getElementById('modalTitle');
            const toggleText = document.getElementById('modalToggleText');
            const toggleLink = document.getElementById('modalToggle');
            
            if (type === 'signup') {
                title.textContent = 'Crie sua conta grátis';
                toggleText.textContent = 'Já tem conta?';
                toggleLink.textContent = 'Faça login';
            } else {
                title.textContent = 'Faça login na sua conta';
                toggleText.textContent = 'Não tem conta?';
                toggleLink.textContent = 'Cadastre-se grátis';
            }
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('authModal').style.display = 'none';
            document
