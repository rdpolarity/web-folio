import { Space, Typography } from 'antd'
import Project from '@components/Project/Project'
import React from 'react'
import styles from './Projects.module.scss'
const Projects = () => {
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