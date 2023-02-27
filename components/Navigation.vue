<template>

<nav class="hidden md:block">
                <nuxt-link to="/about-me">About me</nuxt-link>
                <nuxt-link to="/projects">Projects</nuxt-link>
                <nuxt-link to="mailto:lukas.szabo@luckyproject.sk">Hire me</nuxt-link>
</nav>
<div class="flex justify-end" style="height:100px">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="18" viewBox="0 0 50 18" class="inline md:hidden" style="height: 100px;">
  <g id="Group_4" data-name="Group 4" transform="translate(-898 -121)">
    <rect id="Rectangle_6" data-name="Rectangle 6" width="50" height="2" transform="translate(898 129)" fill="#fff"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="40" height="2" transform="translate(898 121)" fill="#fff"/>
    <rect id="Rectangle_7" data-name="Rectangle 7" width="40" height="2" transform="translate(898 137)" fill="#fff"/>
  </g>
</svg>

</div>


</template>
<style scoped>
a {
    margin-left: 20px;
    line-height: 100px;
    text-transform: uppercase;
}
a:hover {
    color: #2DFFD8;
}
.router-link-active {
    color:#2DFFD8;
}
</style>