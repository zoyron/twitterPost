import { TwitterApi } from 'twitter-api-v2';
import { getTwitterConfig } from './twitterConfig';

export const postToTwitter = async (tweetContent, photo) => {
  const config = getTwitterConfig();
  const client = new TwitterApi(config);

  try {
    const mediaId = photo ? await client.v1.uploadMedia(photo) : null;
    
    const tweetText = `${tweetContent.project}\n\nCurrent Node: ${tweetContent["current node"]}\nParent Node: ${tweetContent["parent node"]}\nFun Fact: ${tweetContent["fun fact"]}\nNodes Visited: ${tweetContent["nodes visited"]}`;

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