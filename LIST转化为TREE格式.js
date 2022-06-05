const list = [
    { id: 1, name: '部门 A', parentId: 0 },
    { id: 2, name: '部门 B', parentId: 0 },
    { id: 3, name: '部门 C', parentId: 1 },
    { id: 4, name: '部门 D', parentId: 1 },
    { id: 5, name: '部门 E', parentId: 2 },
    { id: 6, name: '部门 F', parentId: 3 },
    { id: 7, name: '部门 G', parentId: 2 },
    { id: 8, name: '部门 H', parentId: 4 }
];
// 递归
function convert1(list, parentId) {
    return list.filter(item => {
        // 一级
        if (item.parentId === parentId) {
            const children = convert1(list, item.id);
            if (children.length) item.children = children
            return true
        }
        return false
    })
}
// 递归
function convert2(list, parentId) {
    return list.filter(item => {
        // 一级
        if (item.parentId === parentId) {
            return true
        }
        const parent = list.find(parent => parent.id === item.parentId)
        if (!parent.children) parent.children = []
        parent.children.push(item);
        return false
    })
}


const arr = convert2(list, 0)
console.log('========arr============================');
console.log(JSON.stringify(arr));
console.log('========arr============================');