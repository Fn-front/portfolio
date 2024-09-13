export const handleCopyToClipboard = (element: HTMLElement) => {
  const ranges = [];
  const selection = window.getSelection();
  const range = document.createRange();
  let result = false;

  for (let i = 0; i < selection!.rangeCount; i += 1) {
    ranges[i] = selection!.getRangeAt(i);
  }

  range.selectNodeContents(element);
  selection!.removeAllRanges();
  selection!.addRange(range);
  result = document.execCommand('copy');
  selection!.removeAllRanges();

  for (let i = 0; i < ranges.length; i += 1) {
    selection!.addRange(ranges[i]);
  }

  return result;
};
