import { style } from "@vanilla-extract/css"

export default {
  container: style({
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  }),
  wrap: style({
    flex: 1,
    overflowY: "auto",
  }),
}
