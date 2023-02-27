<template>
<div class="p-10 grid grid-cols-2 gap-2 h-screen md:p-20">
    <div id="logotype" class="col-start-1 col-span-1 self-start"><Logotype/></div>
    <div id="navigation" class="col-start-2 col-span-1 place-self-middle text-right"><Navigation/></div>
    <div id="content" class="col-start-1 col-span-2"><NuxtPage/></div>
    <div id="socials" class="col-start-1 col-span-1 self-end"><Socials/></div>
    <div id="footer" class="col-start-2 col-span-1 place-self-end"><Footer/></div>
</div>
</template>

<script lang="ts">

</script>

<style>
body {

    color: #ffffff;
    font-family: "Roboto", sans-serif;
}
body {
    background: linear-gradient(35deg, #007e6b, #000d0b);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 31s ease infinite;
    -moz-animation: AnimationName 31s ease infinite;
    -o-animation: AnimationName 31s ease infinite;
    animation: AnimationName 31s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:68% 0%}
    50%{background-position:33% 100%}
    100%{background-position:68% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:68% 0%}
    50%{background-position:33% 100%}
    100%{background-position:68% 0%}
}
@-o-keyframes AnimationName {
    0%{background-position:68% 0%}
    50%{background-position:33% 100%}
    100%{background-position:68% 0%}
}
@keyframes AnimationName {
    0%{background-position:68% 0%}
    50%{background-position:33% 100%}
    100%{background-position:68% 0%}
}



</style>