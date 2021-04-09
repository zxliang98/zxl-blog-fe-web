export const getArticleList = (that, params = {}) => {
  return that.$http({
    that,
    method: "get",
    params,
    url: "/article-list"
  });
};

export const getArticle = (that, params = {}) => {
  return that.$http({
    that,
    method: "get",
    params,
    url: "/article"
  });
};

export const addArticle = (that, params = {}) => {
  return that.$http({
    that,
    method: "post",
    data: params,
    url: "/article"
  });
};

export const editArticle = (that, params = {}) => {
  return that.$http({
    that,
    method: "put",
    data: params,
    url: "/article"
  });
};
