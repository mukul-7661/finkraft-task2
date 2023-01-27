function find(A, arr_size, sum) {
  var l, r;

  A.sort();

  l = 0;
  r = arr_size - 1;

  while (l < r) {
    if (A[l] + A[r] == sum) {
      var ans = [A[l], A[r]];
      return ans;
    } else if (A[l] + A[r] < sum) {
      l++;
    } else {
      r--;
    }
  }

  return [];
}
