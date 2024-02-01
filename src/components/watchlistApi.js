
const URL = 'http://localhost:3000/watchlistArray';

class WatchlistApi {
    get = async() => {
        try{
            const resp = await fetch(URL);
            const data = await resp.json();
            console.log(data)
            return data;
        } catch(e) {
            console.log('FAILURE:', e);
        }
    }

    put = async(watchlistArray) => {
        try{
            const resp = await fetch(`${URL}/${watchlistArray.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(watchlistArray)
            });
            return await resp.json();
        } catch(e) {
            console.log('FAILURE:', e)
        }
    }
}

export const watchlistApi = new WatchlistApi();