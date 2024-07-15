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
    <>
      {
      segments[0] != '(TOP)' &&
        <Link href='/'>ホーム</Link>
      }
      {
        breadcrumbs.map((item, index) => {
          return (
            <Link key={index} href={item[0].segment !== segment ? item[0].path : ''}>
              {item[0].breadcrumb}
            </Link>
          )
        })
      }
    </>
  )
}

export default Breadcrumbs