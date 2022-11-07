import { CvQuery } from "@api/generated/api";
import React from "react";
import Section from "./Section";
import Title from "./Title";

export default function SectionMapper({ cv }: { cv: CvQuery }) {
  console.log(cv);
  const content = cv.cv?.data?.attributes?.Content?.map((section, index) => {
    switch (section?.__typename) {
      case "ComponentComponentsTitle":
        return <Title key={index}>{section?.text}</Title>;
        break;
      case "ComponentComponentsSection":
        return (
          <Section key={index}
            title={section?.Title}
            subtitle={section?.Subtitle}
            tags={section?.Tags?.data.map((tag) => tag?.attributes?.name) as any}
            icon={section?.Icon?.data?.attributes?.url}
            progress={section?.Progress}
          >
            {section?.Description}
          </Section>
        );
        break;
      default:
        break;
    }
  });
  return <>{content}</>;
}
