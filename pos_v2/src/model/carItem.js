var _= require('../lodash');
function CarItem() {
    this.integration = function(inputs){

        result = group(inputs,function(val,key) {
            return val.split('-')[0];
        });
        _.each(result,function(array,i) {
            result[i] = _.map(array,function(collection,i) {
                return collection.split('-')[1]*1 || 1;
            });
            result[i] = _.sum(result[i]);
        });
        return result;
    };
}
module.exports = CarItem;
