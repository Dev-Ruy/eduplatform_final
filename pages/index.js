import React from "react";
import Link from "next/link";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "JavaScript Moderno",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    },
    {
      id: 2,
      title: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      id: 3,
      title: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-red-600 text-2xl font-bold">EduFlix</h1>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>

      {/* Hero Banner */}
      <div
        className="h-[60vh] flex flex-col justify-center px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Domine habilidades que mudam sua vida
        </h2>
        <p className="mb-4 max-w-xl">
          Aprenda programação, design e marketing com cursos práticos
        </p>
        <button className="bg-red-600 px-6 py-2 rounded-md w-40">
          Começar
        </button>
      </div>

      {/* Courses Row */}
      <div className="px-8 mt-8">
        <h3 className="text-xl mb-4">Cursos em destaque</h3>
        <div className="flex gap-4 overflow-x-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[250px] cursor-pointer transform hover:scale-105 transition"
            >
              <img
                src={course.image}
                className="rounded-lg h-40 w-full object-cover"
              />
              <p className="mt-2 text-sm">{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
