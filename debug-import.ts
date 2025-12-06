
import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils"

console.log("Imported:", AbstractFulfillmentProviderService)
if (AbstractFulfillmentProviderService) {
    console.log("Prototype:", AbstractFulfillmentProviderService.prototype)
} else {
    console.log("It is undefined via import.")
}
