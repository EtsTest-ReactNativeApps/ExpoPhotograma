const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        // Change 2 (add 'bin' to assetExts)
        assetExts: ['bin', 'txt', 'jpg', 'ttf', 'png', 'jpeg'],
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
        // Change 3 (add platform_node to blacklist)
        blacklistRE: blacklist([/platform_node/])
    },
};
