import { CvQuery } from "@api/generated/api";
import Container from "@components/Container/Container";
import React from "react";
import Header from "./Header";
import SectionMapper from "./SectionMapper";
import styles from "./styles.module.scss";

export default function CVPage({ cv }: { cv: CvQuery }) {
  return (
    <Container style={{ padding: 50 }}>
      <Header cv={cv}/>
      <div className={styles.line}>
        <SectionMapper cv={cv} />
        <div style={{ height: 1000 }}></div>
      </div>
    </Container>
  );
}
