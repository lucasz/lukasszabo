<template>
<div class="p-20 grid grid-cols-2 gap-2 h-screen">
    <div id="logotype" class="col-start-1 col-span-1 self-start"><Logotype/></div>
    <div id="navigation" class="col-start-2 col-span-1 text-right"><Navigation/></div>
    <div id="content" class="col-start-1 col-span-2"><NuxtPage/></div>
    <div id="socials" class="col-start-1 col-span-1 self-end"><Socials/></div>
    <div id="footer" class="col-start-2 col-span-1 place-self-end"><Footer/></div>
</div>
</template>

<script lang="ts">

</script>

<style>
body {
    background-color:#000C0A;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
}
</style>