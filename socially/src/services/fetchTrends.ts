import axios from 'axios';
const ytToken = 'AIzaSyBaj7nespvun0vAR9mG2Xzt9d_RB1N6M4o';
const igToken = '';
const twToken = '';

export function fetchYtTrends() {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${ytToken}`;
    return axios.get(url)
        .then((response: any) => {
            const data = response.data.items.map((item: any) => ({
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.default.url,
                channelTitle: item.snippet.channelTitle,
                viewCount: item.statistics.viewCount,
                publishedAt: item.snippet.publishedAt,
                videoId: item.id,
            }));
            return data;
        })
        .catch((error: any) => {
            console.error('Error fetching YouTube trends:', error);
        });
}

export function fetchIgTrends() {
    const url = `https://api.instagram.com/v1/media/popular?access_token=${igToken}`;
    return axios.get(url)
        .then((response: any) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error: any) => {
            console.error('Error fetching Instagram trends:', error);
        });
}

export function fetchTwTrends() {
    const url = `https://api.twitter.com/1.1/trends/place.json?id=1`;
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${twToken}`
        }
    })
        .then((response: any) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error: any) => {
            console.error('Error fetching Twitter trends:', error);
        });
}
