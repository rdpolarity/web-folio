import Max from "@components/Max/Max";
import { Col, Row } from "antd";
import styles from './Container.module.scss'

const Container = ({children, style} : any) => {
  return <Max className={styles.container} style={style} gutter={16}>
    {children}
  </Max>
}

export default Container;