/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

'use strict';

const path = require('path');

const projectDir = __dirname;
const tsconfigPath = path.join(projectDir, 'tools/gulp/tsconfig.json');
const tsconfig = require(tsconfigPath);

if (projectDir.includes(' ')) {
  console.error('Error: Cannot run the Angular Material build tasks if the project is ' +
    'located in a directory with spaces in between. Please rename your project directory.');
  process.exit(1);
}

// Register TS compilation.
require('ts-node').register({
  project: tsconfigPath
});

require('./tools/gulp/gulpfile');
