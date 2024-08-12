const host = process.env.LOCALHOST_URL

export const getList = async() => {
  const res = await fetch(host+'/api/todo')
  const data = res.json()

  return data
}