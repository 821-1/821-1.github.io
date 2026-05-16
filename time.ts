const updateClock = (): void => {
    const clockElement = document.getElementById('current-time');
    
    if (clockElement) {
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${month}/${day} ${hours}:${minutes}:${seconds}`;
        
        clockElement.textContent = timeString;
    }
};

// 1000ミリ秒（1秒）ごとにupdateClockを実行
setInterval(updateClock, 1000);

// 初回実行（ページ読み込み時に即座に表示するため）
updateClock();