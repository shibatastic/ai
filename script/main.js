function searchCopilot(event, form) {
  // フォームの送信を防ぐ
  event.preventDefault();

  // 入力値を取得
  const query = form.querySelector("textarea.request").value;

  // クエリをエンコードして URL を作成
  const url = `https://copilot.com?q=${encodeURIComponent(query)}`;

  // 別ウィンドウで開く
  window.open(url, "_blank", "noopener,noreferrer");
}

//     - document.querySelector(".request").value で入力された文字を取得
// - encodeURIComponent(query) でURLエンコードして、安全に送信
// - window.open(url, "_blank") で別ウィンドウで開く
// - window.open(url, "_blank", "noopener,noreferrer"); の第3引数に noopener,noreferrer を指定することで、セキュリティ強化が可能。
// - noopener は、新しいタブから元のページ (window.opener) への参照を遮断し、悪意あるページが元のページを操作するのを防ぐ。
// - noreferrer は、リンク元の情報（リファラー）を送信しないようにする。
// 各ボタンにonclickイベントを設定する際に、thisを使ってクリックされたボタンの親要素を辿り、その中のinput[type="text"]を取得することで、適切な値を送信できます。
