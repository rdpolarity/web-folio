import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import Image from 'next/image'

const Button = ({children, image} : { children?: ReactNode, image?: string}) => {
  return (
    <button className={styles.button}>
      {image && <Image src={image} width={20} height={20} alt="logo"/>}
      {children}
    </button>
  )
}

export default Button