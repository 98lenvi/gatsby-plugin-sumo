exports.pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        sumoSiteId: Joi
        .string()
        .required()
        .description(`Sumo Site ID is required & must be a string`)
        .messages({
            "any.required": `"sumoSiteId" needs to be specified as a string`,
            "any.string": `Type of "sumoSiteId" should be a string`
      })
  })
}