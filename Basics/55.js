//Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function equal_pt(str) {
  const str_p = str.replace(/[^p]/g, "");

  const str_t = str.replace(/[^t]/g, "");

  const p_num = str_p.length;
  const s_num = str_t.length;

  return p_num === s_num;
}
