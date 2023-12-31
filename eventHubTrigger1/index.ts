import { AzureFunction, Context } from "@azure/functions"

const eventHubTrigger: AzureFunction = async function (context: Context, messages: any[]): Promise<void> {
    if (Array.isArray(messages)) {
        context.log(`Event hub function processed ${messages.length} messages`);
        for (const message of messages) {
            context.log('Event hub message:', message);
        }
    } else {
        context.log('Event hub function processed message:', messages);
    }
};

export default eventHubTrigger;
