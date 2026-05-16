interface seimon_TimeTableRow {
    id: number;
    type: number;
    depart: string;
    arriveBT: string | null;
    arriveSta: string | null;
}

const seimon_timeTable: seimon_TimeTableRow[]=[
    {"id":1,"type":1,"depart":"08:40","arriveBT":"08:50","arriveSta":"08:55"},
    {"id":2,"type":1,"depart":"10:30","arriveBT":"10:40","arriveSta":"10:45"},
    {"id":3,"type":1,"depart":"12:30","arriveBT":"12:40","arriveSta":"12:45"},
    {"id":4,"type":1,"depart":"13:30","arriveBT":"13:40","arriveSta":"13:45"},
    {"id":5,"type":1,"depart":"14:30","arriveBT":"14:40","arriveSta":"14:45"},
    {"id":6,"type":1,"depart":"15:30","arriveBT":"15:40","arriveSta":"15:45"},
    {"id":7,"type":1,"depart":"16:30","arriveBT":"16:40","arriveSta":"16:45"},
    {"id":8,"type":1,"depart":"17:30","arriveBT":"17:40","arriveSta":"17:45"},
    {"id":9,"type":1,"depart":"18:30","arriveBT":"18:40","arriveSta":"18:45"},
    {"id":10,"type":1,"depart":"19:50","arriveBT":"20:00","arriveSta":"20:04"},
]

const seimon_table = document.createElement('table');

if (seimon_timeTable.length > 0) {
    // keyof TimeTableRow を使ってキーを取得
    const keys: Array<keyof typeof seimon_timeTable[0]> = ['type','depart', 'arriveBT', 'arriveSta'];

    const headerNames: Record<string, string> = {
    'type': '行先番号\n経由地\n行先',
    'depart': '九工大\n発',
    'arriveBT': '飯塚BT\n着',
    'arriveSta': '新飯塚駅\n着',
};

    // --- ヘッダーの作成 ---
    const trHeader = document.createElement('tr');
    
    for (const key of keys) {
        const th = document.createElement('th');
        th.textContent = headerNames[key] || key;
        trHeader.appendChild(th);
    }
    seimon_table.appendChild(trHeader);

    // --- テーブル本体の作成 ---
    for (let i = 0; i < seimon_timeTable.length; i++) {
        const tr = document.createElement('tr');
        for (const key of keys) {
            const td = document.createElement('td');
            
            const cellValue = seimon_timeTable[i][key];
            
            if(key === 'type'){
                if(cellValue === 1){
                    td.textContent="2\n飯塚バスターミナル・新飯塚駅\n西鉄飯塚営業所";
                }
                else{
                    td.textContent="error";
                }
            }
            
            else if (cellValue === null) {
                td.textContent = "ー";
            } else {
                td.textContent = String(cellValue);
            }
            tr.appendChild(td);
        }
        seimon_table.appendChild(tr);
    }
}

document.getElementById('seimon')?.appendChild(seimon_table);