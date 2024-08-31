export const getList = async() => {
  const res = await fetch('/api/todo')
  const data = res.json()

  return data
}