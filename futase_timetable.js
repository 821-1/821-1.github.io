"use strict";
const futase_timeTable = [
    { "id": 1, "type": 1, "depart": "06:22", "arriveBT": "06:30", "arriveSta": null, "arriveTenjin": null },
    { "id": 2, "type": 3, "depart": "06:52", "arriveBT": "07:00", "arriveSta": "07:05", "arriveTenjin": null },
    { "id": 3, "type": 1, "depart": "07:07", "arriveBT": "07:15", "arriveSta": null, "arriveTenjin": null },
    { "id": 4, "type": 2, "depart": "07:23", "arriveBT": "07:31", "arriveSta": "07:36", "arriveTenjin": null },
    { "id": 5, "type": 3, "depart": "08:04", "arriveBT": "08:12", "arriveSta": "08:17", "arriveTenjin": null },
    { "id": 6, "type": 1, "depart": "08:26", "arriveBT": "08:34", "arriveSta": null, "arriveTenjin": null },
    { "id": 7, "type": 2, "depart": "08:42", "arriveBT": "08:50", "arriveSta": "08:55", "arriveTenjin": null },
    { "id": 8, "type": 1, "depart": "09:29", "arriveBT": "09:37", "arriveSta": null, "arriveTenjin": null },
    { "id": 9, "type": 1, "depart": "10:04", "arriveBT": "10:12", "arriveSta": null, "arriveTenjin": null },
    { "id": 10, "type": 2, "depart": "10:32", "arriveBT": "10:40", "arriveSta": "10:45", "arriveTenjin": null },
    { "id": 11, "type": 1, "depart": "11:23", "arriveBT": "11:31", "arriveSta": null, "arriveTenjin": null },
    { "id": 12, "type": 1, "depart": "12:10", "arriveBT": "12:18", "arriveSta": null, "arriveTenjin": null },
    { "id": 13, "type": 2, "depart": "12:32", "arriveBT": "12:40", "arriveSta": "12:45", "arriveTenjin": null },
    { "id": 14, "type": 11, "depart": "12:39", "arriveBT": "12:46", "arriveSta": null, "arriveTenjin": "13:50" },
    { "id": 15, "type": 2, "depart": "13:32", "arriveBT": "13:40", "arriveSta": "13:45", "arriveTenjin": null },
    { "id": 16, "type": 1, "depart": "14:10", "arriveBT": "14:18", "arriveSta": null, "arriveTenjin": null },
    { "id": 17, "type": 2, "depart": "14:32", "arriveBT": "14:40", "arriveSta": "14:45", "arriveTenjin": null },
    { "id": 18, "type": 1, "depart": "15:10", "arriveBT": "15:18", "arriveSta": null, "arriveTenjin": null },
    { "id": 19, "type": 2, "depart": "15:32", "arriveBT": "15:40", "arriveSta": "15:45", "arriveTenjin": null },
    { "id": 20, "type": 1, "depart": "16:10", "arriveBT": "16:18", "arriveSta": null, "arriveTenjin": null },
    { "id": 21, "type": 2, "depart": "16:32", "arriveBT": "16:40", "arriveSta": "16:45", "arriveTenjin": null },
    { "id": 22, "type": 11, "depart": "16:34", "arriveBT": "16:41", "arriveSta": null, "arriveTenjin": "17:49" },
    { "id": 23, "type": 1, "depart": "17:10", "arriveBT": "17:40", "arriveSta": null, "arriveTenjin": null },
    { "id": 24, "type": 2, "depart": "17:32", "arriveBT": "17:40", "arriveSta": "17:45", "arriveTenjin": null },
    { "id": 25, "type": 2, "depart": "18:32", "arriveBT": "18:40", "arriveSta": "18:45", "arriveTenjin": null },
    { "id": 26, "type": 11, "depart": "18:39", "arriveBT": "18:46", "arriveSta": null, "arriveTenjin": "19:54" },
    { "id": 27, "type": 1, "depart": "19:01", "arriveBT": "19:09", "arriveSta": null, "arriveTenjin": null },
    { "id": 28, "type": 11, "depart": "19:39", "arriveBT": "19:46", "arriveSta": null, "arriveTenjin": "20:50" },
    { "id": 29, "type": 2, "depart": "19:52", "arriveBT": "20:00", "arriveSta": "20:04", "arriveTenjin": null },
];
const futase_table = document.createElement('table');
if (futase_timeTable.length > 0) {
    // keyof TimeTableRow を使ってキーを取得
    const keys = ['type', 'depart', 'arriveBT', 'arriveSta', 'arriveTenjin'];
    const headerNames = {
        'type': '行先番号\n経由地\n行先',
        'depart': '九工大\n発',
        'arriveBT': '飯塚BT\n着',
        'arriveSta': '新飯塚駅\n着',
        'arriveTenjin': '天神高速\nバスターミナル\n着'
    };
    // --- ヘッダーの作成 ---
    const trHeader = document.createElement('tr');
    for (const key of keys) {
        const th = document.createElement('th');
        th.textContent = headerNames[key] || key;
        trHeader.appendChild(th);
    }
    futase_table.appendChild(trHeader);
    // --- テーブル本体の作成 ---
    for (let i = 0; i < futase_timeTable.length; i++) {
        const tr = document.createElement('tr');
        for (const key of keys) {
            const td = document.createElement('td');
            const cellValue = futase_timeTable[i][key];
            if (key === 'type') {
                if (cellValue == 11) {
                    td.textContent = "特急\n卸商団地\n天神";
                }
                else if (cellValue === 1) {
                    td.textContent = "2 \n\n飯塚バスターミナル";
                }
                else if (cellValue === 2) {
                    td.textContent = "2\n飯塚バスターミナル・新飯塚駅\n西鉄飯塚営業所";
                }
                else if (cellValue === 3) {
                    td.textContent = "2\n飯塚バスターミナル・新飯塚駅\n近畿大学前";
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
        futase_table.appendChild(tr);
    }
}
document.getElementById('futase')?.appendChild(futase_table);
