let likeMe = function (btnElement) {
  // Innerhtml returns STRING.
  let likeCountString = btnElement.children[0].innerHTML;

  // string to number
  let likeCount = parseInt(likeCountString);

  // lets increase the like count
  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};
