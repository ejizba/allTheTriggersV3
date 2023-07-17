import { AzureFunction, Context } from "@azure/functions"

const blobTrigger: AzureFunction = async function (context: Context, blob: any): Promise<void> {
    context.log(
        `Storage blob function processed blob "${context.bindingData.name}" with size ${blob.length} bytes`
    );
};

export default blobTrigger;
