<template>
    <span class="inline-block align-text-bottom">© {{currentYear}} lukasszabo.com</span>
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