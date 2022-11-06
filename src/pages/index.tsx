import api from "@api/api";
import { ProjectEntity, ProjectsDocument, ProjectsQuery, ProjectsQueryVariables } from "@api/generated/api";
import Home from "@components/pages/Home/Home";
import type { NextPage } from "next";

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://web-folio-cms.herokuapp.com/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}

export async function getStaticProps() {
  const res = await fetcher<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument)();
  return {
    props: {
      projects: res.projects?.data,
    },
  };
}

export interface ProjectsProps {
  projects: ProjectEntity[];
}

const Index = (props : ProjectsProps) => {
  return <Home projects={props.projects} />;
};
export default Index;
