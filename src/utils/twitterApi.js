import { TwitterApi } from 'twitter-api-v2';

// These would come from your environment variables
const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const TWITTER_API_SECRET = process.env.TWITTER_API_SECRET;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET;

const client = new TwitterApi({
  appKey: TWITTER_API_KEY,
  appSecret: TWITTER_API_SECRET,
  accessToken: TWITTER_ACCESS_TOKEN,
  accessSecret: TWITTER_ACCESS_SECRET,
});

export const postToTwitter = async (tweetContent, photo) => {
  try {
    // First upload the media
    const mediaId = photo ? await client.v1.uploadMedia(photo) : null;
    
    // Create the tweet text
    const tweetText = `${tweetContent.project}\n\nCurrent Node: ${tweetContent["current node"]}\nParent Node: ${tweetContent["parent node"]}\nFun Fact: ${tweetContent["fun fact"]}\nNodes Visited: ${tweetContent["nodes visited"]}`;

    // Post the tweet
    const tweet = await client.v2.tweet({
      text: tweetText,
      ...(mediaId && { media: { media_ids: [mediaId] } })
    });

    return tweet;
  } catch (error) {
    console.error('Error posting to Twitter:', error);
    throw error;
  }
};