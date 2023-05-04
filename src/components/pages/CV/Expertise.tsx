"use client";

import styles from "./styles.module.scss";
import Tab from "./Tab";
import { Badge, Progress, Text } from "@nextui-org/react";

interface ExpertiseProps {
  children: any;
  icon?: string | null;
  title?: string | null;
  subtitle?: string | null;
  tags?: string[] | null;
  progress?: number | null;
  color?: string | null;
}

const Expertise = ({
  children,
  icon,
  title,
  subtitle,
  tags,
  progress,
}: ExpertiseProps) => {
  const renderedTags = tags?.map((tag: string) => (
    <Badge key={tag} color="primary" disableOutline>
      {tag}
    </Badge>
  ));
  return (
    <div>
      <div className={styles.section}>
        <Tab width={7} height={30} />
        <div
          className={styles.sectionIcon}
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: "contain",
          }}
        />
        <div className={styles.sectionContent}>
          <h2 className="text-xl text-primary">{title}</h2>
          <h3 className="-mt-4 text-gray-400">{subtitle}</h3>
          {progress ||
            (progress !== 0 && (
              <Progress color="primary" value={progress ?? 0} />
            ))}
          {children}
          <div className={styles.sectionContentTags}>
            {tags && renderedTags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
