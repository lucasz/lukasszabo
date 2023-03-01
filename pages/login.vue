<template lang="">
    <div>
        login
    </div>
</template>
<script lang="js">
// pages/login.vue

const client = useSupabaseAuthClient();
const router = useRouter();
const user = useSupabaseUser();

async function login() {
  const { email, password } = credentials;
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (!error) return router.push('/');
  console.log(error);
}

watchEffect(async () => {
  if (user.value) {
    await router.push('/');
  }
});
</script>