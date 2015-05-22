//TODO: Please write code in this file.
function printInventory(inputs) {

    var goods='***<没钱赚商店>购物清单***\n',a=[],footing=0;

    for (var i = 0; i < inputs.length; i++) {
        goods=goods+(
            '名称：'+inputs[i].name+
            '，数量：'+inputs[i].count+ inputs[i].unit+
            '，单价：'+ inputs[i].price.toFixed(2) +'(元)' +
            '，小计：'+(inputs[i].count*inputs[i].price).toFixed(2)+'(元)\n');
        footing=footing+inputs[i].count*inputs[i].price;

    }
    console.log(goods+'----------------------\n'+'总计：'+footing.toFixed(2)+'(元)\n' +'**********************');

}
