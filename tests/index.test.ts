import { readFileSync } from 'fs';
import { resolve } from 'path';
import { conventionalCommitsTypes } from '../src/index';

describe('conventionalCommitsTypes() function test', () => {
  it('should return content of en.json without input', () => {
    const defaultResult = conventionalCommitsTypes();
    const getEnJSON = readFileSync(resolve(__dirname, '../locale/en.json'), 'utf8');
    expect(defaultResult).toEqual(getEnJSON);
  });
  it.each([
    ['en.json', 'en'],
    ['zh-cn.json', 'zh-cn']
  ])("should return content of %s when input is '%s'", (fileName, locale) => {
    const result = conventionalCommitsTypes(locale);
    const getLocaleJSON = readFileSync(resolve(__dirname, `../locale/${fileName}`), 'utf8');
    expect(result).toEqual(getLocaleJSON);
  });
});
