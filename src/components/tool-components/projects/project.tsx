import { useTranslation } from "react-i18next";
import { projects } from "../../../utils/projects";
import "./index.css";
import { useState } from "react";

export const ProjectTool = ({ project }: { project: typeof projects }) => {
  const { t } = useTranslation();

  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  return (
    <>
      {project.map((project) => {
        const isVisible = visibleProjects.includes(project.name);
        return (
          <div className="project-tool" key={project.name}>
            <h2 className="project-tool__title">{t(project.name)}</h2>
            <div
              className={`project-tool__info ${
                !isVisible ? "project-tool__hidden" : ""
              }`}
            >
              <p className="project-tool__description">{t(project.text)}</p>
            </div>
            <a
              onClick={() => {
                if (isVisible) {
                  setVisibleProjects(
                    visibleProjects.filter((item) => item !== project.name)
                  );
                } else {
                  setVisibleProjects([...visibleProjects, project.name]);
                }
              }}
              target="_blank"
              className="project-tool__link"
            >
              {isVisible ? t("HIDE") : t("LEARN-MORE")}
            </a>
          </div>
        );
      })}
    </>
  );
};
