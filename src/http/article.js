export const getArticleList = (that, params = {}) => {
  return that.$http({
    that,
    method: "get",
    params,
    url: "/article-list"
  });
};
