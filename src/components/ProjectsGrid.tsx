import React from "react";
/* lay out cards uniformly */
type ProjectsGridProps = {
  children: React.ReactNode;
};

export function ProjectsGrid({ children }: ProjectsGridProps) {
  return <div className="projects-grid">{children}</div>;
}
