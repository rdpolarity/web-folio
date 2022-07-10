import { ReactNode } from 'react'
import styles from './Max.module.scss'

export interface MaxProps {
  children?: ReactNode
  width?: number
  className?: string
  gutter?: number
}

/**
 * Fills a specified max width
 * @param width the max-height, default 100px
 * @param className override style name
 * @param gutter left and right margin
 * @returns 
 */
 const Max = ({ children, width = 1000, className, gutter }: MaxProps) => {
  return <div className={styles.max} style={{ margin: `0 ${gutter}px` }}>
    <div style={{ flexBasis: width }} className={className}>
      {children}
    </div>
  </div>;
};

export default Max;