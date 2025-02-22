/**
 * 
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size 
and returns them within a new array. If array can't be split evenly, the final chunk will be the 
remaining elements. The function should not modify the original input array.

Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk.
Returns
    (Array): Returns the new array of chunks.

Examples
    chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
    chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
    chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
    The function should return an empty array if the array argument is empty.

Read more about it here: https://lodash.com/docs/#chunk
 */


/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */

export default function chunk(array, size = 1) {
    // if array is empty
    if (array.length === 0) return [];
  
    // Ensure size is a positive number
    if (typeof size !== 'number' || size <= 0) {
      console.log("Enter positive number"); return
    }
  
    const chunks = [];
    let chunkIndex = 0;
  
    while (chunkIndex < array.length) {
      // Create a new chunk the last index is excluded
      chunks.push(array.slice(chunkIndex, chunkIndex + size)); //here it is inserting in chunks array by slicing the vale
      chunkIndex += size;
    }
  
    return chunks;
  }
  