import moji from '@eai/moji';

export const changeWordKana = (textData: string) => {
  const changeKana = moji(textData)
    .convert('HG', 'KK') // ひらがな→カタカナ
    .convert('ZS', 'HS') // 全角スペース→半角スペース
    .convert('ZK', 'HK') // 全角カナ→半角カナ
    .convert('ZE', 'HE') //全角記号→半角記号
    .toString();

    return changeKana
}
