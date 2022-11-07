"use client";

import styles from "./styles.module.scss";
import Tab from "./Tab";
import { Badge, Progress, Text } from "@nextui-org/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  icon?: string | null;
  title?: string | null;
  subtitle?: string | null;
  tags?: string[] | null;
  progress?: number | null;
  color?: string | null;
}

const Section = ({ children, icon, title, subtitle, tags, progress }: SectionProps) => (
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
        <Text h2 css={{ m: 0 }}>
          {title}
        </Text>
        <Text h3 css={{ m: 0, mt: -10 }} color="grey">
          {subtitle}
        </Text>
        {progress || progress !== 0 && <Progress color="primary" value={progress ?? 0} />}
        {children}
        <div className={styles.sectionContentTags}>
          {tags?.map((tag: string) => (
            <Badge key={tag} color="primary" disableOutline>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Section