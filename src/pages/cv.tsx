import { CvQuery, CvQueryVariables, CvDocument } from "@api/generated/api";
import CVPage from "@components/Pages/CV/CVPage";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { request } from "utility/request";

type cvPageProps = { result: CvQuery}

export const getStaticProps: GetStaticProps<cvPageProps> = async (context) => {
  const result = await request(CvDocument);

  return {
    props: { result }
  }
}

const cv: NextPage<cvPageProps> = ({ result }) => {
  return <CVPage data={result}/>;
};

export default cv;