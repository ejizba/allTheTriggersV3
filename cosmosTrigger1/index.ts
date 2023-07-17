import { AzureFunction, Context } from "@azure/functions"

const cosmosDBTrigger: AzureFunction = async function (context: Context, documents: any[]): Promise<void> {
    context.log(`Cosmos DB function processed ${documents.length} documents`);
}

export default cosmosDBTrigger;
