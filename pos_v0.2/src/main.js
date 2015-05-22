//TODO: Please write code in this file.
function printInventory(inputs) {

    var goods = loadAllItems();
    var cait_list = [];
    var inputs_a = [];
    var stamp = '***<没钱赚商店>购物清单***\n';
    var footing = 0;

    for (var i=0; i<inputs.length; i++) {
        for (var x=0; x<goods.length; x++) {
            if (inputs[i] === goods[x].barcode) {
                var temp = {};
                temp.barcode = goods[x].barcode;
                temp.name = goods[x].name;
                temp.unit = goods[x].unit;
                temp.price = goods[x].price;
                cait_list.push(temp);
            }
        }
    }

    for (var y=0; y<cait_list.length; y++) {
        var test = false;
        for (var z=0; z<inputs_a.length; z++) {
            if (inputs_a[z].barcode === cait_list[y].barcode) {
                inputs_a[z].count++;
                test=true;
                break;
            }
        }
        if (!test) {
            var temp_a = {};
            temp_a.barcode = cait_list[y].barcode;
            temp_a.name = cait_list[y].name;
            temp_a.unit = cait_list[y].unit;
            temp_a.price = cait_list[y].price;
            temp_a.count = 1;
            inputs_a.push(temp_a);
        }
    }

    for (var m=0; m<inputs_a.length; m++) {
        stamp = stamp + (
            '名称：' + inputs_a[m].name +
            '，数量：' + inputs_a[m].count + inputs_a[m].unit +
            '，单价：' + inputs_a[m].price.toFixed(2) + '(元)' +
            '，小计：' + (inputs_a[m].count*inputs_a[m].price).toFixed(2) + '(元)\n'
            );
        footing = footing+inputs_a[m].count*inputs_a[m].price;
    }

    console.log(
        stamp +
        '----------------------\n'+
        '总计：'+footing.toFixed(2) +
        '(元)\n' +'**********************'
        );
}
