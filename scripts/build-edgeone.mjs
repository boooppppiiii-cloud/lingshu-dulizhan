import { cp, mkdir, rm, symlink, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const stage = path.join(root, 'work', 'edgeone-static');
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });
for (const name of ['app', 'public', 'next.config.ts', 'tsconfig.json', 'package.json', 'postcss.config.mjs']) {
  await cp(path.join(root, name), path.join(stage, name), { recursive: true,
    filter: source => source !== path.join(root, 'app', 'api') });
}
await symlink(path.join(root, 'node_modules'), path.join(stage, 'node_modules'), 'dir');
const result = spawnSync(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack'], {
  cwd: stage, stdio: 'inherit', env: { ...process.env, EDGEONE_STATIC_EXPORT: '1' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
const output = path.join(root, 'out');
await rm(output, { recursive: true, force: true });
await cp(path.join(stage, 'out'), output, { recursive: true });
await writeFile(path.join(output, 'release.json'), JSON.stringify({
  commit: spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).stdout.trim(),
  builtAt: new Date().toISOString(),
  booking: 'email',
}));
console.log(`EdgeOne static deployment assets: ${output}`);
