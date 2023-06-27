import { Card, Select } from "antd";
import Project from "@components/Project/Project";
import React from "react";
import styles from "./Projects.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { ProjectsQuery } from "@api/generated/api";
import Meta from "antd/lib/card/Meta";
import Tip from "@components/Tip/Tip";
import { globalStore } from "stores/GlobalStore";
import Link from "next/link";
import Button from "@components/Button/Button";

type AllProjects = ProjectsQuery["allProjects"];

const Projects = ({ data }: { data: ProjectsQuery }) => {

  const [filter, setFilter] = React.useState<string[] | undefined>(undefined);
  const [projectList, setProjectList] =
    React.useState<AllProjects>(data?.allProjects);
  const [filteredProjectList, setFilteredProjectList] =
    React.useState<AllProjects>();

  React.useEffect(() => {
    if (!filter || filter.length === 0) {
      setFilteredProjectList(projectList);
      return;
    }
    const filteredProjects = projectList?.filter((project) =>
      project.tags?.some((tag) => {
        return filter.some((filterTag) => {
          if (!tag.name) return false;
          return (
            filterTag.toLocaleLowerCase() ==
            tag.name.toLocaleLowerCase()
          );
        });
      })
    );
    setFilteredProjectList(filteredProjects);
  }, [filter, projectList]);

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
    const tags = project.tags;

    const imageName = project.thumbnail?.url
      .split("/")
      .pop();

    return (
      <Project
        key={index}
        title={project?.title}
        tags={tags.map((tag) => tag.name as string)}
        thumbnail={project?.thumbnail?.responsiveImage}
        github={project?.github}
        website={project?.link}
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
        <div style={{ display: "flex", gap: 10 }}>
          <Link href={"/cv"}>
            <Button intent={"gradient"}>Resume</Button>
          </Link>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/rdpolarity"
          >
            <Button intent={"outline"}>Github</Button>
          </a>
        </div>
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
          {data.allTags.map((tag, index) => (
            <Select.Option key={index} value={tag.name}>
              {tag.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className={styles.projects}>{filteredProjects}</div>
    </div>
  );
};

export default Projects;
