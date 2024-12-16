export const getTwitterConfig = () => {
  const requiredEnvVars = [
    'VITE_TWITTER_API_KEY',
    'VITE_TWITTER_API_SECRET',
    'VITE_TWITTER_ACCESS_TOKEN',
    'VITE_TWITTER_ACCESS_SECRET'
  ];

  const missingVars = requiredEnvVars.filter(
    varName => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  return {
    appKey: import.meta.env.VITE_TWITTER_API_KEY,
    appSecret: import.meta.env.VITE_TWITTER_API_SECRET,
    accessToken: import.meta.env.VITE_TWITTER_ACCESS_TOKEN,
    accessSecret: import.meta.env.VITE_TWITTER_ACCESS_SECRET,
  };
};
