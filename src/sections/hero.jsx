import logo from '../assets/logo.svg';
import FadeIn from '../components/FadeIn';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 text-center overflow-hidden">


      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <FadeIn delay={0}>
          <img src={logo} alt="Diagonalle Logo" className="w-[300px] md:w-[900px] mb-10 drop-shadow-lg" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Onde a criatividade encontra a magia
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl mb-8 opacity-80">
            Somos especialistas em banners, motion graphics e soluções publicitárias que encantam e convertem.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#portfolio" className="bg-white text-purple-900 font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition">
              Ver Portfólio
            </a>
            <a href="#contato" className="border border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-purple-900 transition">
              Entrar em Contato
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
