import * as en from '../locale/en.json';
import * as zh_cn from '../locale/zh-cn.json';
import * as zh_tw from '../locale/zh-tw.json';
import * as fr from '../locale/fr.json';
import * as de from '../locale/de.json';
import * as it from '../locale/it.json';
import * as es from '../locale/es.json';
import * as ja from '../locale/ja.json';
import * as ko from '../locale/ko.json';
import * as ru from '../locale/ru.json';
import * as bg from '../locale/bg.json';
import * as hu from '../locale/hu.json';
import * as pt_br from '../locale/pt-br.json';
import * as tr from '../locale/tr.json';

export interface ConventionalCommitsTypes {
  types: {
    [type: string]: {
      title: string;
      description: string;
    };
  };
}

export function conventionalCommitsTypes(locale?: string): ConventionalCommitsTypes {
  switch (locale) {
    case 'zh-cn':
      return zh_cn; // Simplified Chinese
    case 'zh-tw':
      return zh_tw; // Traditional Chinese
    case 'fr':
      return fr; // French
    case 'de':
      return de; // German
    case 'it':
      return it; // Italian
    case 'es':
      return es; // Spanish
    case 'ja':
      return ja; // Japanese
    case 'ko':
      return ko; // Korean
    case 'ru':
      return ru; // Russian
    case 'bg':
      return bg; // Bulgarian
    case 'hu':
      return hu; // Hungarian
    case 'pt-br':
      return pt_br; // Portuguese (Brazil)
    case 'tr':
      return tr; // Turkish
    default:
      return en; // English (US)
  }
}

export function getTypes(locale?: string): ConventionalCommitsTypes {
  return conventionalCommitsTypes(locale);
}

export default conventionalCommitsTypes;
