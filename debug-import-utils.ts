
import { AbstractFulfillmentProviderService } from "@medusajs/utils"

console.log("Imported from utils:", AbstractFulfillmentProviderService)
if (AbstractFulfillmentProviderService) {
    console.log("Prototype:", AbstractFulfillmentProviderService.prototype)
} else {
    console.log("It is undefined via utils.")
}
