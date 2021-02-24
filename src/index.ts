import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

export function conventionalCommitsTypes(locale?: string) {
  const localizationFiles = readdirSync(resolve(__dirname, `../locale/`));
  const fileName = localizationFiles.includes(`${locale}.json`) ? `${locale}.json` : 'en.json';
  return JSON.parse(readFileSync(resolve(__dirname, `../locale/${fileName}`), 'utf8'));
}

export default conventionalCommitsTypes;
