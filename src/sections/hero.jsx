import logo from "../assets/logo.svg";
import FadeIn from "../components/FadeIn";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#041031] via-[#041029] to-[#0D0D0D] text-white px-6 text-center overflow-hidden">
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <FadeIn delay={0}>
          <img
            src={logo}
            alt="Diagonalle Logo"
            className="w-[300px] mb-[2rem] md:w-[900px] mb-10 drop-shadow-lg"
          />
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#portfolio"
              className="bg-[#F2F2F2] font-sans text-[#0D0D0D] font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              className="border border-[#F2F2F2] font-sans text-[#F2F2F2] py-3 px-6 rounded-full hover:bg-[#F2F2F2] hover:text-[#0D0D0D] transition"
            >
              Contato
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
