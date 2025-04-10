import { motion } from "framer-motion";
import SesiRobotica from "../assets/sesi-robotica.mp4";
import SesiMatriculas from "../assets/Sesi-matriculas.mp4";
import SenaiBestWeek from "../assets/senai-best-week.mp4";
import SebraeConsultoria from "../assets/sebrae-consultoria.mp4";
import SebraeAppNovaAssinatura from "../assets/sebrae-app-nova-assinatura.mp4";
import CaixaTem from "../assets/caixa-tem.mp4";
import { Sparkles } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "CAIXA Tem",
      image: CaixaTem,
      description:
        "O App CAIXA Tem, com serviços bancários e acesso a benefícios sociais.",
      link: "https://www.youtube.com/watch?v=8W0viyiXXWg",
    },
    {
      title: "SESI Robótica",
      image: SesiRobotica,
      description:
        "Torneios SESI de Robótica, focados em novas formas de energia sustentável, com competições para estudantes de 9 a 18 anos.",
      link: "https://www.youtube.com/watch?v=7ACB_4nHpOA",
    },
    {
      title: "SESI Matrículas 2023",
      image: SesiMatriculas,
      description:
        "Novas matrículas na Rede SESI de Educação, com descontos na mensalidade.",
      link: "https://www.youtube.com/watch?v=HGI6Nf3hyAg",
    },
    {
      title: "Senai Best Week",
      image: SenaiBestWeek,
      description:
        "Best Week do SENAI, com descontos em cursos técnicos e profissionalizantes.",
      link: "https://www.youtube.com/watch?v=jxzDu5nqvFY",
    },
    {
      title: "Sebrae Consultoria",
      image: SebraeConsultoria,
      description:
        "Serviços de consultoria do Sebrae voltados para pequenos negócios.",
      link: "https://www.youtube.com/watch?v=ilRyMyUiAxo",
    },
    {
      title: "Sebrae APP - Nova assinatura",
      image: SebraeAppNovaAssinatura,
      description:
        "Novo app do Sebrae, com ferramentas para gestão e capacitação.",
      link: "https://www.youtube.com/watch?v=c_s2FiDXudg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#041031] to-[#041031] text-[#0101010] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center content-center">
        <h2 className="font-title text-3xl md:text-5xl font-bold mb-10 text-white">
          TRABALHOS
        </h2>
        {/* <p className="text-[#7B818C] font-sans md:text-xl opacity-100 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition block h-72"
            >
              {/* 🎥 Vídeo como fundo */}
              <video
                src={project.image}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* 🔳 Camada de conteúdo com blur */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white p-4 z-10 min-h-[120px] flex flex-col gap-1">
                <h3 className="font-title text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Overlay opcional para escurecer o vídeo */}
              <div className="absolute inset-0 bg-black/10 z-0 group-hover:bg-black/20 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
