import { AzureFunction, Context } from "@azure/functions";

const serviceBusTopicTrigger: AzureFunction = async function (context: Context, message: any): Promise<void> {
    context.log('Service bus topic function processed message:', message);
    context.bindings.outputSbMsg = message;
};

export default serviceBusTopicTrigger;
