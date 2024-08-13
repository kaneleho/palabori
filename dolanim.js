function mixture$1(dists, weights) {
  let result = [];
  for (let i = 0; i < dists.length; i++) {
    result = result.concat(dists[i].sample(weights[i]));
  }
  return result;
}
