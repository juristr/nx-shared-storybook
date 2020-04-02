module.exports = {
  name: 'demoapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demoapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
