import { colors } from "@/styles"
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

export default {
  container: recipe({
    base: { backgroundColor: colors.gray, padding: "50px 30px", rowGap: 30, color: "white" },
    variants: { white: { true: { backgroundColor: "white" } } },
  }),
}
