document.addEventListener('DOMContentLoaded', function () {
    const dataDisplay = document.getElementById('dataDisplay');
    const countDisplay = document.getElementById('countDisplay');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let intervalId; // 用于存储setInterval的ID
    let count = 0;

    function fetchData() {
        fetch('https://example.com/api/data')
            .then(response => response.json())
            .then(data => {
                dataDisplay.innerText = JSON.stringify(data);
                count++;
                countDisplay.innerText = count; // 更新计数显示
            })
            .catch(error => {
                console.error('Error:', error);
                count++; // 处理失败时也累计计数
                countDisplay.innerText = count; // 更新计数显示
            });
    }

    startBtn.addEventListener('click', function () {
        // 开始查询按钮点击事件
        intervalId = setInterval(fetchData, 1000);
        startBtn.disabled = true; // 禁用开始按钮
        stopBtn.disabled = false; // 启用停止按钮
    });

    stopBtn.addEventListener('click', function () {
        // 停止查询按钮点击事件
        clearInterval(intervalId);
        startBtn.disabled = false; // 启用开始按钮
        stopBtn.disabled = true; // 禁用停止按钮
    });

    // 初始立即执行一次，以免等待间隔时间
    fetchData();
});
