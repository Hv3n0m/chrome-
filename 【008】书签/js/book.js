chrome.bookmarks.create({
    parentId: '1',
    index: 0,
    title: 'baidu',
    url: 'http://www.baidu.com/'
},
    function(bookmark){
        console.log(bookmark);
    }
)

// onCreated事件用以监控书签的创建行为
chrome.bookmarks.onCreated.addListener(function(bookmark){
    console.log(bookmark);
});
// onRemoved事件用以监控书签的移除行为
chrome.bookmarks.onRemoved.addListener(function(id, removeInfo){
    console.log('Bookmark '+id+' has been removed:');
    console.log(removeInfo);
});

// onChanged事件用以监控书签的更新行为
chrome.bookmarks.onChanged.addListener(function(id, changeInfo){
    console.log('Bookmark '+id+' has been changed:');
    console.log(changeInfo);
});

// onMoved事件用以监控书签的移动行为
chrome.bookmarks.onMoved.addListener(function(id, moveInfo){
    console.log('Bookmark '+id+' has been moved:');
    console.log(moveInfo);
});


// onChildrenReordered事件用以监控一个书签分组下的更改子节点顺序的行为
chrome.bookmarks.onChildrenReordered.addListener(function(id, reorderInfo){
    console.log('Bookmark '+id+' has a new children order:');
    console.log(reorderInfo);
});

// onImportBegan和onImportEnded事件分别用以监控导入书签开始和结束的行为
// onImportBegan(function(){
//     console.log('Bookmark import began.');
// });

// onImportEnded(function(){
//     console.log('Bookmark import ended.');
// });