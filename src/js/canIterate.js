// function canIterate(data) {
export default function canIterate(data) {
    if (/^-?\d*\.?\d+$/.test(data)) {
    // if (!isNaN(data)) { //Вариант 2
        return console.log(false)
    }
    try {
        data[Symbol.iterator]
        return console.log(true);
    } catch {
        return console.log(false); 
    }
};

// module.exports = {
//     canIterate
// }