import React from "react"
import styles from "./section.css"
import { text } from "@/styles"

export interface SectionProps extends React.PropsWithChildren {
  title: string
  desc?: string
}

interface Props extends SectionProps {
  white?: boolean
}
export default function Section({ title, children, desc, white }: Props) {
  return (
    <div className={styles.container({ white })}>
      <p className={text.title}>{title}</p>
      <p className={text.sub}>{children}</p>
      {desc && <p className={text.desc}>{desc} </p>}
    </div>
  )
}
