import Image from 'next/image'
import React from 'react'
import styles from './Splash.module.scss'
import splash from '../../../public/splash.svg'
import splashMobile from '../../../public/splash-mobile.png'
import { Button } from 'antd'

const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.splashImage}>
        <Image src={splash} alt="Aiden Mellor"/>
      </div>
      <div className={styles.splashImageMobile}>
        <Image src={splashMobile} alt="Aiden Mellor"/>
      </div>
      {/* <Button size='large'>Resume</Button> */}
    </div>
  )
}

export default Splash