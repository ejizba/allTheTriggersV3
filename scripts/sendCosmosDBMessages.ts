// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { CosmosClient, ItemResponse } from '@azure/cosmos';
import { getLocalSetting } from './utils/getLocalSetting';
import { getRandomTestData } from './utils/getRandomTestData';

const numMessages = 120;
const dbName = 'helloWorldDB';
const conName = 'helloWorldCol';

async function sendMessages(): Promise<void> {
    try {
        const connectionString = await getLocalSetting('cosmosDBSys_APPSETTING');
        const client = new CosmosClient(connectionString);
        const container = client.database(dbName).container(conName);

        const promises: Promise<ItemResponse<any>>[] = [];
        for (let i = 1; i < numMessages; i++) {
            const message = getRandomTestData();
            promises.push(container.items.create({ message, id: message }));
        }
        await Promise.all(promises);
    } catch (err) {
        console.error(err);
        console.error('sendMessages failed');
        process.exit(1);
    }
}

void sendMessages();
