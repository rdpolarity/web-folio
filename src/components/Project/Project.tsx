import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

const Project = () => {
  return (
    <Card
      hoverable
      cover={<div>deez</div>}
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  )
}

export default Project