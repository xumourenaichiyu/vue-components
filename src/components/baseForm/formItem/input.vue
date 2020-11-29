<script>
export default {
  name: "myInput",
  props: ["form", "itemProps"],
  render() {
    const { form, itemProps } = this;
    const { name, formItemProps, fieldProps, controlProps } = itemProps;
    return (
      <a-form-item {...formItemProps}>
        {form.getFieldDecorator(name, { ...fieldProps })(
          <a-input {...controlProps} />
        )}
      </a-form-item>
    );
  },
};
</script>
