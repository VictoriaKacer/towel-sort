// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) return [];
    let result = [];
    if (matrix[1].length > 0 && !matrix[2]) {
        result = [].concat(matrix[0], matrix[1].reverse());
    } else if (matrix[2].length > 0 && !matrix[3]) {
        result = [].concat(matrix[0], matrix[1].reverse(), matrix[2]);
    } else if (matrix[3].length > 0 && !matrix[4]) {
        result = [].concat(matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse());
    } else {
        return result;
    }
    return result;
}
