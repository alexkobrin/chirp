export default((url , options = {}) => {

  const {useAuthToken} = useAuth()

  return  $fetch(url , {
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAuthToken().value}`

    }
  })
})