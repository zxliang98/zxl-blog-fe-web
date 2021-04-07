export const getCatalog = (that, params = {}) => {
  return that.$http({
    that,
    method: "get",
    params,
    url: "/catalog-list"
  });
};
export const addCatalog = (that, params = {}) => {
  return that.$http({
    that,
    method: "post",
    data: params,
    url: "/catalog"
  });
};
export const delCatalog = (that, params = {}) => {
  return that.$http({
    that,
    method: "delete",
    data: params,
    url: "/catalog"
  });
};
