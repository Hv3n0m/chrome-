chrome.contextMenus.create({
    type:'normal',
    title:'使用google翻译....',
    id: 'cn',
    contexts: ['selection'],
    onclick: translate
});

function translate(info, tab){
    var url = 'http://fanyi.baidu.com/?aldtype=85#en/zh/'+info.selectionText;
    window.open(url, '_blank');
}