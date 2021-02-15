import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const desPath = resolve(__dirname,'../locale/');
const srcPath = resolve(__dirname,'../../locale/');
if(!existsSync(desPath)) mkdirSync(desPath);
const files = readdirSync(srcPath);
for (let i = 0; i < files.length; i++) {
  copyFileSync(join(srcPath, files[i]), join(desPath, files[i]));
}