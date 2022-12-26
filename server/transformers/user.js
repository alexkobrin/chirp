//   Exclude password  and other unnesesery field
export  const exclude = (user, keys) => {
  for (let key of keys) {
    delete user[key]
  }
  return user
}
 