export const route = () => {
  const routes = [
    {
      path: '/',
      segment: '(TOP)',
      breadcrumb: 'ホーム',
    },
    {
      path: '/code/codeView',
      segment: 'codeView',
      breadcrumb: 'コードビュー',
    },
    {
      path: '/code/codeView/ui/form/inputText',
      segment: 'inputText',
      breadcrumb: 'inputテキスト',
    },
    {
      path: '/code/codeView/ui/form/checkBox',
      segment: 'checkBox',
      breadcrumb: 'チェックボックス',
    },
    {
      path: '/code/codeView/ui/form/radio',
      segment: 'radio',
      breadcrumb: 'radioボタン',
    },
    {
      path: '/code/codeView/ui/layout/cardList',
      segment: 'cardList',
      breadcrumb: 'カードリスト',
    },
    {
      path: '/code/codeView/useCase/startingStyle',
      segment: 'startingStyle',
      breadcrumb: 'starting-style',
    },
    {
      path: '/code/mock',
      segment: 'mock',
      breadcrumb: 'mock',
    },
    {
      path: '/code/mock/todo',
      segment: 'todo',
      breadcrumb: 'todo',
    },
  ];

  return routes;
};
