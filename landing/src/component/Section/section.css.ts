import { style } from "@vanilla-extract/css"

export const colors = {
  gray: "#343B42",
  green: "#9FFCDF",
  blue: "#61B6F9",
}
export default {
  container: style({
    backgroundColor: colors.gray,
    padding: "50px 30px",
    rowGap: 30,
    color: "white",
  }),
  title: style({ color: colors.blue, fontSize: 16 }),
  sub: style({ fontSize: 20, fontWeight: "bold" }),
  desc: style({ fontSize: 12, fontWeight: 300, lineHeight: 1.6 }),
}

export const point = style({ color: colors.green })
