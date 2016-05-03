/**
 * Created by aksh on 3/4/2016.
 */


var _addMethod = function(item){

    $('.item-node').eq((parseInt(item) - 1)).find('.add-method').click();
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
				if(j===0){
					if(taskData.items[i].methods[j].type !== undefined) {
						$('.item-node').eq(i).find('.method-node').eq(j).find('.method-type').html("(" + taskData.items[i].methods[j].type + ")");
					}
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

    $('.method-details-section').hide();
    $('.action-details-section').hide();
    $('#b_action').hide();
    $('#b_method').hide();
   
    $('#T1').removeClass('active');
    $('#A1').removeClass('active');

    var currentScenarioLSM =   localStorage.getItem('currentScenario');
    if(currentScenarioLSM)
    {   currentScenario = currentScenarioLSM
    }else{
        currentScenario = 'T1';
    }

    $('#b_scenario span').html(currentScenario);
    $('#b_scenario').attr('data-scenario', currentScenario);
    $('#'+currentScenario).addClass('active');
	
	$('.delete-method-node').hide();

    updateBreadcrum({"item":"","method":"","action":""});
    $('.item-node').removeClass('active');

};

renderTreeFromLsm();


var renderPathwayFromLsm = function(){

    var pathwayListData = [];

    if(localStorage.getItem('pathwayListData')){

        pathwayListData = JSON.parse(localStorage.getItem('pathwayListData'));
    }


    for (var q = 0; q < pathwayListData.length; q += 2) {
        var arrayItem = pathwayListData[q];

        var tempStr = '';

        if(arrayItem.constructor === Array){
            console.log((arrayItem.toString().split(',')));

            var tempArr = (arrayItem.toString().split(','));
            console.log(tempArr.length);
            for (var i = 1; i <= tempArr.length; i++) {

                tempStr += 'M-' + tempArr[i].trim().replace('"','').replace('"','') + '&nbsp;&nbsp;';

                i++;
            }

            console.log(tempStr);
        }
        tempStr += ' : ' + pathwayListData[q+1];

        $('#pathwayList').append('<li><div class=" bg-gray" style="position: relative; z-index: auto; left: 0px; top: 0px; padding: 5px 15px 5px 5px; margin: 2px; color: black">'
        +tempStr.toString()+'<a href="#" class="deletePathway"><span class="label button pull-right bg-red delete-method-node"><i class="fa fa-times"></i></span></a></div></li>');

    }

};

renderPathwayFromLsm();