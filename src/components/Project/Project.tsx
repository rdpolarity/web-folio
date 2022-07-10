import { ComponentComponentsTag } from '@api/generated/api'
import { Card, Tag } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Image from 'next/image'
import React from 'react'
import styles from './Project.module.scss'

interface ProjectProps {
  title?: string | null,
  thumbnail?: string,
  tags?: ComponentComponentsTag[],
}

const Project = (props : ProjectProps) => {
  const thumbnail = <div className={styles.projectCover}>
    <img src={`${process.env.NEXT_PUBLIC_ENDPOINT ?? ''}${props.thumbnail}`} alt={props.title ?? ''}/>
  </div>

  return (
    <Card
      hoverable
      bordered
      title={props.title}
      cover={thumbnail}
      className={styles.project}
    >
      {props.tags?.map((tag, index) => (<Tag key={index} color={tag.colour ?? 'default'}>{tag.name} {tag.colour ?? 'none'}</Tag>))}
    </Card>
  )
}

export default Project