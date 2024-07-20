export const route = () => {
  const routes = [
    {
      path: "/",
      segment: '(TOP)',
      breadcrumb: 'ホーム',
    },
    {
      path: "/codeView",
      segment: 'codeView',
      breadcrumb: 'コードビュー',
    },
    {
      path: "/codeView/ui/form/inputText",
      segment: 'inputText',
      breadcrumb: 'inputテキスト',
    },
    {
      path: "/codeView/ui/form/radio",
      segment: 'radio',
      breadcrumb: 'radioボタン',
    }  ];

  return routes
}