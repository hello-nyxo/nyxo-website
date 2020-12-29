import { DefaultTheme } from "styled-components"
import colors from "~styles/colors"

export const fonts = {
  regular: "Montserrat-Regular",
  medium: "Montserrat-Medium",
  bold: "Montserrat-Bold",
}
declare module "styled-components" {
  export interface DefaultTheme {
    PRIMARY_BACKGROUND_COLOR?: string
    SECONDARY_BACKGROUND_COLOR?: string

    SECONDARY_BACKGROUND_COLOR_TRANSPARENT?: string

    titleColor: string
    errorColor: string
    PRIMARY_TEXT_COLOR?: string
    SECONDARY_TEXT_COLOR?: string

    ICON_COLOR: string

    PRIMARY_BUTTON_COLOR?: string
    SECONDARY_BUTTON_COLOR?: string

    HAIRLINE_COLOR?: string
    GRADIENT: string[]
    SHADOW: string

    FONT_REGULAR: string
    FONT_MEDIUM: string
    FONT_BOLD: string
  }
}

export const lightTheme: DefaultTheme = {
  PRIMARY_BACKGROUND_COLOR: "#F6F6F9",
  SECONDARY_BACKGROUND_COLOR: "#FFFFFF",
  SECONDARY_BACKGROUND_COLOR_TRANSPARENT: "rgba(255,255,255,0.3)",

  titleColor: "hsl(255deg, 85%, 30%)",
  errorColor: "#e71934",
  PRIMARY_TEXT_COLOR: "#202125",
  SECONDARY_TEXT_COLOR: "#5e6267",
  ICON_COLOR: "#f7f8fb",
  PRIMARY_BUTTON_COLOR: colors.radiantBlue,
  SECONDARY_BUTTON_COLOR: colors.radiantBlue,
  HAIRLINE_COLOR: "#e4e8eb",
  GRADIENT: [
    "rgba(246,246,249,0)",
    "rgba(246,246,249,0)",
    "rgba(246,246,249,1)",
  ],
  SHADOW: `1px 1px 5px rgba(32, 33, 37, 0.1)`,

  FONT_REGULAR: fonts.regular,
  FONT_MEDIUM: fonts.medium,
  FONT_BOLD: fonts.bold,
}

export const darkTheme: DefaultTheme = {
  PRIMARY_BACKGROUND_COLOR: "black",
  SECONDARY_BACKGROUND_COLOR: "#333",
  SECONDARY_BACKGROUND_COLOR_TRANSPARENT: "rgba(51,51,51,0.3)",

  titleColor: "hsl(255deg, 85%, 30%)",
  errorColor: "#e71934",
  PRIMARY_TEXT_COLOR: "white",
  SECONDARY_TEXT_COLOR: "rgba(255,255,255,0.75)",
  ICON_COLOR: "#f7f8fb",
  PRIMARY_BUTTON_COLOR: "white",
  SECONDARY_BUTTON_COLOR: "white",
  HAIRLINE_COLOR: "#C9C9CB",
  GRADIENT: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"],
  SHADOW: ` 1px 1px 5px rgba(32, 33, 37, 0.1)`,

  FONT_REGULAR: fonts.regular,
  FONT_MEDIUM: fonts.medium,
  FONT_BOLD: fonts.bold,
}
