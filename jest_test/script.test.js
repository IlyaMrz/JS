const googleSearch = require('./script')

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
    'bobandwife.com'
]

describe('googleSearch', ()=>{
    
    it('this is a test', ()=> {
        expect('ddd').toBe('ddd')
    })
    
    it('googleSearch test', ()=> {
        expect(googleSearch('bob', dbMock)).toEqual(['bobandwife.com'])
        expect(googleSearch('bobrr', dbMock)).toEqual([])
    })
    
    it('work with undefined and null input', ()=> {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches', ()=> {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})
