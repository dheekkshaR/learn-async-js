
function checkForNegatives(arr) {
    return new Promise((resolve, reject) => {
        console.log('Checking for negatives... ');
        if (Array.isArray(arr)) {
            setTimeout(() => {
                // Create promises for checking each row
                const rowPromises = arr.map((row, index) => {
                    return new Promise((resolve, reject) => {
                        // Check if any element in the row is negative
                        if (row.some(num => num < 0)) {
                            resolve(index); // Resolve with the row number
                        } else {
                            reject('No row contains negative numbers'); // Reject if no negatives found
                        }
                    });
                });

                // Use Promise.any() to resolve with the first fulfilled promise
                Promise.any(rowPromises)
                    .then(rowIndex => {
                        // console.log('Row with negative number:', rowIndex);
                        resolve(rowIndex);
                    })
                    .catch(error => {
                        reject(error); // Reject with error message
                    });
            }, 0);
        } else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from checking for negatives');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];


checkForNegatives(array2D)
    .then(rowIndex => {
        console.log('Row with negative number:', rowIndex);
    })
    .catch(error => {
        console.error('Error:', error);
    });
