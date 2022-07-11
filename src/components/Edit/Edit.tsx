import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import styles from './Edit.module.scss'

const Edit = () => {
  return (
    <div className={styles.edit}>
      <Button shape='circle' type='link' icon={<UserOutlined />} target="_blank" href={`${process.env.NEXT_PUBLIC_ENDPOINT}/admin`}/>
    </div>
  )
}

export default Edit