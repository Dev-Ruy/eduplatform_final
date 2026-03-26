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
      <div className="h-[80vh] flex flex-col justify-center px-24 bg-cover bg-center relative" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl space-y-6"
        >
          <h2 className="text-5xl font-bold">Domine habilidades que mudam sua vida</h2>
          <p className="text-lg text-gray-300">Cursos modernos com experiência premium</p>

          <button className="bg-red-600 px-8 py-3 rounded-xl text-lg hover:scale-105 transition">
            ▶ Começar
          </button>
        </motion.div>
      </div>

      {/* Cursos */}
      <div className="px-20 -mt-20">
        <h3 className="text-2xl mb-6">Cursos</h3>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.1 }}
              className="min-w-[300px] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl cursor-pointer"
              onClick={() => setSelected(course)}
            >
              <img src={course.image} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold">{course.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Player Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black rounded-2xl p-4 w-[80%] max-w-4xl"
          >
            <div className="flex justify-between mb-2">
              <h2 className="text-xl">{selected.title}</h2>
              <button onClick={() => setSelected(null)}>❌</button>
            </div>

            <iframe
              className="w-full h-[500px] rounded-xl"
              src={selected.video}
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
