<template>
    <div>
        <div
            class="app-toast"
            :class="{'info': type=== 'info','success': type=== 'success','wraning': type=== 'wraning','danger': type=== 'danger'}"
        >
        {{text}}</div>
    </div>
</template>

<script>
export default {
  props: ["text", "type"],
  data() {
    return {};
  },
  mounted() {
  }
};
</script>



<style scoped>
.app-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.info {
  background: #00aaee;
}
.success {
  background: #00ee6b;
}
.wraning {
  background: #eea300;
}
.danger {
  background: #ee000c;
}
</style>
