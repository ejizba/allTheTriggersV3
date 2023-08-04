// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { QueueClient, QueueSendMessageResponse } from '@azure/storage-queue';
import { getLocalSetting } from './utils/getLocalSetting';
import { getRandomTestData } from './utils/getRandomTestData';

const numMessages = 120;
const queueName = 'helloworldqueue';

async function sendMessages(): Promise<void> {
    try {
        const connectionString = await getLocalSetting('storageQSys_APPSETTING');
        const client = new QueueClient(connectionString, queueName);

        const promises: Promise<QueueSendMessageResponse>[] = [];
        for (let i = 1; i < numMessages; i++) {
            const message = getRandomTestData();
            promises.push(client.sendMessage(Buffer.from(message).toString('base64')));
        }
        await Promise.all(promises);
    } catch (err) {
        console.error(err);
        console.error('sendMessages failed');
        process.exit(1);
    }
}

void sendMessages();
