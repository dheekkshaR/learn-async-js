// const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if (Array.isArray(arr)) {
            setTimeout(() => {
                let rowPromises = [];

                // Create promises for each row sum
                arr.forEach(row => {
                    rowPromises.push(new Promise((resolve, reject) => {
                        let rowSum = 0;
                        for (let j = 0; j < row.length; j++) {
                            rowSum += row[j];
                        }
                        resolve(rowSum);
                    }));
                });

                // Resolve all row promises concurrently
                Promise.all(rowPromises)
                    .then(rowSums => {
                        // Calculate total sum from row sums
                        let totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);
                        console.log('resolving ... ');
                        resolve(totalSum);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }, 0);
        } else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);
sumPromise1
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log(sumPromise1);

