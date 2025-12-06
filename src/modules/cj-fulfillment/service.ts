import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils"
import { FulfillmentOption } from "@medusajs/framework/types"

class CjFulfillmentService extends AbstractFulfillmentProviderService {
    static identifier = "cj-fulfillment"

    constructor(container) {
        super(container)
    }

    async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
        return [
            {
                id: "cj-packet",
            },
        ]
    }

    async validateFulfillmentData(
        optionData: Record<string, unknown>,
        data: Record<string, unknown>,
        context: Record<string, unknown>
    ): Promise<any> {
        return data
    }

    async validateOption(data: Record<string, unknown>): Promise<boolean> {
        return true
    }

    async canCalculate(data: Record<string, unknown>): Promise<boolean> {
        return false
    }

    async calculatePrice(
        optionData: Record<string, unknown>,
        data: Record<string, unknown>,
        context: Record<string, unknown>
    ): Promise<number> {
        throw new Error("Method not implemented.")
    }

    async createFulfillment(
        data: Record<string, unknown>,
        items: any[],
        order: any,
        fulfillment: any
    ): Promise<any> {
        // Logic to call CJ API will go here
        console.log("Creating CJ fulfillment for order", order.id)
        return {}
    }

    async cancelFulfillment(fulfillment: Record<string, unknown>): Promise<any> {
        throw new Error("Method not implemented.")
    }
}

export default CjFulfillmentService
