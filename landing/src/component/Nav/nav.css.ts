import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

export default {
  container: recipe({
    base: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      visibility: "hidden",
      opacity: 0,
      transition: "all .5s ease-out",
    },
    variants: {
      isMenuActive: {
        true: {
          opacity: 1,
          visibility: "visible",
        },
      },
    },
  }),
  wrap: recipe({
    base: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: 200,
      height: "100%",
      borderRight: "1px soild lightgray",
      position: "relative",
      zIndex: 1,
      transform: "translateX(-200px)",
      opacity: 0,
      transition: "all .2s ease-out",
    },
    variants: {
      isMenuActive: {
        true: {
          transform: "translateX(0)",
          transition: "all .5s ease-out",
          opacity: 1,
        },
      },
    },
  }),
  bg: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.1)",
  }),
  line: style({
    width: "80%",
    height: 1,
    backgroundColor: "lightgray",
    margin: "10px auto",
  }),
  item: recipe({
    base: { backgroundColor: "unset" },
    variants: { selected: { true: { color: "royalblue" } }, isWeb: { true: { ":hover": { backgroundColor: "whitesmoke" } } } },
  }),
  imgWrap: style({
    padding: 0,
    backgroundColor: "unset",
  }),
  img: style({
    width: "60%",
    height: "auto",
  }),
}
