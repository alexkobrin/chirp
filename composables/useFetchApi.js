export default((url , options = {}) => {

  const {useAuthToken} = useAuth()
    
  return  $fetch(url , {
    method : options.method || "GET",
    body: options.body,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAuthToken().value}`

    }
  })
})