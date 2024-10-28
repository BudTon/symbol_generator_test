/* eslint-disable no-undef */
import canIterate from '../canIterate';

test.each([
    [new Map(), true],
    [new Set(), true],
    [null, false],
    [10, false],
    ["Netology", true],
])('testing canIterate(response) with response = %s and expected = "%o"', (response, expected) => {
    expected ? expect(canIterate(response)).toBeTruthy : expect(canIterate(response)).toBeFalsy
})
