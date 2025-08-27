type ErrorResponse =
  | Response
  | {
      status?: number;
    };

export const handleFetchError = (response: ErrorResponse) => {
  if (response.status === 404) {
    return 'データが見つかりませんでした';
  } else if (response.status === 500) {
    return 'サーバーエラーが発生しました';
  }

  return '予期せぬエラーが発生しました';
};
