// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getTypes } = require('./lib/src');
const conventionalCommitsTypes = getTypes('en');
console.log(conventionalCommitsTypes.types['feat'].title); // Features