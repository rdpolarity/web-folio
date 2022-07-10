import { Spin, Typography } from 'antd'
import Project from '@components/Project/Project'
import React from 'react'
import styles from './Projects.module.scss'
import api from '@api/api'

const Projects = () => {
  const { data, isLoading, isError, error } = api.useProjectsQuery()

  if (isLoading) return <Spin />
  if (isError) return <div>{error as any}</div>

  const projects = data?.projects?.data.map((project, index) => {
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
      <Typography.Title level={1}>Projects</Typography.Title>
      <div className={styles.projects}>
        {projects}
      </div>
    </div>
  )
}

export default Projects