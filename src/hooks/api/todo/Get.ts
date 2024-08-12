const host = process.env.LOCALHOST_URL ? process.env.LOCALHOST_URL : 'http://127.0.0.1:2937'

export const getList = async() => {
  const res = await fetch(host+'/api/todo')
  const data = res.json()

  return data
}