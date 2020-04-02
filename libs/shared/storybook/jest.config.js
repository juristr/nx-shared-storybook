module.exports = {
  name: 'shared-storybook',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/storybook',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
