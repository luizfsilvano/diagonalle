import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone } from "lucide-react";
import { IMaskInput } from "react-imask";
import fundoContato from "../assets/fundo-contato.mp4";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 🔁 70% da velocidade normal
    }
  }, []);

  return (
    <section
      id="contato"
      className="relative min-h-screen mx-auto text-center flex flex-col items-center justify-center  bg-#F2F2F2 text-[#0D0D0D] py-20 px-6"
    >
      {/* 🎥 Vídeo de fundo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-100"
      >
        <source src={fundoContato} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-title md:text-5xl font-bold mb-6">
          Fale com a gente
        </h2>
        <p className="text-lg font-sans md:text-xl opacity-80 mb-12">
          Precisa de um orçamento ou quer bater um papo? Vamos adorar te ouvir.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* campo de nome */}
            <div>
              <label className="block text-sm font-sans font-semibold mb-1 flex items-center gap-2">
                <User size={16} /> Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#144ECB] text-black"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* campo de telefone */}
            <div>
              <label className="block text-sm font-sans font-semibold mb-1 flex items-center gap-2">
                <Phone size={16} /> Telefone
              </label>
              <IMaskInput
                mask="(00) 00000-0000"
                value={form.phone}
                onAccept={(value) => setForm({ ...form, phone: value })}
                placeholder="(61) 99660-7846"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#144ECB]  text-black"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-sm font-semibold mb-1 flex items-center gap-2">
              <Mail size={16} /> E-mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#144ECB] text-black"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-sans text-sm font-semibold mb-1 flex items-center gap-2">
              <MessageSquare size={16} /> Mensagem
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#144ECB]  text-black"
              placeholder="Escreva sua mensagem aqui..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="mt-4 font-sans bg-[#C7B093]  text-[#0D0D0D] px-6 py-3 rounded-md font-semibold hover:bg-[#F2D7B6] transition"
          >
            Enviar mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
