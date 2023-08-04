import { AzureFunction, Context } from "@azure/functions";

const cosmosDBTrigger: AzureFunction = async function (context: Context, documents: any[]): Promise<void> {
    context.log(`Cosmos DB function processed ${documents.length} documents`);
    context.bindings.outputDocument = documents;
}

export default cosmosDBTrigger;
