//TODO: Please write code in this file.
function printInventory(inputs) {
    var goods='***<没钱赚商店>购物清单***\n',inputs_a=[],footing=0;
    inputs_a[0]=inputs[0];
    inputs_a[0].count=0;

    for (var x = 0; x < inputs.length; x++) {
        for (var y = 0; y < inputs_a.length; y++) {
            if (inputs_a[y].barcode==inputs[x].barcode) {
                inputs_a[y].count++;

            }else{

                goods=goods+('名称：'+inputs_a[y].name+'，数量：'+inputs_a[y].count+ inputs_a[y].unit+'，单价：'+ inputs_a[y].price.toFixed(2) +'(元)' +'，小计：'+(inputs_a[y].count*inputs_a[y].price).toFixed(2)+'(元)\n');
                footing=footing+inputs_a[y].count*inputs_a[y].price;
                inputs_a[y]=inputs[x];
                inputs_a[y].count=1;

            }

        }

    }

    for (var i = 0; i < inputs_a.length; i++) {
        goods=goods+('名称：'+inputs_a[i].name+'，数量：'+inputs_a[i].count+ inputs_a[i].unit+'，单价：'+ inputs_a[i].price.toFixed(2) +'(元)' +'，小计：'+(inputs_a[i].count*inputs_a[i].price).toFixed(2)+'(元)\n');
        footing=footing+inputs_a[i].count*inputs_a[i].price;
    }
    console.log(goods+'----------------------\n'+'总计：'+footing.toFixed(2)+'(元)\n' +'**********************');


}
