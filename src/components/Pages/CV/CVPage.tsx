import { CvQuery } from "@api/generated/api";
import Container from "@components/Container/Container";
import React from "react";
import Header from "./Header";
import SectionMapper from "./SectionMapper";
import styles from "./styles.module.scss";

export default function CVPage({ cv }: { cv: CvQuery }) {

  const downloadHandler = () => {
    var pageUrl = encodeURIComponent(window.location.href);
    var opts = ["save-link=" + pageUrl, "pageOrientation=auto"];
    window.open("https://www.sejda.com/html-to-pdf?" + opts.join("&"));
  };

  return (
    <Container style={{ padding: 50 }}>
      <a className={styles.download} onClick={downloadHandler}>Download PDF</a>
      <Header cv={cv} />
      <div className={styles.line}>
        <SectionMapper cv={cv} />
        <div className={styles.lineDot} />
      </div>
    </Container>
  );
}
