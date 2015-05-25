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
            if (barcode_a[i] === goods[j].barcode) {
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
            var sub, chu;
            for ( i = 0; i < inputs_a.length; i++) {
                if (sale_barcode[0].barcodes[i] === barcode ) {
                    chu =  inputs_a[m].count-parseInt( inputs_a[m].count/3);
                    sub = inputs_a[m].price*chu;
                    break;
                }else {
                    sub = inputs_a[m].count*inputs_a[m].price;
                }
            }
            return sub;
        }

    function subtotal_save(){
        var sale_number = [];
        var sub=0, chu, chu_all='节省：';
        for ( i = 0; i < inputs_a.length; i++) {
            for (var m=0;m<inputs_a.length;m++  ){
                if (sale_barcode[0].barcodes[i] === inputs_a[m].barcode ) {
                    chu =  parseInt( inputs_a[m].count/3);
                    sub = sub+(inputs_a[m].price*chu);
                    break;
                }
            }
        }
        chu_all = chu_all+sub.toFixed(2);
        return chu_all;
    }




        for (var m=0; m<inputs_a.length; m++) {
            stamp = stamp + (
                '名称：' + inputs_a[m].name +
                '，数量：' + inputs_a[m].count + inputs_a[m].unit +
                '，单价：' + inputs_a[m].price.toFixed(2) + '(元)' +
                '，小计：' + subtotal(inputs_a[m].barcode).toFixed(2) +
                '(元)\n'
                );
            footing = footing+subtotal(inputs_a[m].barcode);
        }

        function largess(){
            var name, count, largess_all='挥泪赠送商品：\n';
            for ( i = 0; i < inputs_a.length; i++) {
                for (var m=0;m<inputs_a.length;m++  ){
                    if (sale_barcode[0].barcodes[i] === inputs_a[m].barcode ) {
                        name = inputs_a[m].name;
                        count = parseInt( inputs_a[m].count/3)+inputs_a[m].unit;
                        largess_all=largess_all +'名称：' + name +'，数量：' + count + '\n';
                    }
                }
            }
        largess_all=largess_all+'----------------------\n';
        return largess_all;
}

        console.log(
            stamp +
            '----------------------\n'+
            largess()+
            '总计：'+ footing.toFixed(2) +
            '(元)\n' +
            subtotal_save() + '(元)\n' +
            '**********************'
            );
}
