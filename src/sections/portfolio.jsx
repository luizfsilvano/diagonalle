import { motion } from 'framer-motion';
import SesiRobotica from '../assets/gif-torneio-sesi-robotica.gif';

function Portfolio() {
    const projects = [
        {
            title: 'SESI Robótica',
            image: SesiRobotica,
            description: 'Criação de materiais animados e banners digitais para evento educacional de tecnologia e robótica.',
            link: 'https://www.youtube.com/watch?v=7ACB_4nHpOA',
        },
        {
            title: 'SESI Matrículas 2023',
            image: '/assets/portfolio/sesi-matriculas.jpg',
            description: 'Campanha digital de matrículas com vídeos motion e artes de alta conversão.',
        },
        {
            title: 'Senai Best Week',
            image: '/assets/portfolio/senai-bestweek.jpg',
            description: 'Banners e vídeos promocionais com identidade vibrante e foco em ofertas relâmpago.',
        },
        {
            title: 'Sebrae Consultoria',
            image: '/assets/portfolio/sebrae-consultoria.jpg',
            description: 'Série de animações institucionais e infográficos em vídeo explicativo.',
        },
        {
            title: 'Sebrae APP - Nova assinatura',
            image: '/assets/portfolio/sebrae-app-nova.jpg',
            description: 'Vídeo institucional apresentando a nova experiência visual do app.',
        },
        {
            title: 'CAIXA Tem',
            image: '/assets/portfolio/caixa-tem.jpg',
            description: 'Projeto visual para campanha interna com animações claras e diretas.',
        },
    ];

    return (
        <section id="portfolio" className="bg-white text-[#1E1038] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Nosso Portfólio</h2>
                <p className="text-lg md:text-xl opacity-80 mb-10">
                    Conheça alguns dos projetos que misturam criatividade, técnica e magia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link || '#'}
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