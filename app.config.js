export default ({ config }) => {
  config.icon = process.env.icon;
  config.splash.image = process.env.image;
  config.android.adaptiveIcon.foregroundImage = process.env.adaptiveIcon;
  config.android.package = `${process.env.bundleIdentifier}.App`;
  config.ios.bundleIdentifier = `${process.env.bundleIdentifier}.App`;
  return {
    ...config,
    extra: {
      url: process.env.url,
    },
  };
};
