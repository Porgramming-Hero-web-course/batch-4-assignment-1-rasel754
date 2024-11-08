{
  //
  function sumArray(arr: number[]): number {
    let sum: number = 0;
    const len: number = arr.length;

    for (let i = 0; i < len; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const res = sumArray([1, 2, 3, 4, 5]);
  console.log(res);
  //
}
