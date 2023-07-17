import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.name || request.body || 'world';

    context.res = {
        body: `Hello, ${name}!`
    };
};

export default httpTrigger;