export type addList = {
  id: number,
  title: string,
  date: string,
  done: boolean
}

export type post = {
  id: number,
  title: string,
  date: string,
  done: boolean
}

export type deleteData = {
  id: Array<number>
}