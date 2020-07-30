import colors from "../colors"
import { getIcon } from "./IconHelper"

describe("IconHelper", () => {
  it("should return right icon parameters", () => {
    const expectedIconObject = {
      name: "sun",
      color: colors.afternoonAccent,
      secondaryColor: colors.afternoon,
    }

    expect(getIcon("AFTERNOON")).toEqual(expectedIconObject)
  })
})
