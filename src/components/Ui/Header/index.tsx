'use client'

import { useSearchParams } from "next/navigation";

const Header = () => {

  // クエリパラメータにiframeが含まれていたらheaderを非表示
  const searchParams = useSearchParams();
  const getParams = searchParams.get('iframe')

  return (
    <header className={`l_header ${ getParams ? 'l_header_hidden' : '' }`}></header>
  )
}

export default Header