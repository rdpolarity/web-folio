import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import Image from 'next/image'

const Button = ({children, image, onClick} : { children?: ReactNode, image?: string, onClick?: React.MouseEventHandler}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {image && <Image src={image} width={20} height={20} alt="logo"/>}
      {children}
    </button>
  )
}

export default Button