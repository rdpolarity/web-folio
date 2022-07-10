import { ComponentComponentsTag, TagEntity } from '@api/generated/api'
import { Card, Tag } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Image from 'next/image'
import React from 'react'
import styles from './Project.module.scss'

interface ProjectProps {
  title?: string | null,
  thumbnail?: string,
  tags?: Array<TagEntity> | any,
}

const Project = (props : ProjectProps) => {
  const thumbnail = <div className={styles.projectCover}>
    <img src={`${props.thumbnail}`} alt={props.title ?? ''}/>
  </div>

  return (
    <Card
      hoverable
      bordered
      title={props.title}
      cover={thumbnail}
      className={styles.project}
    >
      <div className={styles.projectTags}>
        {props.tags?.map((tag : any, index : any) => (<Tag icon={<img className={styles.projectTagsIcon} src={tag.attributes?.icon?.data?.attributes?.url}/>} style={{margin: 0}} key={index} color={tag.attributes?.colour ?? 'default'}>{tag.attributes?.name}</Tag>))}
      </div>
    </Card>
  )
}

export default Project