export default class Services {
    static _apiBase = 'https://api.thecatapi.com/v1/images/search?limit=15';

    static async getResource(page) {
        const res = await fetch(`${this._apiBase}${page}`)
        if (!res.ok) {
            throw new Error((`Could not fetch ${page}, received ${res.status}`))
        }
        return await res.json()
    }
}