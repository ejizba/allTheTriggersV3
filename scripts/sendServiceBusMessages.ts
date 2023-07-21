// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { ServiceBusClient } from '@azure/service-bus';
import { getLocalSetting } from './utils/getLocalSetting';
import { getRandomTestData } from './utils/getRandomTestData';

const queueOrTopicName = 'helloWorldTopic';
const numMessages = 600;

async function sendMessages(): Promise<void> {
    try {
        const connectionString = await getLocalSetting('serviceBus_APPSETTING');
        const client = new ServiceBusClient(connectionString);

        try {
            const sender = client.createSender(queueOrTopicName);
            const batch = await sender.createMessageBatch();

            for (let i = 1; i < numMessages; i++) {
                const message = getRandomTestData();
                batch.tryAddMessage({ body: message });
            }
            await sender.sendMessages(batch);
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
