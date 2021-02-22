import { readFileSync } from 'fs';
import { resolve } from 'path';

export function conventionalCommitsTypes(locale?: string) {
  const fileName = locale ? `${locale}.json` : 'en.json';
  return JSON.parse(readFileSync(resolve(__dirname, `../locale/${fileName}`), 'utf8'));
}
