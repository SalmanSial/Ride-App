const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
// Fall back to Metro's Node crawler on managed machines where Watchman cannot
// create its user-level LaunchAgent.
const config = { resolver: { useWatchman: false } };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
