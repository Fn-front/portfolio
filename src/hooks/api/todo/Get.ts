const host = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:2937'

export const getList = async() => {
  const res = await fetch(host+'/api/todo')
  const data = res.json()

  return data
}