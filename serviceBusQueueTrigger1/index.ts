import { AzureFunction, Context } from "@azure/functions"

const serviceBusQueueTrigger: AzureFunction = async function(context: Context, message: any): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    context.bindings.sboutput = message;
};

export default serviceBusQueueTrigger;
