// poset response.js
module.exports = function(req, res, next) {
  
  // if (req.method == "POST" && req.url == "/wishLists") {
  //   res.statusCode = 201;
  //   res.send({
  //     wishListId: "5c417bd52ab79c000803d8a1",
  //     createDate: "2019-01-18T07:10:13.76"
  //   });
  // }

  // if (req.method == "DELETE" && req.url == "/wishListItems") {
  //   req.method = "POST";
  //   res.statusCode = 204;
  //   req.url == "/wishList_a";
  // }

  // Continue to JSON Server router
  next();
};
