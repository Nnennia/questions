//Write a JavaScript function to parse an URL.

function parseURL(url) {
  let urlParts = url.split("?");
  if (urlParts.length > 1) {
    let queryString = urlParts[1];
    let params = {};
    let pairs = queryString.split("&");
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=");
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
  } else {
    return {};
  }
}
console.log(
  parseURL("https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python")
);
function parse_URL(url) {
  let a = document.createElement("a");
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(":", ""),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      let ret = {},
        seg = a.search.replace(/^\?/, "").split("&"),
        len = seg.length,
        i = 0,
        s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split("=");
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
    hash: a.hash.replace("#", ""),
    path: a.pathname.replace(/^([^\/])/, "/$1"),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
    segments: a.pathname.replace(/^\//, "").split("/"),
  };
}

console.log(
  parse_URL("https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python")
);
