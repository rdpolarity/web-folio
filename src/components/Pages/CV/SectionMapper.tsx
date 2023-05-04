import { CvQuery } from "@api/generated/api";
import React from "react";
import Expertise from "./Expertise";
import Section from "./Section";
import styles from "./styles.module.scss";

export default function SectionMapper({ cv }: { cv: CvQuery }) {
  const content = cv.cv?.data?.attributes?.Content?.map((section, index) => {
    switch (section?.__typename) {
      case "ComponentComponentsTitle":
        return <Section key={index}>{section?.text}</Section>;
      case "ComponentComponentsSection":
        const tags = section?.Tags?.data.map(
          (tag) => tag?.attributes?.name
        ) as any;
        return (
          <Expertise
            key={index}
            title={section?.Title}
            subtitle={section?.Subtitle}
            tags={tags}
            icon={section?.Icon?.data?.attributes?.url}
            progress={section?.Progress}
          >
            {section?.Description}
          </Expertise>
        );
        break;
      default:
        break;
    }
  });
  return <div className={styles.sectionContainer}>{content}</div>;
}
