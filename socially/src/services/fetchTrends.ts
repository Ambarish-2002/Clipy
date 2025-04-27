const ytToken = process.env.ytToken;
const igToken = process.env.igToken;
const twToken = process.env.twToken;

export function fetchYtTrends() {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${ytToken}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching YouTube trends:', error);
        });
}

export function fetchIgTrends() {

    const url = `https://api.instagram.com/v1/media/popular?access_token=${igToken}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching Instagram trends:', error);
        });

}

export function fetchTwTrends() {
    const url = `https://api.twitter.com/1.1/trends/place.json?id=1`;
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${twToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching Twitter trends:', error);
        });
}
