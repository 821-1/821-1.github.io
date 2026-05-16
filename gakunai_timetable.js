"use strict";
const gakunai_TimeTable = [
    { "id": 1, "type": 2, "depart": "8:18", "arriveBT": null, "arriveSta": "8:32" },
    { "id": 2, "type": 12, "depart": "8:41", "arriveBT": null, "arriveSta": "8:55" },
    { "id": 3, "type": 1, "depart": "8:56", "arriveBT": "9:05", "arriveSta": "9:10" },
    { "id": 4, "type": 12, "depart": "9:16", "arriveBT": null, "arriveSta": "9:30" },
    { "id": 5, "type": 1, "depart": "9:46", "arriveBT": "9:55", "arriveSta": "10:00" },
    { "id": 6, "type": 12, "depart": "9:51", "arriveBT": null, "arriveSta": "10:05" },
    { "id": 7, "type": 1, "depart": "10:27", "arriveBT": "10:36", "arriveSta": "10:41" },
    { "id": 8, "type": 2, "depart": "10:40", "arriveBT": "10:49", "arriveSta": "10:54" },
    { "id": 9, "type": 1, "depart": "11:04", "arriveBT": "11:13", "arriveSta": "11:18" },
    { "id": 10, "type": 2, "depart": "11:41", "arriveBT": "11:50", "arriveSta": "11:55" },
    { "id": 11, "type": 1, "depart": "12:23", "arriveBT": "12:32", "arriveSta": "12:37" },
    { "id": 12, "type": 51, "depart": "12:37", "arriveBT": "12:46", "arriveSta": null },
    { "id": 13, "type": 2, "depart": "12:50", "arriveBT": "12:59", "arriveSta": "13:05" },
    { "id": 14, "type": 1, "depart": "13:21", "arriveBT": "13:30", "arriveSta": "13:35" },
    { "id": 15, "type": 2, "depart": "14:03", "arriveBT": "14:12", "arriveSta": "14:17" },
    { "id": 16, "type": 1, "depart": "14:40", "arriveBT": "14:49", "arriveSta": "14:54" },
    { "id": 17, "type": 2, "depart": "14:55", "arriveBT": "15:04", "arriveSta": "15:09" },
    { "id": 18, "type": 1, "depart": "15:40", "arriveBT": "15:49", "arriveSta": "15:54" },
    { "id": 19, "type": 2, "depart": "16:20", "arriveBT": "16:29", "arriveSta": "16:34" },
    { "id": 20, "type": 1, "depart": "16:30", "arriveBT": "16:40", "arriveSta": "16:46" },
    { "id": 21, "type": 51, "depart": "16:32", "arriveBT": "16:41", "arriveSta": null },
    { "id": 22, "type": 2, "depart": "17:10", "arriveBT": "17:20", "arriveSta": "17:26" },
    { "id": 23, "type": 1, "depart": "17:25", "arriveBT": "17:35", "arriveSta": "17:41" },
    { "id": 24, "type": 2, "depart": "17:55", "arriveBT": "18:05", "arriveSta": "18:11" },
    { "id": 25, "type": 1, "depart": "18:15", "arriveBT": "18:25", "arriveSta": "18:31" },
    { "id": 26, "type": 2, "depart": "18:35", "arriveBT": "18:45", "arriveSta": "18:51" },
    { "id": 27, "type": 51, "depart": "18:37", "arriveBT": "18:46", "arriveSta": null },
    { "id": 28, "type": 1, "depart": "18:55", "arriveBT": "19:05", "arriveSta": "19:11" },
    { "id": 29, "type": 2, "depart": "19:20", "arriveBT": "19:29", "arriveSta": "19:34" },
    { "id": 30, "type": 51, "depart": "19:37", "arriveBT": "19:46", "arriveSta": null },
    { "id": 31, "type": 1, "depart": "19:40", "arriveBT": "19:49", "arriveSta": "19:54" },
    { "id": 32, "type": 1, "depart": "20:11", "arriveBT": "20:20", "arriveSta": "20:25" },
    { "id": 33, "type": 2, "depart": "20:45", "arriveBT": "20:54", "arriveSta": "20:59" }
];
const gakunai_table = document.createElement('table');
if (gakunai_TimeTable.length > 0) {
    // keyof TimeTableRow を使ってキーを取得
    const keys = ['type', 'depart', 'arriveBT', 'arriveSta'];
    const headerNames = {
        'type': '種別\n行先',
        'depart': '九工大発',
        'arriveBT': '飯塚BT着',
        'arriveSta': '新飯塚駅着'
    };
    // --- ヘッダーの作成 ---
    const trHeader = document.createElement('tr');
    for (const key of keys) {
        const th = document.createElement('th');
        th.textContent = headerNames[key] || key;
        trHeader.appendChild(th);
    }
    gakunai_table.appendChild(trHeader);
    // --- テーブル本体の作成 ---
    for (let i = 0; i < gakunai_TimeTable.length; i++) {
        const tr = document.createElement('tr');
        for (const key of keys) {
            const td = document.createElement('td');
            const cellValue = gakunai_TimeTable[i][key];
            if (key === 'type') {
                if (cellValue == 51) {
                    td.textContent = "特急\n卸商団地・天神";
                }
                else if (cellValue === 11 || cellValue === 12) {
                    td.textContent = "スクールバス\n新飯塚駅(直行)";
                }
                else if (cellValue === 1 || cellValue === 2) {
                    td.textContent = "スクールバス\n飯塚バスターミナル・新飯塚駅";
                }
                else {
                    td.textContent = "error";
                }
            }
            else if (cellValue === null) {
                td.textContent = "ー";
            }
            else {
                td.textContent = String(cellValue);
            }
            tr.appendChild(td);
        }
        gakunai_table.appendChild(tr);
    }
}
document.getElementById('gakunai')?.appendChild(gakunai_table);
