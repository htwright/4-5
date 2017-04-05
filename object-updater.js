function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

var newObj = { 
    foo: 'this',
    bar: 'yolo',
    bizz: 'hey',
    bang: 'thang'
};

var result = updateObject(newObj);

console.log(result);