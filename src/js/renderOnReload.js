/**
 * Created by aksh on 3/4/2016.
 */


var _addMethod = function(item){

    $('.item-node').eq((parseInt(item) - 1)).find('.add-method').click()
};

var _addAction = function(item,method,action,actionName){

    if(action !==1){
        $('.item-node').eq((parseInt(item) - 1)).find('.method-node').eq((parseInt(method) - 1)).find('.add-action').click();
    }

	$('.item-node').eq((parseInt(item) - 1)).find('.method-node').eq((parseInt(method) - 1)).find('.action-node').eq((parseInt(action) - 1)).find('.action-name').html(actionName);

};

var renderTreeFromLsm = function(){
    console.log('render from lsm')

    var taskData =   JSON.parse(localStorage.getItem('taskData'));


for(var i=0;i<taskData.items.length;i++){

    if(taskData.items[i].init) {

        for (var j = 0; j < taskData.items[i].methods.length; j++) {

            if (taskData.items[i].methods[j].init) {
                // add method j inside item i

                if(j!==0){
                    _addMethod(i+1);
                }
                for (var k = 0; k < taskData.items[i].methods[j].actions.length; k++) {
                    if (taskData.items[i].methods[j].actions[k].init) {
						_addAction(i+1,j+1,k+1,taskData.items[i].methods[j].actions[k].name);
                    }
                }
            }
        }

    }
}
};

renderTreeFromLsm();


var renderPathwayFromLsm = function(){

    var pathwayListData = [];

    if(localStorage.getItem('pathwayListData')){

        pathwayListData = JSON.parse(localStorage.getItem('pathwayListData'));
    }


    // iterate pathwayListData & append

    pathwayListData.forEach( function (arrayItem)
    {
        var tempStr = '';

        console.log((arrayItem.toString().split(',')));

        var tempArr = (arrayItem.toString().split(','));
        console.log(tempArr.length);
        for (var i = 1; i <= tempArr.length; i++) {

            tempStr += 'M-' + tempArr[i].trim().replace('"','').replace('"','') + '&nbsp;&nbsp;';

            i++;
        }

        console.log(tempStr);

        $('#pathwayList').append('<li><div class=" bg-green" style="position: relative; z-index: auto; left: 0px; top: 0px; padding: 5px; margin: 2px">'+tempStr.toString()+' <a href="#" class="deletePathway"><span class="label button pull-right bg-red delete-method-node"><i class="fa fa-times"></i></span></a></div></li>');
    })

};

renderPathwayFromLsm();