const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('http://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

const getPeople = async fetch => {
    const req = await fetch('http://swapi.dev/api/people')
    const data = await req.json()
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}
