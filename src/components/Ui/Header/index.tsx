'use client'

import { useSearchParams } from "next/navigation";

const Header = () => {

  // クエリパラメータにiframeが含まれていたらheaderを非表示
  const searchParams = useSearchParams();
  const getParams = searchParams.get('iframe')

  return (
    <header className={`l_header`}></header>
  )
}

export default Header