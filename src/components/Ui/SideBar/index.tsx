'use client'

import { useSearchParams } from "next/navigation";

const Sidebar = () => {

  // クエリパラメータにiframeが含まれていたらsidebarを非表示
  const searchParams = useSearchParams();
  const getParams = searchParams.get('iframe')

  return (
    <aside className={`l_sidebar ${ getParams ? 'l_sidebar_hidden' : '' }`}>
      <p>sidebar</p>
    </aside>
  )
}

export default Sidebar;