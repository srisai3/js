function printRepeating(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        console.log(arr[i]);
        break; 
      }
    }
  }
}
