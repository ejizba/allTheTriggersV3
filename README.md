# Node.js model v3 test app

This app has an http trigger, timer trigger, and several azure triggers that are all triggered by the output of an http trigger `helloWorldWithExtraOutputs`.

## Run the app locally

1. Run `npm install`
2. Run `npm run build`
3. To run locally, add a local.setting.json with the following content:

    ```json
    {
      "IsEncrypted": false,
      "Values": {
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "AzureWebJobsStorage": "<insert connection string>",
        "storage_APPSETTING": "<insert connection string>",
        "cosmosDB_APPSETTING": "<insert connection string>",
        "eventHub_APPSETTING": "<insert connection string>",
        "serviceBus_APPSETTING": "<insert connection string>"
      }
    }
    ```

## Send many messages at once

I've added a few scripts to send many messages at once. This can be helpful for testing target based scaling in Azure. You can modify the source code to change the number of messages, or the resource name (for example the service bus script is used for both queues and topics). These scripts are setup so that you can run them locally using the connection strings you've already defined in `local.settings.json`, regardless of if the app itself is being run locally or in Azure.

1. Run all the steps required to run locally above
2. Depending on which trigger you want to test
    1. Run `node ./dist/scripts/sendServiceBusMessages.js`
    2. Run `node ./dist/scripts/sendQueueMessages.js`
