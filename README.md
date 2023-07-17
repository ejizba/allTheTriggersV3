# Node.js model v3 test app

This app has an http trigger, timer trigger, and several azure triggers that are all triggered by the output of an http trigger `helloWorldWithExtraOutputs`.

## Run the app locally

1. Run `npm install`
2. Run `npm build`
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
