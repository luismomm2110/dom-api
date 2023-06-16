let table = document.getElementById('bagua-table');

table.onclick = function(event) {
    let target = event.target;

    if (target.tagName != 'TD') return;

    editStart(target);
}
function editStart(td) {
    area = document.createElement('textarea');
    area.style.width = td.clientWidth + 'px';
    area.style.height = td.clientHeight + 'px';
    area.value = td.innerHTML;


    td.replaceWith(area);
    area.insertAdjacentHTML('afterend', '<div><button id="ok">OK</button><button id="cancel">CANCEL</button></div>');
    area.focus()
}
