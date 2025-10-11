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
  dynamicTitle?: string;
};

export const Breadcrumbs = (props: Props) => {
  const { segments, breadcrumbs, dynamicTitle } = props;

  // クエリパラメータにiframeが含まれていたらパンくずを非表示
  const searchParams = useSearchParams();
  const getParams = searchParams.get('iframe');

  // 動的セグメントかどうかをチェック（パラメータIDが数字の場合）
  const isDynamicSegment = segments.some((s) => /^\d+$/.test(s));

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
        const isLast = index === breadcrumbs.length - 1 && !isDynamicSegment;
        return (
          <li
            key={index}
            className={`c_breadcrumbs_item ${isLast ? 'c_breadcrumbs_item_disabled' : ''}`}
          >
            <Link
              href={!isLast ? item[0].path : ''}
              className={'c_breadcrumbs_item_link'}
            >
              {item[0].breadcrumb}
            </Link>
          </li>
        );
      })}
      {isDynamicSegment && dynamicTitle && (
        <li className='c_breadcrumbs_item c_breadcrumbs_item_disabled'>
          <span className='c_breadcrumbs_item_link'>{dynamicTitle}</span>
        </li>
      )}
    </ul>
  );
};

export default Breadcrumbs;
