import React from "react"
import { PiSpinnerBold } from "react-icons/pi"
import styles from "./spinner.css"

interface Props<T = string> {
  title?: T
  style?: {
    container?: T
    spinner?: T
    title?: T
  }
}
export default function Spinner({ title, style }: Props) {
  return (
    <div className={`${styles.container} ${style?.container}`}>
      <PiSpinnerBold className={`${styles.spinner} ${style?.spinner}`} />
      <p className={`${styles.title} ${style?.title}`}>{title ?? "Loading..."}</p>
    </div>
  )
}
