import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { Project } from "@/pages/home"
import type { ReactNode } from "react"
import { Blocks, Cog, Link, ScanQrCode } from "lucide-react"
import { ScrollArea } from "./scroll-area"

export interface ProjectDetailProps {
    children: ReactNode
    project: Project
}

export function ProjectDetail({ children, project }: ProjectDetailProps) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className=" bg-gray-800 border-gray-600 text-white flex flex-col items-start justify-center space-y-4">
                    <ScrollArea className="h-150 w-full">
                        <div className="flex flex-col gap-8">
                            <DialogHeader>
                                <DialogTitle>Projeto - {project.title}</DialogTitle>
                                <DialogDescription className="text-gray-300">
                                    {project.description}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <ScanQrCode className="size-3" />
                                    <span className="text-sm">Acesso: </span>
                                </div>
                                <a href={project.urlAccess} className="text-sm font-bold">{project.urlAccess}</a>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <Link className="size-3" />
                                    <span className="text-sm">Repositório(s): </span>
                                </div>
                                {project.repository.map((repository, index) => (
                                    <a key={index} href={repository} className="text-sm font-bold">{repository}</a>
                                ))}
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <Blocks className="size-3" />
                                    <span className="text-sm">Stacks(s): </span>
                                </div>
                                <div className="flex items-start justify-start gap-2 flex-wrap">
                                    {project.stacks.map((stack, index) => (
                                        <span key={index} className="bg-gray-700 px-2 rounded-lg text-sm text-gray-300">{stack}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <Cog className="size-3" />
                                    <span className="text-sm">Funcionalidades: </span>
                                </div>
                                <div className="flex items-start justify-start gap-2 flex-wrap">
                                    {project.functionalities.map((functionality, index) => (
                                        <li key={index} className="rounded-lg text-sm text-gray-300">- {functionality}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </DialogContent>
            </form>
        </Dialog >
    )
}
