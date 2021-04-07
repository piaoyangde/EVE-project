<template>
  <div id="app">
    <!-- <router-view></router-view> -->

    <button @click="finduser">查询用户</button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import { UserModel } from "../dbModel/db";

export default {
  name: "electron",
  methods: {
    finduser() {
      UserModel.find((err, res) => {
        if (err) {
          alert("查询错误");
          return;
        }
        console.log(res[0]._doc.name, res[0]._doc.phone);
      });
    },
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
/* CSS */
</style>
