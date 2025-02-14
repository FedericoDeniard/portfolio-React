import { tool, ToolSet } from "ai";
import { z } from "zod";
import { skills } from "../utils/skills";
import { projects } from "../utils/projects";
import en from "../i18n/en.json";
import es from "../i18n/es.json";

export const AiTools = {
    getSkills: tool({
        description: "Retrieves structured list of core technical competencies including programming languages, frameworks, and DevOps tools. Returns array formatted for technical recruiter analysis.",
        parameters: z.object({}),
        execute: async () => {
            const mySkills = skills.map((skill) => skill.name)
            return mySkills
        }
    }),
    getProjects: tool({
        description: "Fetches localized project portfolio with technical specifications, live demos URLs, and stack implementation details. Returns structured data optimized for recruitment workflows (includes i18n support for en/es).",
        parameters: z.object({ language: z.enum(["en", "es"]).describe("Localization target: English (en) for international tech terms, Spanish (es) for LATAM market contexts") }),
        execute: async ({ language }: { language: "en" | "es" }) => {
            let translation = language === "en" ? en : es
            const projectsTranslated = projects.map(project => ({
                name: translation[project.name as keyof typeof translation],
                link: project.link,
                text: translation[project.text as keyof typeof translation]
            }));
            return projectsTranslated
        }
    })
}

export type AiToolsType = typeof AiTools