import { Card, Select } from "antd";
import Project from "@components/Project/Project";
import React from "react";
import styles from "./Projects.module.scss";
import api from "@api/api";
import { SearchOutlined } from "@ant-design/icons";
import github from "../../../public/github.svg";
import {
  ProjectEntity,
} from "@api/generated/api";
import Meta from "antd/lib/card/Meta";
import Tip from "@components/Tip/Tip";
import { globalStore } from "stores/GlobalStore";
import Button from "@components/Button/Button";
import { useRouter } from "next/router";
import { ProjectsProps } from "@pages/index";


const Projects = ({ projects }: ProjectsProps) => {
  const router = useRouter();
  const {
    data: tags,
    isLoading: isLoadingTags,
    isError: isErrorTags,
    error: errorTags,
  } = api.useTagsQuery();

  const [filter, setFilter] = React.useState<string[] | undefined>(undefined);
  const [projectList, setProjectList] = React.useState<ProjectEntity[]>(projects);
  const [filteredProjectList, setFilteredProjectList] =
    React.useState<ProjectEntity[]>();

  React.useEffect(() => {
    if (!filter || filter.length === 0) {
      setFilteredProjectList(projectList);
      return;
    }
    const filteredProjects = projectList?.filter((project) =>
      project.attributes?.tags?.data.some((tag) => {
        return filter.some((filterTag) => {
          return (
            filterTag.toLocaleLowerCase() ==
            tag.attributes?.name.toLocaleLowerCase()
          );
        });
      })
    );

    setFilteredProjectList(filteredProjects);
  }, [filter, projectList]);

  // if (isError) return <div>{error as any}</div>;

  const loadingCard = (
    <Card style={{ width: 230, height: 300 }} loading>
      <Meta title="Loading Card" description="This is loading placeholder" />
    </Card>
  );

  const loadingProjects = (
    <>
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
    </>
  );

  const filteredProjects = filteredProjectList?.map((project, index) => {
    const attributes = project.attributes;
    const tags = attributes?.tags?.data;
    return (
      <Project
        key={index}
        title={attributes?.name}
        tags={tags}
        thumbnail={attributes?.thumbnail?.data?.attributes?.url}
        github={attributes?.github}
        website={attributes?.link}
      />
    );
  });

  const onFilterHandler = (value: string[]) => {
    if (value) setFilter(value);
    globalStore.setIsMinecraft(value.includes("Minecraft"));
  };

  return (
    <div>
      <div className={styles.alert}>
        <Tip />
        <Button onClick={() => router.push("/cv")}>CV</Button>
        <Button
          onClick={() => router.push("https://github.com/rdpolarity")}
          image={github}
        />
      </div>
      <div className={styles.filter}>
        <Select
          mode="multiple"
          showSearch
          placeholder="Search for projects with tags"
          showArrow
          style={{ width: "100%" }}
          bordered={false}
          size="large"
          suffixIcon={<SearchOutlined />}
          onChange={onFilterHandler}
        >
          {tags?.tags?.data.map((tag, index) => (
            <Select.Option key={index} value={tag.attributes?.name}>
              {tag.attributes?.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className={styles.projects}>{filteredProjects}</div>
    </div>
  );
};

export default Projects;
