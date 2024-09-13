'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  segment: string;
  segments: string[];
  breadcrumbs: {
    path: string;
    segment: string;
    breadcrumb: string;
  }[][];
};

export const Breadcrumbs = (props: Props) => {
  const { segment, segments, breadcrumbs } = props;

  // クエリパラメータにiframeが含まれていたらパンくずを非表示
  const searchParams = useSearchParams();
  const getParams = searchParams.get('iframe');

  return (
    <ul className={`c_breadcrumbs ${getParams ? 'c_breadcrumbs_hidden' : ''}`}>
      {segments[0] != '(TOP)' && (
        <li className='c_breadcrumbs_item'>
          <Link href='/' className='c_breadcrumbs_item_link'>
            ホーム
          </Link>
        </li>
      )}
      {breadcrumbs.map((item, index) => {
        return (
          <li
            key={index}
            className={`c_breadcrumbs_item ${item[0].segment == segment ? 'c_breadcrumbs_item_disabled' : null}`}
          >
            <Link
              href={item[0].segment !== segment ? item[0].path : ''}
              className={'c_breadcrumbs_item_link'}
            >
              {item[0].breadcrumb}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
