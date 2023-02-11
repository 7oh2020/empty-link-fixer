const targetTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
const newLabel = "　";

for (let i = 0; i < targetTags.length; i++) {
  const headers = document.querySelectorAll(targetTags[i]);
  for (let j = 0; j < headers.length; j++) {
    const anchor = headers[j].querySelector("a");
    // 見出しタグの配下にaタグが見つからない場合はスルー
    if (!anchor) {
      continue;
    }

    const label = anchor.innerText;
    // リンクのラベルが空ではない場合はスルー
    if (label && label.length > 0) {
      continue;
    }

    // aria-hiddenがtrueでないとhrefの値が読み上げられてしまうのでtrueをセットする
    if (
      !anchor.hasAttribute("aria-hidden") ||
      anchor.getAttribute("aria-hidden") === "false"
    ) {
      anchor.setAttribute("aria-hidden", "true");
    }

    // リンクに代替テキストを挿入する
    anchor.innerText = newLabel;
  }
}
