// script.js

let counter = 1;

function addNewElement() {
    const container = document.getElementById("pack");

    const newDiv = document.createElement("div");
    newDiv.id = `element-${counter}`;

    const select1 = createSelect("level", ["1", "2", "3", "4", "0"]);
    newDiv.appendChild(select1);

    const select2 = createSelect("pro_name", ["sdc", "dds", "stf"]);
    newDiv.appendChild(select2);

    const input = createInput("number", "version", "0", 5, 128);
    newDiv.appendChild(input);

    const select3 = createSelect("active", ["make", "svnup", "publish"]);
    newDiv.appendChild(select3);
    
    const deleteButton = createButton(`removeElement('${newDiv.id}')`, "delete");
    newDiv.appendChild(deleteButton);

    const sendButton = createButton(`exex_buttuon('${newDiv.id}')`, " exec ");
    newDiv.appendChild(sendButton);
    const logButton = createButton(`toggleLog('${newDiv.id}')`, " log ");
    newDiv.appendChild(logButton);

    const lineBreak = document.createElement("br");
    newDiv.appendChild(lineBreak);

    const svnversionLabel = document.createElement("span");
    svnversionLabel.textContent = "log:";
    svnversionLabel.style.display = "none"; // 默认隐藏
    newDiv.appendChild(svnversionLabel);
    
    container.appendChild(newDiv);

    counter++;
}
function toggleLog(id) {
    const svnversionLabel = document.getElementById(`${id}`).querySelector('span');
    svnversionLabel.style.display = (svnversionLabel.style.display === 'none') ? 'inline' : 'none';
}
function exex_buttuon(id) {
}
function removeElement(id) {
    const elementToRemove = document.getElementById(id);
    elementToRemove.remove();
}

function createSelect(name, options) {
    const select = document.createElement("select");
    select.name = name;
    select.id = counter;
    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.text = optionValue;
        select.appendChild(option);
    });
    return select;
}

function createInput(type, name, value, maxlength, max) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = value;
    input.maxLength = maxlength;
    input.max = max;
    return input;
}

function createButton(onclick, value) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = value;
    button.onclick = new Function(onclick);
    return button;
}   
let intervalId; // 用于存储setInterval的ID
document.addEventListener('DOMContentLoaded', function () {
  
    const footer = document.getElementById("footer");
    function time_is()
    {
        updateTime();
    }
    function updateTime() {
        const currentTime = new Date();
        const year = currentTime.getFullYear();
        const month = currentTime.getMonth() + 1; // 注意：getMonth() 返回的是 0 到 11
        const day = currentTime.getDate();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // 格式化时间
        const formattedTime =`${year}-${formatTime(month)}-${formatTime(day)} ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        // 将时间显示在页面上的某个元素上，这里以 body 为例
        //document.body.innerHTML = "<h1>当前时间：" + formattedTime + "</h1>";
        footer.innerHTML = formattedTime;
    }
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
    updateTime();
    intervalId = setInterval(time_is, 1000);
}); 
document.addEventListener('beforeunload', function () {
    clearInterval(intervalId);
})
