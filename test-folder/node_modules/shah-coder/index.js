const arrayMagic = {
    // Function to calculate sum of array elements
    sum: function(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    },

    // Function to calculate average of array elements
    average: function(arr) {
        return this.sum(arr) / arr.length;
    },

    // Function to remove duplicate elements from array
    removeDuplicates: function(arr) {
        return Array.from(new Set(arr));
    },

    // Function to reverse array
    reverse: function(arr) {
        return arr.slice().reverse();
    },

    // Function to sort array in ascending order
    sortAscending: function(arr) {
        return arr.slice().sort((a, b) => a - b);
    },

    // Function to sort array in descending order
    sortDescending: function(arr) {
        return arr.slice().sort((a, b) => b - a);
    },

    // Function to filter array based on condition
    filter: function(arr, condition) {
        return arr.filter(condition);
    },

    // Function to map array elements
    map: function(arr, transformFunc) {
        return arr.map(transformFunc);
    },

    // Function to find maximum value in array
    max: function(arr) {
        return Math.max(...arr);
    },

    // Function to find minimum value in array
    min: function(arr) {
        return Math.min(...arr);
    },

    // Function to chunk array into smaller arrays of given size
    chunk: function(arr, size) {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    },

    // Function to shuffle array
    shuffle: function(arr) {
        const shuffledArr = arr.slice();
        for (let i = shuffledArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
        }
        return shuffledArr;
    }
};

module.exports = arrayMagic;