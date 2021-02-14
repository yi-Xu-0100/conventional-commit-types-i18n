import {expect} from 'chai';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {conventionalCommitsTypes} from '../src/index';

describe('conventionalCommitsTypes() function test', () => {
  it('should return content of en.json by default', () => {
    const result = conventionalCommitsTypes();
    const getEnJSON = readFileSync(resolve(__dirname, '../../locale/en.json'), 'utf8');
    expect(result).to.equal(getEnJSON);
  });
  it('should return content of zh-cn.json, when locale is zh-cn', () => {
    const result = conventionalCommitsTypes('zh-cn');
    const getEnJSON = readFileSync(resolve(__dirname, '../../locale/zh-cn.json'), 'utf8');
    expect(result).to.equal(getEnJSON);
  });
});