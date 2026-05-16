import timeTableData from './dates/weekdays_usual.json';
// インポートしたJSONデータに型を適用
const timeTable = timeTableData;
const table = document.createElement('table');
// データが空でないか確認してから処理を行うと安全です
if (timeTable.length > 0) {
    // 1. ヘッダー行の作成
    const headerTr = document.createElement('tr');
    for (const key in timeTable[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        headerTr.appendChild(th);
    }
    table.appendChild(headerTr);
    // 2. データ行の作成
    for (const row of timeTable) {
        const tr = document.createElement('tr');
        // ヘッダーと同じ順序でデータを入れるため、timeTable[0]のキーを基準にループします
        for (const key in timeTable[0]) {
            const td = document.createElement('td');
            // 型安全のため key を keyof TimeTableRow として扱う
            const value = row[key];
            // nullの場合は空文字（またはハイフン '-' など）を表示し、それ以外は文字列化して代入
            td.textContent = value !== null ? String(value) : '';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
const container = document.getElementById('gakunai');
// コンテナが存在すれば、その中に作成した table 要素を追加（描画）する
if (container) {
    container.appendChild(table);
}
else {
    console.error('テーブルを表示するための要素が見つかりませんでした。');
}
