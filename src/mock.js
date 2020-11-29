const Mock = require("mockjs");
const getDict = function() {
  return Mock.mock({
    "data|1-15": [
      {
        "id|+1": 123,
        name: Mock.Random.cname(),
      },
    ],
  });
};
Mock.mock("/select/getDict", getDict);
