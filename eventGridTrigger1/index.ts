import { AzureFunction, Context } from "@azure/functions"

const eventGridTrigger: AzureFunction = async function (context: Context, event: any): Promise<void> {
    context.log('Event grid function processed event:', event);
};

export default eventGridTrigger;
