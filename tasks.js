#!/usr/bin/env node

const path = require('path');
const shell = require('shelljs');

function createAbsPath(..._args) {
    return path.resolve(__dirname, ..._args);
}

function beforeTSC() {
    if (shell.test('-d', createAbsPath('temp', 'build'))) {
        shell.rm('-rf', createAbsPath('temp', 'build', '*'));
    }
}

function afterTSC() {
    const dist = createAbsPath('dist');
    if (shell.test('-d', dist)) {
        shell.rm('-rf', createAbsPath(dist, '*'));
    } else {
        shell.mkdir('-p', dist);
    }

    shell.mv('-f', createAbsPath('temp', 'build', 'source', '*'), dist);
}

function removeTrash() {
    shell.rm('-rf', createAbsPath('temp'));
    shell.rm('-f', createAbsPath('*.tgz'));
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

main();