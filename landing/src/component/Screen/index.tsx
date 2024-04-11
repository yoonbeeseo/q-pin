import React, { PropsWithChildren } from "react"
import { Footer, Header, Nav } from ".."
import styles from "./screen.css"

const Screen = ({ children }: PropsWithChildren) => {
  return <main className={styles.container}>{children}</main>
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Screen>
      <Header />
      <Nav />
      <div className={styles.wrap}> {children}</div>
      <Footer />
    </Screen>
  )
}

Screen.Layout = Layout
Screen.Header = Header
Screen.Nav = Nav
Screen.Footer = Footer

export { Screen, Layout }
