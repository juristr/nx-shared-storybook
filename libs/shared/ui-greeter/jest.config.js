module.exports = {
  name: 'shared-ui-greeter',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-greeter',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
