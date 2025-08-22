import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`project-section ${className ?? ""}`}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="sectionContent">{children}</div>
    </section>
  );
}
