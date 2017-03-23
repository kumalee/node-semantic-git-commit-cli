import { homedir } from 'os';
import test from 'ava';
import path from 'path';
import execa from 'execa';

import pkg from '../package.json';

const cli = 'dest/cli.js';

test('should print the right version', async (t) => {
  const { stdout } = await execa(cli, ['--version']);

  t.is(stdout, `v${pkg.version}`);
});

test('should fail on non git repository', async (t) => {
  // assume that the homedir is not a git repo
  process.chdir(homedir());

  const { stderr } = await execa(path.join(__dirname, '..', cli));

  process.chdir(path.join(__dirname, '..'));

  t.is(stderr, 'fatal: Not a git repository (or any of the parent directories): .git');
});

