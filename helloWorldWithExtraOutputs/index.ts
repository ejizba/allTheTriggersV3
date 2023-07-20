import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.name || request.body || 'world';

    context.bindings.blobOutput = { name };
    context.bindings.queueOutput = { name };
    context.bindings.cosmosDBOutput = [{ name, id: name }];
    context.bindings.eventHubOutput = { name };
    context.bindings.serviceBusQueueOutput = { name };
    context.bindings.serviceBusTopicOutput = { name };

    context.res = {
        body: `Hello, ${name}!`
    };
};

export default httpTrigger;