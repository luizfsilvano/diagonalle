import { motion } from "framer-motion";
import fundoVideo from "../assets/fundo.mp4";

function About() {
  const title = "A DIAGONALLE";

  return (
    <section className="relative min-h-screen overflow-hidden text-[#0D0D0D]">
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={fundoVideo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay se quiser aplicar um leve branco/transparente sobre o vídeo */}
      {/* <div className="absolute inset-0 bg-white/80 z-10" /> */}

      {/* 📦 Conteúdo principal */}
      <div className="relative z-20 px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-5xl font-title md:text-8xl font-bold mb-8 inline-block">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="text-xl font-sans max-w-3xl mx-auto opacity-80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Nasceu em 2019, originária de uma paixão pela publicidade, pela
          tecnologia e entrega de soluções personalizadas para nossos clientes.
        </motion.p>

        <motion.p
          className="text-xl font-sans max-w-3xl mx-auto opacity-80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Criamos experiências digitais memoráveis para sua marca.
        </motion.p>

        <motion.a
          href="#portfolio"
          className="inline-block font-sans bg-[#041031] text-white py-3 px-6 rounded-full font-medium hover:bg-[#1E2A93] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Veja nossos trabalhos
        </motion.a>
      </div>
    </section>
  );
}

export default About;
