#!/usr/bin/env node

const path = require('path');
const shell = require('shelljs');

function root(..._args) {
    return path.resolve(__dirname, ..._args);
}

function beforeTSC() {
    if (shell.test('-d', root('temp', 'build'))) {
        shell.rm('-rf', root('temp', 'build', '*'));
    }
}

function afterTSC() {
    const dist = root('dist');
    if (shell.test('-d', dist)) {
        shell.rm('-rf', root(dist, '*'));
    } else {
        shell.mkdir('-p', dist);
    }

    shell.mv('-f', root('temp', 'build', 'source', '*'), dist);
}

function removeTrash() {
    shell.rm('-rf', root('temp'));
    shell.rm('-f', root('*.tgz'));
}

function main() {
    const args = process.argv;
    const len = args.length || 0;

    for (let i = 0; i < len; i++) {
        switch (args[i]) {
            case 'before-tsc':
                beforeTSC();
                break;

            case '--after-tsc':
                afterTSC();
                break;

            case '--remove-trash':
                removeTrash();
                break;

            default:
                break;
        }
    }
}

if (
    shell.test('-d', root('source')) &&
    shell.test('-d', root('node_modules')) &&
    shell.test('-f', root('package.json'))
) {
    main();
} else {
    throw '[TASKS] Error';
}