"use client"
import React, { useCallback } from "react"
import styles from "./header.css"
import { menuReducer, selectIsMenuActive, useAppDispatch, useAppSelector } from "@/redux"
import { RiMenuFill, RiMenu4Line } from "react-icons/ri"
import Logo from "../../Logo_L.png"
import Image from "next/image"

export default function Header() {
  const isMenuActive = useAppSelector(selectIsMenuActive)
  const dispatch = useAppDispatch()
  const handler = useCallback(() => {
    dispatch(menuReducer("toggle"))
  }, [])
  return (
    <header className={styles.container}>
      <div className={styles.wrap}>
        <button onClick={handler} className={styles.menu}>
          {isMenuActive ? <RiMenu4Line /> : <RiMenuFill />}
        </button>
        <button className={styles.logo}>
          <Image src={Logo} width={100} height={40} alt="Q-Pin Logo" className={styles.img} />
        </button>
      </div>
    </header>
  )
}
