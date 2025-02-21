export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) {
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      return navigateTo('/')
    }

    try {
      const { data: responseData }: any = await useFetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          body:JSON.stringify(
            {
                username: atob(user.u),
                password: atob(user.p)
            }
          )
      })

      if (!responseData.value?.token) {
        return navigateTo('/')
      }
    } catch (error) {
      return navigateTo('/')
    }
  }
})
