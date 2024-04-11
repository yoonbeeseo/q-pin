"use client"
import React, { useCallback, useEffect, useMemo } from "react"
import styles from "./nav.css"
import { menuReducer, selectIsMenuActive, useAppDispatch, useAppSelector } from "@/redux"
import { usePathname, useRouter } from "next/navigation"
import { isMobile } from "react-device-detect"
import Logo from "../../Logo_L.png"
import Image from "next/image"

export default function Nav(props: any) {
  useEffect(() => {
    console.log(props)
  }, [])
  const isMenuActive = useAppSelector(selectIsMenuActive)
  const dispatch = useAppDispatch()
  const closeFn = useCallback(() => {
    dispatch(menuReducer("off"))
  }, [])

  const items = useMemo<MenuProps[]>(
    () => [
      { name: "About", path: "/" },
      { name: "QR생성", path: "/generateQR" },
    ],
    []
  )

  const pathname = usePathname()
  const router = useRouter()
  const Item = useCallback(
    ({ item: { name, path } }: { item: MenuProps }) => {
      const selected = pathname === path
      const onClick = () => {
        if (!selected) {
          return router.push(path)
        }
        console.log({ pathname })
      }
      return (
        <button onClick={onClick} className={styles.item({ selected, isWeb: !isMobile })}>
          {name}
        </button>
      )
    },
    [pathname, isMobile]
  )

  return (
    <nav className={styles.container({ isMenuActive })}>
      <div className={styles.wrap({ isMenuActive })}>
        <button className={styles.imgWrap}>
          <Image src={Logo} width={100} height={40} alt="Q-Pin Logo" className={styles.img} />
        </button>
        <div className={styles.line} />
        <div>
          {items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </div>
      </div>
      {isMenuActive && <button onClick={closeFn} className={styles.bg} />}
    </nav>
  )
}
