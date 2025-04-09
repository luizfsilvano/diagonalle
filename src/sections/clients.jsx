import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Caixa from "../assets/clientes/caixa.svg";
import Sebrae from "../assets/clientes/sebrae.svg";
import Sesi from "../assets/clientes/sesi.svg";
import Senai from "../assets/clientes/senai.svg";
import Govbr from "../assets/clientes/govbr.svg";
import Govdf from "../assets/clientes/govdf.svg";
import Sabin from "../assets/clientes/sabin.svg";

const clients = [
  { src: Caixa, alt: "Caixa" },
  { src: Sebrae, alt: "Sebrae" },
  { src: Sesi, alt: "Sesi" },
  { src: Senai, alt: "Senai" },
  { src: Govbr, alt: "Governo Federal" },
  { src: Govdf, alt: "Governo do DF" },
  { src: Sabin, alt: "Sabin" },
];

function ClientsCarousel() {
  return (
    <section
      id="clientes"
      className="relative max-h-10 bg-[#FFFFF] text-white flex items-center justify-center px-6 py-20"
    >
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-6xl min-h-[10rem] mt-20"
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center transition-transform"
          >
            <div className="bg-white rounded-xl shadow-lg p-2 w-[14rem] h-[9rem] flex items-center justify-center transition">
              <img
                src={client.src}
                alt={client.alt}
                className="h-16 object-contain select-none"
                loading="lazy"
                draggable={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ClientsCarousel;
