module.exports = {
  directories: {
    output: 'dist',
    app: './',
  },
  win: {
    icon: './public/logo512.png',
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
        // arch: ['x64', 'ia32'],
      },
    ],
  },
  files: ['build/', 'node_modules/', 'package.json'],
};
