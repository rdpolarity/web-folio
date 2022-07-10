import Max from "@components/Max/Max";
import { Col, Row } from "antd";
import styles from './Container.module.scss'

const Container = ({children} : any) => {
  return <Max className={styles.container} gutter={100}>
    {children}
  </Max>
}

export default Container;