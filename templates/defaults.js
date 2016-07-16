'use strict';

exports.json = {
  sudo: false,
  language: 'node_js',
  node_js: [ '6', '5', '4', '0.12', '0.10' ],
  matrix: {
    fast_finish: true,
    allow_failures: [
      {node_js: '4'},
      {node_js: '0.10'},
      {node_js: '0.12'}
    ]
  }
};

exports.yaml = [
  'sudo: false',
  'language: node_js',
  'node_js:',
  '  - "6"',
  '  - "5"',
  '  - "4"',
  '  - "0.12"',
  '  - "0.10"',
  'matrix:',
  '  fast_finish: true',
  '  allow_failures:',
  '    - node_js: "4"',
  '    - node_js: "0.10"',
  '    - node_js: "0.12"',
  ''
].join('\n');
