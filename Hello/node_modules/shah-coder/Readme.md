

---

# Array Magic

[![npm version]](https://www.npmjs.com/package/shah-coder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Array Magic is a lightweight JavaScript library providing a collection of useful functions for manipulating arrays. It aims to simplify common array operations and enhance developer productivity.it is created by shah islam an earthly coder.

## Installation

You can install Array Magic via npm:

```bash
npm install shah-coder
```

## Usage

Import the package into your project and start using the array utilities:

```javascript
const arrayUtils = require('shah-coder');

const arr = [1, 2, 3, 4, 5];

console.log(arrayUtils.sum(arr)); // Output: 15
console.log(arrayUtils.average(arr)); // Output: 3
console.log(arrayUtils.removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(arrayUtils.reverse(arr)); // Output: [5, 4, 3, 2, 1]
console.log(arrayUtils.sortAscending(arr)); // Output: [1, 2, 3, 4, 5]
console.log(arrayUtils.sortDescending(arr)); // Output: [5, 4, 3, 2, 1]
console.log(arrayUtils.filter(arr, x => x % 2 === 0)); // Output: [2, 4]
console.log(arrayUtils.map(arr, x => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arrayUtils.max(arr)); // Output: 5
console.log(arrayUtils.min(arr)); // Output: 1
console.log(arrayUtils.chunk(arr, 2)); // Output: [[1, 2], [3, 4], [5]]
console.log(arrayUtils.shuffle(arr)); // Output: [randomly shuffled array]
```

## Features

- **Sum of Array**: Calculate the sum of all elements in an array.
- **Average of Array**: Calculate the average of all elements in an array.
- **Remove Duplicates**: Remove duplicate elements from an array, leaving only unique elements.
- **Reverse Array**: Reverse the order of elements in an array.
- **Sort Array**: Sort the elements of an array in ascending or descending order.
- **Filter Array**: Filter elements of an array based on a given condition.
- **Map Array**: Apply a transformation function to each element of an array and return a new array with the transformed elements.
- **Find Max/Min**: Find the maximum or minimum value in an array.
- **Chunk Array**: Split an array into smaller arrays of a specified size.
- **Shuffle Array**: Randomly shuffle the elements of an array.

## License

Array Magic is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contribution

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.

## Acknowledgements

This package was inspired by the need for simplifying common array operations in JavaScript projects. Special thanks to the open-source community for their valuable contributions.

---
