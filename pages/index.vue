<template>
  <div class="flex justify-between">
    <h1 class="text-4xl md:text-6xl">
      Graphic & Frontend freelancer<br/>based in <span>Bratislava</span>
    </h1>
    <!-- <nuxt-link to="/about-me" class="flex justify-around">see more <svg xmlns="http://www.w3.org/2000/svg" width="200" height="34.854" viewBox="0 0 273.354 34.854">
  <g id="button-more" transform="translate(0 1)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="3" transform="translate(100 14)" fill="#2dffd8"/>
    <path id="Polygon_1" data-name="Polygon 1" d="M15,0,30,30H0Z" transform="translate(270 1) rotate(90)" fill="none" stroke="#2dffd8" stroke-linecap="square" stroke-width="2"/>
  </g>
</svg>
</nuxt-link> -->
</div>
</template>
<script lang="js">
definePageMeta({
  middleware: 'auth',
});
</script>
<style scoped>
h1 {
  font-weight: 100;
}
span {
  color: #2DFFD8;
}
</style>