import { keyframes, style } from "@vanilla-extract/css"

const animation = keyframes({
  "0%": {},
  "100%": {
    transform: "rotate(1080deg)",
  },
})

const blink = keyframes({
  "0%": {
    opacity: 1,
  },
  "25%": {
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "75%": {
    opacity: 0,
  },
})
export default {
  container: style({ height: "100vh", justifyContent: "center", alignItems: "center", rowGap: 20 }),
  spinner: style({
    fontSize: 40,
    animation: `${animation} 10s infinite`,
    color: "royalblue",
  }),
  title: style({
    animation: `${blink} 4s infinite`,
  }),
}
