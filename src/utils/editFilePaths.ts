export const deleteAuthenticated = (path: string) => {
  const deleteString = '(authenticated)'
  const result = path.replace(deleteString, '')

  return result
}
