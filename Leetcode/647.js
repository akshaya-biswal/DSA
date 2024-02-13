// https://www.youtube.com/watch?v=4RACzI5-du8&ab_channel=NeetCode

function countSubstrings(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      result++;
      l--;
      r++;
    }

    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      result++;
      l--;
      r++;
    }
  }

  return result;
}
