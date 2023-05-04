import { CvQuery } from "@api/generated/api";
import Container from "@components/Container/Container";
import React from "react";
import Header from "./Header";
import Expertise from "./Expertise";
import Section from "./Section";
import styles from "./styles.module.scss";
import { StructuredText } from "react-datocms/structured-text";

export default function CVPage({ data }: { data: CvQuery }) {
  const downloadHandler = () => {
    var pageUrl = encodeURIComponent(window.location.href);
    var opts = ["save-link=" + pageUrl, "pageOrientation=auto"];
    window.open("https://www.sejda.com/html-to-pdf?" + opts.join("&"));
  };

  const sections = data.cv?.sections?.map((section, index) => (
    <Section key={index} title={section.title}>
      {section?.expertises?.map((expertise, index) => (
        <Expertise
          key={index}
          title={expertise.title}
          subtitle={expertise.subtitle}
          tags={expertise.tags.map((tag) => tag.name as string)}
          icon={expertise.icon?.url}
          progress={expertise.progress}
        >
          <StructuredText data={expertise.description as any}/>
        </Expertise>
      ))}
    </Section>
  ));

  return (
    <Container style={{ padding: 50 }}>
      <a className={styles.download} onClick={downloadHandler}>
        Download PDF
      </a>
      <Header
        title={data.cv?.name}
        subtitle={data.cv?.title}
        email={data.cv?.email}
        number={data.cv?.phone}
        linkedIn={data.cv?.linkedin}
        location={data.cv?.location}
        website={data.cv?.website}
        profile={data.cv?.picture?.url}
      />
      <div className={styles.line}>
        {sections}
        <div className={styles.lineDot} />
      </div>
    </Container>
  );
}
