"use client"
import React, { useCallback } from "react"
import styles from "./header.css"
import { menuReducer, selectIsMenuActive, useAppDispatch, useAppSelector } from "@/redux"
import { RiMenuFill, RiMenu4Line } from "react-icons/ri"

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
        <button className={styles.logo}>Q-Pin</button>
      </div>
    </header>
  )
}
