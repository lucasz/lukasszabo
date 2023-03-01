// middleware/auth.js
export default defineNuxtRouteMiddleware((to, _from) => {
    const user = userSupabaseUser();
  
    if (!user.value) {
      return navigateTo('/login');
    }
  });