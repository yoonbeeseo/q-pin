import React from "react"
import styles from "./section.css"

export interface SectionProps extends React.PropsWithChildren {
  title: string
  desc: string
}
export default function Section({ title, children, desc }: SectionProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.sub}>{children}</p>
      <p className={styles.desc}>{desc} </p>
    </div>
  )
}
