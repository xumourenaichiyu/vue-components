<script>
import _ from "lodash";
import axios from "axios";
export default {
  name: "mySelect",
  props: ["form", "itemProps", "config"],
  data() {
    return {
      options: [],
    };
  },
  mounted() {
    if (!_.isEmpty(this.config.fetchConfig)) {
      this.getDict();
    }
  },
  methods: {
    getDict(value) {
      const { config = {} } = this;
      const { fetchConfig = {} } = config;
      const { url, dataPath, method = "get", searchParams = {} } = fetchConfig;
      const { searchKey, searchValue } = searchParams;
      const params = !_.isEmpty(searchParams)
        ? {
            method,
            [method === "get" ? "params" : "data"]: {
              [searchKey]: searchValue || value || "",
            },
          }
        : { method };
      axios(url, params).then((res) => {
        this.options = _.get(res, dataPath || "data", []);
      });
    },
  },
  render() {
    const { form, itemProps, config, options } = this;
    const { name, formItemProps } = itemProps;
    let { dict = [], dictConfig, fetchConfig } = config;
    if (fetchConfig) {
      dict = options;
    }
    if (dictConfig) {
      const { valueKey, labelKey } = dictConfig;
      dict = dict.map((ele) => ({
        value: ele[valueKey],
        label: ele[labelKey],
      }));
    }
    return (
      <a-form-item {...formItemProps}>
        {form.getFieldDecorator(name)(
          <a-select>
            {dict.map((item) => {
              return (
                <a-select-option value={item.value}>
                  {item.label}
                </a-select-option>
              );
            })}
          </a-select>
        )}
      </a-form-item>
    );
  },
};
</script>
