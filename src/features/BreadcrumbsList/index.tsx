'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import Breadcrumbs from '@/components/Ui/Breadcrumbs';
import { route } from '@/functions/routes';

const routes = route();

export const BreadcrumbsList = () => {
  // 現在の表示しているページのディレクトリまですべての情報
  const segments = useSelectedLayoutSegments();

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
    />
  );
};

export default BreadcrumbsList;
