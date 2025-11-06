import { ArrowUpRight, CornerDownRight } from "lucide-react"
import { ProjectDetail } from "@/components/ui/project-detail"

export interface Skill {
    id: number
    icon: string
    title: string
}

export interface Project {
    id: number
    imageUrl: string
    title: string
    description: string
    status: 'PENDING' | 'COMPLETED'
    urlAccess: string
    repository: string[]
    stacks: string[]
    functionalities: string[]
}

const skills: Skill[] = [
    {
        id: 1,
        icon: '/GitHub.png',
        title: 'GitHub'
    },
    {
        id: 2,
        icon: '/docker.png',
        title: 'Docker'
    },
    {
        id: 3,
        icon: '/React.png',
        title: 'React'
    },
    {
        id: 4,
        icon: '/Node.js.png',
        title: 'NodeJs'
    },
    {
        id: 5,
        icon: '/typescript.png',
        title: 'Typescript'
    },
    {
        id: 6,
        icon: '/js.png',
        title: 'Javascript'
    },
    {
        id: 7,
        icon: '/mysql.png',
        title: 'MYSQL'
    }
]

const projects: Project[] = [
    {
        id: 1,
        imageUrl: '/sicor.png',
        title: 'SICOR',
        description: 'Sistema Informativo de Controle de Rios, um sistema inteligente desenvolvido com integração GraphQL para monitoramento contínuo e em tempo real de níveis fluviais. O sistema oferece visualizações dinâmicas, análise de dados ambientais.',
        status: 'COMPLETED',
        urlAccess: 'https://sicor-three.vercel.app/',
        repository: ['https://github.com/gefersonholdorf/frontend_sicor'],
        stacks: ['ReactJs', 'TailwindCSS', 'GraphQL', 'Typescript', 'Vite'],
        functionalities: [
            '📡 Integração com API pública da Defesa Civil via GraphQL.',
            '⚡ Atualização em tempo real dos dados dos níveis dos rios.',
            '📊 Visualização interativa com mapas e indicadores atualizados.',
            '🖼️ Interface moderna com uso de Tailwind CSS.',
            '🚀 Performance otimizada com Vite e React Query.',
            '📚 Código modular e escalável, pronto para evoluir.'
        ]
    },
    {
        id: 2,
        imageUrl: '/querywisehub-1.png',
        title: 'QueryWiseHub',
        description: 'Plataforma inteligente de gestão do conhecimento, integrada à EvolutionAPI para recepção e tratamento automatizado de mensagens. Utiliza OpenAI e arquitetura RAG (Retrieval-Augmented Generation) para identificar dúvidas recorrentes e sugerir respostas precisas aos clientes, aprimorando o suporte e a eficiência operacional.',
        status: 'PENDING',
        urlAccess: 'Ainda não possui.',
        repository: ['https://github.com/gefersonholdorf/query-wise-hub-frontend', 'https://github.com/gefersonholdorf/query-wise-hub-backend'],
        stacks: ['ReactJs', 'NodeJs', 'TailwindCSS', 'Typescript', 'Vite', 'Fastify', 'Swagger', 'APIREST', 'MYSQL', 'QDRANT', 'IA', 'DOCKER'],
        functionalities: ['Em breve...']
    }
]

export function HomePage() {
    return (
        <div className="w-full min-h-screen bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat flex items-start justify-center">
            <main className="lg:w-3/5 flex my-8 flex-col justify-center items-center backdrop-blur-sm p-8 space-y-4 rounded-xl border border-gray-700">
                <div className="relative p-2 inline-flex items-center justify-center">
                    <div className="rounded-full h-28 w-28 border-4 border-transparent outline-3 outline-sky-600 overflow-hidden shadow-lg">
                        <img
                            className="object-cover w-full h-full"
                            src="https://avatars.githubusercontent.com/u/68699314?v=4"
                            alt="Logo"
                        />
                    </div>

                    <img
                        className="absolute bottom-2 right-1 h-10 w-10 "
                        src="/desenvolvedor.png"
                        alt="Ícone de desenvolvedor"
                    />
                </div>

                <p className="text-lg font-medium text-white">
                    Olá! Meu nome é <span className="text-sky-400 font-semibold">Geferson Holdorf</span> e sou
                </p>
                <h1 className="text-5xl font-bold text-sky-400 drop-shadow-lg">
                    Desenvolvedor FullStack
                </h1>
                <p className="text-lm text-gray-400 text-center lg:w-4/6">Acredito que tecnologia deve simplificar o complexo. Transformo ideias e problemas em sistemas inteligentes e automatizados, unindo performance e criatividade para entregar resultados que realmente fazem diferença.</p>

                <div className="flex flex-wrap justify-center items-center gap-4 text-white text-lm mt-10">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items gap-2 bg-gray-700/50 p-2 px-4 rounded-2xl">
                            <img src={skill.icon} alt="" />
                            {skill.title}
                        </div>
                    ))}

                </div>
                <div className="mt-40">
                    <img src="/arrow-bottom.png" alt="" />
                </div>
                <div className="mt-40 space-y-60">
                    <section>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-lg text-sky-400 font-bold">Meu trabalho</h2>
                            <h3 className="text-2xl text-white font-bold">Veja os projetos em destaque</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                            {projects.map((project) => (
                                <div key={project.id} className="w-full flex flex-col justify-center items-center gap-4 rounded-lg bg-gray-800/90 p-4 transition-all duration-800 transform hover:scale-102 hover:shadow-[0_0_18px_-5px_rgb(56,189,248)]">
                                    <div className="relative">
                                        <img className="h-40 w-90 rounded-lg object-cover object-center" src={project.imageUrl} alt="Sistema Imagem" />
                                        <span className={`absolute left-0 bottom-0 px-2 rounded-r-sm text-[.8rem] font-semibold text-gray-700 ${project.status === 'PENDING' ? 'bg-amber-400' : 'bg-emerald-400'}`}>{project.status === 'PENDING' ? 'EM ANDAMENTO' : 'CONCLUÍDO'}</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                        <p className="text-gray-400 text-sm">{project.description}</p>
                                    </div>
                                    <ProjectDetail project={project}>
                                        <span className="text-sm text-gray-300 underline cursor-pointer flex items-center gap-2 hover:text-sky-400"><CornerDownRight className="size-4" />Ver detalhes</span>
                                    </ProjectDetail>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-lg text-sky-400 font-bold">Contato</h2>
                            <h3 className="text-lm text-gray-400">Entre em contato ou acompanhe as minhas redes sociais</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 justify-center items-center w-full lg:w-2/3 mt-10">
                            <div className="flex justify-between items-center gap-4 rounded-lg bg-gray-700/50 p-6">
                                <div className="flex items-center justify-center gap-4">
                                    <img src="/linkedin.png" alt="Logo Linkedin" />
                                    <p className="text-lg text-gray-300">Linkedin</p>
                                </div>
                                <a href="https://www.linkedin.com/in/geferson-holdorf-601819202/">
                                    <ArrowUpRight className="text-sky-400" />
                                </a>
                            </div>
                            <div className="flex justify-between items-center gap-4 rounded-lg bg-gray-700/50 p-6">
                                <div className="flex items-center justify-center gap-4">
                                    <img src="/instagram.png" alt="Logo Linkedin" />
                                    <p className="text-lg text-gray-300">Instagram</p>
                                </div>
                                <a href="https://www.instagram.com/geferson_holdorf/">
                                    <ArrowUpRight className="text-sky-400" />
                                </a>
                            </div>
                            <div className="flex justify-between items-center gap-4 rounded-lg bg-gray-700/50 p-6">
                                <div className="flex items-center justify-center gap-4">
                                    <img src="/GithubLogo.png" alt="Logo Linkedin" />
                                    <p className="text-lg text-gray-300">GitHub</p>
                                </div>
                                <a href="https://github.com/gefersonholdorf">
                                    <ArrowUpRight className="text-sky-400" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </div >
    )
}