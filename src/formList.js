export const formList = (self) => [
  {
    type: "input",
    name: "input",
    formItemProps: {
      props: {
        label: "输入框",
      },
    },
    fieldProps: {
      rules: [{ required: true }],
    },
    controlProps: {
      props: {
        suffix: "年",
      },
    },
  },
  {
    type: "select",
    name: "select",
    formItemProps: {
      props: {
        label: "下拉框",
      },
    },
    config: {
      // fetchConfig: {
      //   dataPath: "data.lis",
      //   method: "get",
      //   searchParams: { searchKey: "kw", searchValue: 123 },
      //   url:
      //     "http://106.52.80.66/mock/5e40d3cdd02be072cebca8b6/study/productList",
      // },
      dict: self.dict,
      dictConfig: { valueKey: "id", labelKey: "name" },
    },
  },
];
