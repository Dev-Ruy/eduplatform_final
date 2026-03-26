import React from "react";
import Link from "next/link";

export default function Home() {
  const courses = [
    { id: 1, title: "JavaScript Moderno", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159" },
    { id: 2, title: "UX/UI Design", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d" },
    { id: 3, title: "Marketing Digital", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312" },
    { id: 4, title: "React Avançado", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-16 py-6 backdrop-blur-md bg-black/40 fixed w-full z-50">
        <h1 className="text-red-600 text-3xl font-bold">EduFlix</h1>
        <div className="space-x-6 text-lg">
          <Link href="/login">Login</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>

      {/* Hero */}
      <div
        className="h-[80vh] flex flex-col justify-center px-24 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative max-w-2xl space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            Domine habilidades que mudam sua vida
          </h2>
          <p className="text-lg text-gray-300">
            Aprenda programação, design e marketing com cursos práticos e modernos
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 px-8 py-3 rounded-xl text-lg hover:scale-105 transition">
              ▶ Começar
            </button>
            <button className="bg-white/20 px-8 py-3 rounded-xl backdrop-blur hover:scale-105 transition">
              ℹ Mais Info
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-20 -mt-20 space-y-12">
        {/* Row */}
        <div>
          <h3 className="text-2xl mb-6">Cursos em destaque</h3>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-[300px] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl hover:scale-110 hover:z-10 transition duration-300 cursor-pointer"
              >
                <img
                  src={course.image}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">{course.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
