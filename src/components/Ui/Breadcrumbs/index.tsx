import Link from 'next/link';

type Props = {
  segment: string
  segments: string[]
  breadcrumbs: {
    path: string;
    segment: string;
    breadcrumb: string;
  }[][]
}

export const Breadcrumbs = (props: Props) => {

  const { segment, segments, breadcrumbs } = props

  return (
    <ul className='c_breadcrumbs'>
      {
      segments[0] != '(TOP)' &&
        <li className='c_breadcrumbs_item'><Link href='/'>ホーム</Link></li>
      }
      {
        breadcrumbs.map((item, index) => {
          return (
            <li key={index} className='c_breadcrumbs_item'>
              <Link href={item[0].segment !== segment ? item[0].path : ''}>
                {item[0].breadcrumb}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Breadcrumbs