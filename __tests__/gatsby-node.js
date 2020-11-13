import { testPluginOptionsSchema } from "gatsby-plugin-utils"
import { pluginOptionsSchema } from "../gatsby-node"

describe(`pluginOptionsSchema`, () => {
  it(`should invalidate incorrect options`, () => {
    const options = {
      sumoSiteId : undefined
    }
    const { isValid, errors } = testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    )
    expect(isValid).toBe(false)
    expect(errors).toEqual([
      `"sumoSiteId" needs to be specified as a string`,
      `Type of "sumoSiteId" should be a string`,
      `Sumo Site ID is required & must be a string`,
    ])
  })
  it(`should validate correct options`, () => {
    const options = {
      sumoSiteId : `61bf159c0d6eac4a9ca71be4da244c564b4edfd2d6aaaed5a819b2310dXXXXXX`

    }
    const { isValid, errors } = testPluginOptionsSchema(
      pluginOptionsSchema,
      options
    )
    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
})