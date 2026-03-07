'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/Ui/Breadcrumbs';
import { route } from '@/functions/routes';

const routes = route();

type BreadcrumbsListProps = {
  dynamicTitle?: string;
};

export const BreadcrumbsList = ({ dynamicTitle = '' }: BreadcrumbsListProps) => {
  const pathname = usePathname();

  // pathnameからセグメントを抽出
  const segments = pathname.split('/').filter((s) => s);

  // 現在の表示しているページのディレクトリ
  const segment = segments[segments.length - 1];

  // routesと比較し一致しているものを返す
  const breadcrumb = segments
    .map((i) => routes.filter((s) => i == s.segment))
    .filter((i) => i.length != 0);

  // mapの次のfilter：上記で一致しない場合array(0)が入っているので削除する
  const breadcrumbs = breadcrumb.filter((i) => i.length != 0);

  return (
    <Breadcrumbs
      segment={segment}
      segments={segments}
      breadcrumbs={breadcrumbs}
      dynamicTitle={dynamicTitle}
    />
  );
};

export default BreadcrumbsList;
