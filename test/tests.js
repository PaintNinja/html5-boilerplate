/* global describe, it */

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var pkg = require('./../package.json');
var expectedFiles = {

    'files': [
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        '.htaccess',
        '404.html',
        'apple-touch-icon-precomposed.png',
        'browserconfig.xml',
        'crossdomain.xml',
        'favicon.ico',
        'humans.txt',
        'index.html',
        'robots.txt',
        'tile-wide.png',
        'tile.png',
    ],

    'directories': {

        'css': {
            'files': [
                'main.css',
                'normalize.css'
            ]
        },

        'doc': {
            'files': [
                'TOC.md',
                'css.md',
                'extend.md',
                'faq.md',
                'html.md',
                'js.md',
                'misc.md',
                'usage.md'
            ]
        },

        'img': {
            'files': [
                '.gitignore'
            ]
        },

        'js': {
            'files': [
                'main.js',
                'plugins.js',
            ],

            'directories': {
                'vendor': {
                    'files': [
                        'modernizr-2.8.0.min.js',
                        'jquery-' + pkg.devDependencies.jquery + '.min.js'
                    ]
                }
            }
        }

    }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function runTests() {

    describe('TODO', function () {
        it('Should not be done', function () {
            assert.equal(true, true);
        });
    });

}

runTests();
