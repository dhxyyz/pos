var receive = require('../../spec/fixtures.js');
var Tools = require('./Tools');
var _= require('../lodash');
function Pos() {
    var barcode = receive.loadAllItems();
    var commodity = receive.loadPromotions()[0].barcodes;
    var tools = new Tools();
    var listing = '';
    var giving = '';
    var he = 0;
    var save = 0;

    this.print_the_list = function(result) {
        _.each(result, function(array, i) {
            _.each(barcode, function(collection, j) {
                if (i===collection.barcode) {

                    for (var x = 0; x < commodity.length; x++) {
                        if (i===commodity[x]) {
                            total = subtotal_func(i,barcode,array);
                            break;
                        }else {
                            total = subtotal_func(i,barcode,array);
                        }
                    }

                    he += total;
                    listing +=
                            '名称：'+collection.name+
                            '，数量：'+array + collection.unit+
                            '，单价：'+collection.price.toFixed(2)+'(元)，'+
                            '小计：'+total.toFixed(2) +'(元)\n';
                }
            });
        });
        _.each(result, function(array, i) {
            _.each(commodity, function(collection, j) {
                if (i===collection) {
                    giving += giving_array(barcode,collection,array);//商品， 打折， 数量
                }else {
                }
            });
        });
        _.each(result,function(array, i) {
            for (var j = 0; j < commodity.length; j++) {
                if (i===commodity[j]) {
                    total = subtotal_func(i,barcode,array);
                    save += save_func(i,barcode,array);
                    break;
                }else {
                    total = subtotal_func(i,barcode,array);
                }
            }

        });

        print =
            '***<没钱赚商店>购物清单***\n' +
            '打印时间：' + tools.format_time() + '\n' +
            '----------------------\n' +
            listing+
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            giving +
            '----------------------\n' +
            '总计：'+he.toFixed(2)+'(元)\n'  +
            '节省：'+save.toFixed(2)+'(元)\n' +
            '**********************';
        return print;
    };
}
module.exports = Pos;




subtotal_func = function(on_sale, goods, number) {
    var subtotal = 0;
    for (var i = 0; i < on_sale.length; i++) {

    }
    each(goods, function(array, i) {
        if (array.barcode === on_sale) {
            subtotal += array.price*(number - (number - number%3)/3);
        }
    });
    return subtotal;
};
save_func = function(on_sale, goods, number) {
    var save = 0;
    each(goods, function(array, i) {
        if (array.barcode === on_sale) {
            save += array.price*(number - number%3)/3;
        }
    });
    return save;
};
giving_array = function(barcode,result,count) {
    var giving;
    var name;
    var unit;
    _.each(barcode,function(array,i) {
        if (array.barcode===result) {
            name = array.name;
            unit = array.unit;
        }
    });
    giving =
            '名称：'+name+
            '，数量：'+parseInt(count/3) + unit+'\n';
    return giving;
};
