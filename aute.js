function getRange(s) {
    return s && typeof s.range === 'function' ? s.range() : [];
}

// Example objects
let objWithRange = {
    range: function() {
        return [1, 2, 3];
    }
};

let objWithoutRange = {
    name: "example"
};

console.log(getRange(objWithRange)); // Output: [1, 2, 3]
console.log(getRange(objWithoutRange)); // Output: []
console.log(getRange(null)); // Output: []
