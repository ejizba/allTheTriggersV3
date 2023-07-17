import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, queueItem: string): Promise<void> {
    context.log('Storage queue function processed work item:', queueItem);
};

export default queueTrigger;
