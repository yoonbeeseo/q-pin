import { style } from "@vanilla-extract/css"

export default {
  container: style({
    borderBottom: "1px solid lightgray",
  }),
  wrap: style({
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 900,
    margin: "0 auto",
    position: "relative",
  }),
  menu: style({ height: 50, fontSize: 25, backgroundColor: "unset", transition: "all .5s ease-out", width: 50 }),
  logo: style({
    backgroundColor: "unset",
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  }),
  img: style({
    height: 40,
    width: "auto",
  }),
  //   menuWrap: style({}),
  //   span1: recipe({}),
  //   span2: recipe({}),
  //   span3: recipe({}),
}
