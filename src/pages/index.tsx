import { ProjectEntity, ProjectsDocument, ProjectsQuery, ProjectsQueryVariables } from "@api/generated/api";
import Home from "@components/Pages/Home/Home";
import fetcher from "utility/fetcher";

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
