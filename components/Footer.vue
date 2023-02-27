<template>
    <span class="inline-block align-text-bottom text-xs">© {{currentYear}} lukasszabo.com</span>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2023
    };
  }
};
</script>
<style scoped>
span {
  color:#fff
}
</style>