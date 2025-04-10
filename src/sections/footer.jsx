import { Instagram, Mail } from "lucide-react";
import Caixa from "../assets/clientes/caixa.svg";
import Sebrae from "../assets/clientes/sebrae.svg";
import Sesi from "../assets/clientes/sesi.svg";
import Senai from "../assets/clientes/senai.svg";
import Govbr from "../assets/clientes/govbr.svg";
import Govdf from "../assets/clientes/govdf.svg";
import Sabin from "../assets/clientes/sabin.svg";

const clients = [Caixa, Sebrae, Sesi, Senai, Govbr, Govdf, Sabin];

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Topo: infos e links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Informações da empresa */}
          <div>
            <h4 className="text-xl font-bold">Diagonalle</h4>
            <p className="text-sm opacity-70">
              Porque aqui, nós fazemos mágica!
            </p>
            <p className="text-xs mt-2 opacity-50">
              © {new Date().getFullYear()} Diagonalle. Todos os direitos
              reservados.
            </p>
          </div>

          {/* Links sociais
          <div className="flex md:flex-row flex-nowrap items-center gap-3 text-purple-300 text-sm md:text-base">
            <a
              href="https://instagram.com/seuPerfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="mailto:contato@diagonalle.com"
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Mail size={18} /> E-mail
            </a>
          </div> */}
        </div>

        {/* Logos dos clientes */}
        <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
          {clients.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 text-white fill-current"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
