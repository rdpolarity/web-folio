import { Alert, Avatar, Card, Select, Skeleton, Spin, Tag, TagProps, Typography } from 'antd'
import Project from '@components/Project/Project'
import React from 'react'
import styles from './Projects.module.scss'
import api from '@api/api'
import { SearchOutlined } from '@ant-design/icons'
import { ProjectEntity, ProjectsQuery, Tag as TagType } from '@api/generated/api'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import Meta from 'antd/lib/card/Meta'
import Fuse from 'fuse.js'

const Projects = () => {
  const { isLoading, isError, error } = api.useProjectsQuery({}, {
    onSuccess(data) {
      setProjectList(data?.projects?.data as ProjectEntity[])
    },
  })
  const { data: tags, isLoading: isLoadingTags, isError: isErrorTags, error: errorTags } = api.useTagsQuery()

  const [filter, setFilter] = React.useState<string[] | undefined>(undefined)
  const [projectList, setProjectList] = React.useState<ProjectEntity[]>()
  const [filteredProjectList, setFilteredProjectList] = React.useState<ProjectEntity[]>()

  React.useEffect(() => {
    if (!filter || filter.length === 0) {
      setFilteredProjectList(projectList)
      return
    }
    const filteredProjects = projectList?.filter((project) => project.attributes?.tags?.data.some((tag) => {
      return (filter.some((filterTag) => {
        return filterTag.toLocaleLowerCase() == tag.attributes?.name.toLocaleLowerCase()
      }));
    }));
    console.log(filteredProjects)
    
    setFilteredProjectList(filteredProjects);
  }, [filter, projectList])

  if (isError) return <div>{error as any}</div>

  const loadingCard = <Card style={{ width: 230, height: 300 }} loading>
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>

  const loadingProjects = <>
    {loadingCard}
    {loadingCard}
    {loadingCard}
    {loadingCard}
    {loadingCard}
    {loadingCard}
    {loadingCard}
    {loadingCard}
  </>;

  const projects = filteredProjectList?.map((project, index) => {
    const attributes = project.attributes;
    const tags = attributes?.tags?.data
    return <Project
      key={index}
      title={attributes?.name}
      tags={tags}
      thumbnail={attributes?.thumbnail?.data?.attributes?.url} />
  });

  return (
    <div>
      <div className={styles.alert}>
        <Alert type='info' showIcon message="Click on a tag to filter projects containing the selected tag" />
      </div>
      <div className={styles.filter}>
        <Select
          mode="multiple"
          showSearch
          showArrow
          style={{ width: '100%' }}
          size='large'
          placement='topLeft'
          suffixIcon={<SearchOutlined />}
          onChange={setFilter}
        >
          {tags?.tags?.data.map((tag, index) => (<Select.Option key={index} value={tag.attributes?.name}>{tag.attributes?.name}</Select.Option>))}
        </Select>
      </div>
      <div className={styles.projects}>
        {(!isLoading) ? projects : loadingProjects}
      </div>
    </div>
  )
}

export default Projects