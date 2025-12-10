const { getConfigFile } = require("medusa-core-utils")
const { createMedusaApp } = require("@medusajs/medusa")

createMedusaApp()
  .catch(console.error)
  .then(() => console.log("Medusa backend is running"))
