import { Alert, Select, Spin, Tag, TagProps, Typography } from 'antd'
import Project from '@components/Project/Project'
import React from 'react'
import styles from './Projects.module.scss'
import api from '@api/api'
import { SearchOutlined } from '@ant-design/icons'
import { Tag as TagType } from '@api/generated/api'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

const Projects = () => {
  const { data, isLoading, isError, error } = api.useProjectsQuery()
  const { data: tags, isLoading: isLoadingTags, isError: isErrorTags, error: errorTags } = api.useTagsQuery()

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

  const customTag = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return React.cloneElement(label as any, {
      onMouseDown: onPreventMouseDown,
      closable: closable,
      onClose: onClose,
      className: styles.tag,
    });
  }

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
          tagRender={customTag}
          style={{ width: '100%' }}
          size='large'
          suffixIcon={<SearchOutlined />}
          placeholder="Filter Projects"
          onChange={() => { }}
        >
          {tags?.tags?.data.map((tag, index) => (<Select.Option key={index} value={tag.attributes?.name}><Tag color={tag.attributes?.colour ?? 'default'}>{tag.attributes?.name}</Tag></Select.Option>))}
        </Select>
      </div>
      <div className={styles.projects}>
        {projects}
      </div>
    </div>
  )
}

export default Projects