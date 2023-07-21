import * as fs from 'fs/promises';
import { nonNullProp } from './nonNull';
import * as path from 'path';

export async function getLocalSetting(appSettingName: string): Promise<string> {
    const content = await fs.readFile(path.join(__dirname, '../../../local.settings.json'));
    const settings = JSON.parse(content.toString());
    return nonNullProp(settings.Values, appSettingName);
}