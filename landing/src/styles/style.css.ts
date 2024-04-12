import { style } from "@vanilla-extract/css"

export const colors = {
  gray: "#343B42",
  green: "#9FFCDF",
  blue: "#61B6F9",
}

export const imgStyle = style({
  width: "100%",
  height: "auto",
  // border: "1px solid tomato",
})

export const point = style({ color: colors.green })

export const text = {
  title: style({ color: colors.blue, fontSize: 16 }),
  sub: style({ fontSize: 20, fontWeight: "bold" }),
  desc: style({ fontSize: 12, fontWeight: 300, lineHeight: 1.6 }),
  primary: style({ color: "black", fontSize: 14, fontWeight: 300 }),
}

export const iconStyle = style({
  width: 80,
  height: 80,
})
