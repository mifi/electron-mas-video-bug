module.exports = {
  packagerConfig: {
    asar: false,
    files: [
      'src/**/*',
    ],
    osxNotarize: false, // Notarization is not required for MAS
  },
  rebuildConfig: {},
};
