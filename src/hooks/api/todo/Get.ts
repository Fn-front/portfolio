const host = process.env.NEXT_PUBLIC_API_URL

export const getList = async() => {
  const res = await fetch(host+'/api/todo')
  const data = res.json()

  return data
}