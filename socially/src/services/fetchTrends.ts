import axios from 'axios';
const ytToken = '';
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
                videoId: item.id,
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
            if (post.data.preview && post.data.preview.images && post.data.preview.images[0]) {
                thumbnail = post.data.preview.images[0].source.url.replace(/&amp;/g, '&');
            }
            
            return {
                title: post.data.title,
                thumbnail: thumbnail,
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
