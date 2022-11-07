import { CvQuery, CvQueryVariables, CvDocument } from "@api/generated/api";
import CVPage from "@components/pages/CV/CVPage";
import React from "react";
import fetcher from "utility/fetcher";

export async function getStaticProps() {
  const res = await fetcher<CvQuery, CvQueryVariables>(CvDocument)();
  return {
    props: {
      cv: res,
    }
  }
}

export default function cv({cv} : {cv: any}) {
  return <CVPage cv={cv}/>;
}
