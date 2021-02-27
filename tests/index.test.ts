import { readFileSync } from 'fs';
import { resolve } from 'path';
import { conventionalCommitsTypes } from '../src/index';
import getTypes from '../src/index';

describe('conventionalCommitsTypes and getTypes function test', () => {
  it.each([
    ['en.json', undefined],
    ['en.json', ''],
    ['en.json', 'unknown-locale'],
    ['en.json', 'en'],
    ['zh-cn.json', 'zh-cn'],
    ['zh-tw.json', 'zh-tw'],
    ['fr.json', 'fr'],
    ['de.json', 'de'],
    ['it.json', 'it'],
    ['es.json', 'es'],
    ['ja.json', 'ja'],
    ['ko.json', 'ko'],
    ['ru.json', 'ru'],
    ['bg.json', 'bg'],
    ['hu.json', 'hu'],
    ['pt-br.json', 'pt-br'],
    ['tr.json', 'tr'],
    ['es.json', 'es']
  ])("should return content of %s when input is '%s'", (fileName, locale) => {
    const result = conventionalCommitsTypes(locale);
    const _result = getTypes(locale);
    const getLocaleJSON = JSON.parse(
      readFileSync(resolve(__dirname, `../locale/${fileName}`), 'utf8')
    );
    expect(result.types).toEqual(getLocaleJSON.types);
    expect(_result.types).toEqual(getLocaleJSON.types);
  });
});
