<script>
import { myInput, mySelect } from "./index";
// import _ from "lodash";
export default {
  name: "baseForm",
  props: ["data", "form"],
  methods: {
    getFormItem() {
      const { data, form } = this;
      const {
        type = "input",
        name,
        formItemProps = {},
        fieldProps = {},
        controlProps = {},
        config = {},
      } = data;
      const itemProps = { formItemProps, name, fieldProps, controlProps };
      switch (type) {
        case "input":
          return <myInput form={form} itemProps={itemProps} />;
        case "select":
          return <mySelect form={form} itemProps={itemProps} config={config} />;
      }
    },
  },
  render() {
    const { getFormItem, data } = this;
    const { col = { span: 12 } } = data;
    return <a-col span={col.span}>{getFormItem()}</a-col>;
  },
};
</script>
