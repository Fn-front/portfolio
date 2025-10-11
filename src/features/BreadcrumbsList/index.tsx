'use client';

import { useSelectedLayoutSegments, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Ui/Breadcrumbs';
import { route } from '@/functions/routes';

const routes = route();

export const BreadcrumbsList = () => {
  // 現在の表示しているページのディレクトリまですべての情報
  const segments = useSelectedLayoutSegments();
  const params = useParams();
  const [dynamicTitle, setDynamicTitle] = useState<string>('');

  // 現在の表示しているページのディレクトリ
  const segment = segments[segments.length - 1];

  // 動的ルートの場合、タイトルを取得
  useEffect(() => {
    if (params?.id && segments.includes('achievements')) {
      fetch(`/api/profile/achievement/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.title) {
            setDynamicTitle(data.title);
          }
        })
        .catch((error) => {
          console.error('Failed to fetch achievement title:', error);
        });
    }
  }, [params, segments]);

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
