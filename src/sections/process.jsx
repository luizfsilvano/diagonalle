// import { motion } from 'framer-motion';
// import { BookOpenCheck, Sparkles, Rocket } from 'lucide-react';

// function Process() {
//     const steps = [
//         {
//             icon: <BookOpenCheck size={40} />,
//             title: 'Imersão Mágica',
//             description: 'Descobrimos a essência da sua marca e seus objetivos para criar algo verdadeiramente único.',
//             delay: 0.1,
//         },
//         {
//             icon: <Sparkles size={40} />,
//             title: 'Criação Encantada',
//             description: 'Transformamos ideias em visuais, animações e experiências impactantes com técnica e criatividade.',
//             delay: 0.2,
//         },
//         {
//             icon: <Rocket size={40} />,
//             title: 'Lançamento com Precisão',
//             description: 'Ativamos campanhas com tecnologia, performance e inteligência publicitária.',
//             delay: 0.3,
//         },
//     ];

//     return (
//         <section id="processo" className="scroll-mt-20 bg-gradient-to-b from-[#1E1038] via-[#2E1C4F] to-[#0C0618] text-[#1E1038] py-20 px-6">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Como trabalhamos</h2>
//                 <p className="text-white md:text-xl opacity-80 mb-10">
//                     Nossa jornada criativa segue três etapas mágicas e estratégicas:
//                 </p>

//                 <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-center md:gap-10">
//                     {steps.map((step, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: step.delay }}
//                             viewport={{ once: true }}
//                             className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-md hover:shadow-purple-500/40 transition text-center"
//                         >
//                             <div className="mb-4 flex justify-center text-purple-700 hover:scale-110 transition-transform duration-300">{step.icon}</div>
//                             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                             <p className="text-sm opacity-80">{step.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//             <div className="mt-16 w-full flex flex-col items-center">
//                 <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6 text-center">
//                     Veja nossa magia em ação! ✨
//                 </h3>

//                 <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
//                     <iframe
//                         className="w-full h-full"
//                         src="https://www.youtube.com/embed/7ACB_4nHpOA"
//                         title="Diagonalle - Processo Criativo"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//             </div>

//         </section>
//     );
// }

// export default Process;
