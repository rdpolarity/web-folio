import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { ReactNode, useEffect } from 'react'
import Edit from './Edit/Edit';

interface LayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Content>
        {children}
      </Content>
      <Edit />
    </div>
  )
}

export default AppLayout;
