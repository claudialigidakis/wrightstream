const query = variable => {
  const path = window.location.search.substring(1);
  const vars = path.split("&");
  for (let i = 0 ; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] === variable) return pair[1];
  }
  return false;
}

export default query;
