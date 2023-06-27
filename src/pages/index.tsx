import { ProjectsDocument, ProjectsQuery } from "@api/generated/api";
import Home from "@components/Pages/Home/Home";
import { GetStaticProps, NextPage } from "next";
import { request } from "utility/request";

type HomePageProps = { result: ProjectsQuery };

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const result = await request(ProjectsDocument);
  return {
    props: { result },
  };
};

const Index: NextPage<HomePageProps> = ({ result }) => {
  return <Home data={result} />;
};
export default Index;
