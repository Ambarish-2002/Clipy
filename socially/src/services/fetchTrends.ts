import axios from 'axios';
const ytToken = 'AIzaSyC1gUHeZs7Gd9SQU2YNueV0k5i_KxjRu8A';
// const igToken = '';
// const twToken = '';

export function fetchYtTrends() {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${ytToken}`;
    return axios.get(url)
        .then((response: any) => {
            const data = response.data.items.map((item: any) => ({
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.default.url,
                author: item.snippet.channelTitle,
                url: `https://www.youtube.com/watch?v=${item.id}`
            }));
            return data;
        })
        .catch((error: any) => {
            console.error('Error fetching YouTube trends:', error);
        });
}

export function fetchRtTrends() {
    const url = 'https://www.reddit.com/r/popular.json?limit=25';
    
    return axios.get(url, {
        headers: { 'User-Agent': 'Socialy/1.0' }  // Reddit requires a user agent
    })
    .then((response: any) => {
        console.log('Reddit API response:', response.data);
        
        const processedData = response.data.data.children.map((post: any) => {
            let thumbnail = post.data.thumbnail;
            if (thumbnail === 'self' || thumbnail === 'default' || thumbnail === 'nsfw') {
                thumbnail = null;
            }
            
            return {
                title: post.data.title,
                thumbnail: thumbnail || 'reddit_icon.svg',
                author: post.data.author,
                subreddit: post.data.subreddit_name_prefixed,
                url: `https://reddit.com${post.data.permalink}`,
            };
        });
        
        return processedData;
    })
    .catch((error: any) => {
        console.error('Error fetching Reddit trends:', error);
        return [];
    });
}
