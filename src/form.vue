<template>
  <a-row>
    <a-form :form="form">
      <base-form
        v-for="item in formList"
        :key="item.name"
        :data="item"
        :form="form"
      />
    </a-form>
    <a-button @click="changeDict">按钮</a-button>
  </a-row>
</template>
<script>
import baseForm from "./components/baseForm/baseForm";
import { formList } from "./formList";
export default {
  name: "form-test",
  data() {
    return {
      dict: [
        {
          id: "1",
          name: "1",
        },
      ],
      form: this.$form.createForm(this),
      formList: [],
    };
  },
  created() {
    this.formList = formList(this);
  },
  methods: {
    changeDict() {
      this.dict = [{ id: "2", name: "2" }];
      // this.formList = formList(this);
    },
  },
  components: { baseForm },
};
</script>
