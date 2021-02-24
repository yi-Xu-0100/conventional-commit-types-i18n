import { readFileSync } from 'fs';
import { resolve } from 'path';
import { conventionalCommitsTypes } from '../src/index';

describe('conventionalCommitsTypes() function test', () => {
  it.each([
    ['en.json', undefined],
    ['en.json', 'unknown-locale'],
    ['en.json', 'en'],
    ['zh-cn.json', 'zh-cn']
  ])("should return content of %s when input is '%s'", (fileName, locale) => {
    const result = conventionalCommitsTypes(locale);
    const getLocaleJSON = JSON.parse(
      readFileSync(resolve(__dirname, `../locale/${fileName}`), 'utf8')
    );
    expect(result.types).toEqual(getLocaleJSON.types);
  });
});
