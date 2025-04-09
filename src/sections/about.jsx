// import Gif1 from "../assets/gif-senai-blackweek.gif";
// import Gif2 from "../assets/gif-desconto-cursos.gif";
// import Gif3 from "../assets/gif-tecnologia.gif";
// import { motion } from "framer-motion";

// function about() {
//   return (
//     <section
//       id="sobre"
//       className="scroll-mt-20 bg-[#EAE6F2] text-[#1E1038] py-20 px-6 text-center"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-5xl font-bold mb-10">Quem Somos</h2>

//         <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-12">
//           Somos uma empresa criativa que une magia e estratégia para dar vida à
//           sua comunicação visual. Com criatividade afiada e domínio técnico,
//           transformamos ideias em experiências que encantam.
//         </p>

//         {/* <hr className="my-12 border-t-2 border-purple-300 w-24 mx-auto rounded-full" /> */}

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
//               <img
//                 src={Gif1}
//                 alt="Criatividade"
//                 className="w-100 h-100 mx-auto mb-4"
//                 loading="lazy"
//               />
//               <h3 className="text-xl font-semibold mb-2">
//                 Criatividade Encantadora
//               </h3>
//               <p className="text-sm opacity-80">
//                 Do conceito ao visual final, criamos com originalidade e
//                 propósito.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
//               <img
//                 src={Gif2}
//                 alt="Motion"
//                 className="w-100 h-100 mx-auto mb-4"
//                 loading="lazy"
//               />
//               <h3 className="text-xl font-semibold mb-2">Motion com Magia</h3>
//               <p className="text-sm opacity-80">
//                 Vídeos e animações que encantam, explicam e convertem.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
//               <img
//                 src={Gif3}
//                 alt="Tecnologia"
//                 className="w-100 h-100 mx-auto mb-4"
//                 loading="lazy"
//               />
//               <h3 className="text-xl font-semibold mb-2">
//                 Tecnologia Inteligente
//               </h3>
//               <p className="text-sm opacity-80">
//                 Adservers e mídia programática para performance real.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1 }}
//           viewport={{ once: true }}
//         >
//           <a
//             href="#processo"
//             className="inline-block mt-5 bg-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:scale-105 transition"
//           >
//             Descubra como trabalhamos
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// export default about;
