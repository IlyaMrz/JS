const fetch = require('node-fetch');
const swapi = require('./script2')

it('calls swapi to get people',()=>{
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data =>{
        expect(data.count).toEqual(82)
        // done()
    })
})

it('calls swapi to get people with Promise',()=>{
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data =>{
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(7)
    })
})


it('get People returns count and results',()=>{
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 82,
                results: [0,1,2,3,4,5,6,7,8]
            })
        }))
    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        console.log(data)
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('http://swapi.dev/api/people')
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(7)
    })
})