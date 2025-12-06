
const utils = require("@medusajs/framework/utils");
console.log("AbstractFulfillmentProviderService types in @medusajs/framework/utils:", typeof utils.AbstractFulfillmentProviderService);
if (utils.AbstractFulfillmentProviderService) {
    console.log("It is a class/function.");
} else {
    console.log("It is UNDEFINED.");
}
