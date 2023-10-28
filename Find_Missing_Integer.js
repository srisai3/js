function findMissingNumber(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  const missingNumber = total - arrSum;
  return missingNumber;
}
