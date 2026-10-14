const {sortPages} = require('./report.js')
const {test,expect} = require('@jest/globals')

test('sortPages',()=>{
    const input = {
        'https://wagslane.dev':1,
        'https://blog.boot.dev':3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://blog.boot.dev',3],
        ['https://wagslane.dev',1]
    ]
    expect(actual).toEqual(expected)
})