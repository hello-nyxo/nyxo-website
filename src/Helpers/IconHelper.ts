import colors from "../colors"

type IconSettings = {
  name: string
  color: string
  secondaryColor: string
}

export const getIcon = (period?: string | null): IconSettings => {
  switch (period?.toUpperCase()) {
    case "MORNING":
      return {
        name: "sunrise",
        color: colors.morningAccent,
        secondaryColor: colors.morning,
      }
    case "AFTERNOON":
      return {
        name: "sun",
        color: colors.afternoonAccent,
        secondaryColor: colors.afternoon,
      }
    case "EVENING":
      return {
        name: "sunset",
        color: colors.eveningAccent,
        secondaryColor: colors.evening,
      }
    default:
      return {
        name: "sunrise",
        color: colors.morningAccent,
        secondaryColor: colors.evening,
      }
  }
}
