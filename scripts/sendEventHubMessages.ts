// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { EventHubProducerClient } from '@azure/event-hubs';
import { delay } from './utils/delay';
import { getLocalSetting } from './utils/getLocalSetting';
import { getRandomTestData } from './utils/getRandomTestData';

const hubName = 'helloWorldHub';
const numMessages = 300;

async function sendMessages(): Promise<void> {
    try {
        const connectionString = await getLocalSetting('eventHubUser_APPSETTING');
        const client = new EventHubProducerClient(connectionString, hubName);

        try {
            for (let j = 1; j < 5; j++) {
                const messages = [];
                for (let i = 1; i < numMessages; i++) {
                    const message = getRandomTestData();
                    messages.push({ body: message });
                }
                await client.sendBatch(messages);
                await delay(500);
            }
        } finally {
            await client.close();
        }
    } catch (err) {
        console.error(err);
        console.error('sendMessages failed');
        process.exit(1);
    }
}

void sendMessages();
