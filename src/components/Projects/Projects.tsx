import { Space, Spin, Typography } from 'antd'
import Project from '@components/Project/Project'
import React from 'react'
import styles from './Projects.module.scss'
import api from '@api/api'

const Projects = () => {
  const { data, isLoading, isError, error } = api.useProjectsQuery()

  if (isLoading) return <Spin/>
  if (isError) return <div>{error as any}</div>

  return (
    <div>
      <Typography.Title level={1}>Projects</Typography.Title>
      <Space size={[8, 8]} wrap>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </Space>
    </div>
  )
}

export default Projects