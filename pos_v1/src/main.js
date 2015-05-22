//TODO: Please write code in this file.
function printInventory(inputs) {

    var goods = loadAllItems();
    var sale_barcode = loadPromotions();
    var cait_list = [];
    var inputs_a = [];
    var stamp = '***<没钱赚商店>购物清单***\n';
    var footing = 0;
    var barcode_a = [];
    var number = [];

    for (var i=0; i<inputs.length; i++) {
        var inputs_list = inputs[i].split('-');
        barcode_a[i] = inputs_list[0];
        number[i] =  (inputs_list[1]*1 || 1);
    }

    for ( i=0; i<barcode_a.length; i++) {
        for (var j= 0; j<goods.length; j++) {
            if (barcode[i] === goods[j].barcode) {
                var temp = {
                    barcode : goods[j].barcode,
                    name : goods[j].name,
                    unit : goods[j].unit,
                    price : goods[j].price,
                    count : number[i]
                    };
                    cait_list.push(temp);
            }
        }
    }

    for (var y=0; y<cait_list.length; y++) {
        var test = false;
        for (var z=0; z<inputs_a.length; z++) {
            if (inputs_a[z].barcode === cait_list[y].barcode) {
                inputs_a[z].count += cait_list[y].count;
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
            temp_a.count = cait_list[y].count;
            inputs_a.push(temp_a);
        }
    }

    function subtotal(barcode){
        var sale_number = [];
        var sub;
        for ( i = 0; i < inputs_a.length; i++) {
            if (barcode === sale_barcode[i]) {
                sub = (inputs_a[m].count*inputs_a[m].price).toFixed(2);
            }else {
                sub = (inputs_a[m].count*inputs_a[m].price).toFixed(2);
            }
        }
        return sub;
    }





    for (var m=0; m<inputs_a.length; m++) {
        stamp = stamp + (
            '名称：' + inputs_a[m].name +
            '，数量：' + inputs_a[m].count + inputs_a[m].unit +
            '，单价：' + inputs_a[m].price.toFixed(2) + '(元)' +
            '，小计：' + subtotal(inputs_a[m].barcode) + //+ (inputs_a[m].count*inputs_a[m].price).toFixed(2) +
            '(元)\n'
            );
        footing = footing+inputs_a[m].count*inputs_a[m].price;
    }


    var largess = [];
    lergess =(
        '挥泪赠送商品：\n' +
        '名称：' + '' +
        '，数量：' + '' + '' +
        '----------------------\n'
        );

    console.log(
        stamp +
        '----------------------\n'+
        '总计：'+footing.toFixed(2) +
        '(元)\n' +'**********************'
        );
}
