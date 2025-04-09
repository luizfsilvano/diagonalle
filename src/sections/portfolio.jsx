import { motion } from "framer-motion";
import SesiRobotica from "../assets/gif-torneio-sesi-robotica.gif";
import { Sparkles } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "SESI Robótica",
      image: SesiRobotica,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.youtube.com/watch?v=7ACB_4nHpOA",
    },
    {
      title: "SESI Matrículas 2023",
      image: "/assets/portfolio/sesi-matriculas.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Senai Best Week",
      image: "/assets/portfolio/senai-bestweek.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Sebrae Consultoria",
      image: "/assets/portfolio/sebrae-consultoria.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Sebrae APP - Nova assinatura",
      image: "/assets/portfolio/sebrae-app-nova.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "CAIXA Tem",
      image: "/assets/portfolio/caixa-tem.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sed ut perspiciatis unde omnis iste
        </h2>
        <p className="text-[#7B818C] md:text-xl opacity-100 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

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
              className="bg-[#F8F5F2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover select-none"
                loading="lazy"
                draggable="false"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
