/**
 * Created by AbhishekK on 2/2/2016.
 */

/*$( ".sidebar" ).on( "click",'.treeview-menu,', function() {
 $("#searchActions").val('');

 // Retrieve the input field text and reset the count to zero
 var filter = '', count = 0;

 // Loop through the comment list
 $("#layout-skins-list tbody tr").each(function(){

 // If the list item does not contain the text phrase fade it out
 if ($(this).text().search(new RegExp(filter, "i")) < 0) {
 $(this).fadeOut();

 // Show the list item if the phrase matches and increase the count by 1
 } else {
 $(this).show();
 count++;
 }
 });

 // Update the count
 var numberItems = count;
 console.log("Number of Comments = "+count);
 //event.stopPropagation();
 });*/



$("#searchActions").keyup(function(){

    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;

    // Loop through the comment list
    $("#layout-skins-list tbody tr").each(function(){

        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

            // Show the list item if the phrase matches and increase the count by 1
        } else {
            $(this).show();
            count++;
        }
    });

});

actionList = SIM5ActionList.getActionList;


var initactionList = function(){
    $("#layout-skins-list tbody").empty();

    var taskData =   JSON.parse(localStorage.getItem('taskData'));

    if((taskData.appName != null) && (taskData.appName != undefined) && (taskData.appName != "")){

        var currentApplication = taskData.appName;
        var filteredActionList;

        if(currentApplication == 'excel'){
            filteredActionList = actionList.excel;
        }
        if(currentApplication == 'word'){
            filteredActionList = actionList.word;
        }
        if(currentApplication == 'ppt'){
            filteredActionList = actionList.ppt;
        }
        if(currentApplication == 'access'){
            filteredActionList = actionList.access;
        }

        for(var i=0;i<filteredActionList.length;i++){

            $("#layout-skins-list tbody").append('                <tr class="action-details-button">                  <td><code>'+filteredActionList[i]+'</code></td>                  <!--<td><a href="#" class="btn btn-primary btn-xs action-details-button"><i class="fa fa-eye"></i></a></td>-->                </tr>')

        }

    }

};

initactionList();

var updateDetailsForm = function(){

    $('#layout-skins-list').on('click', '.action-details-button', function() {
        $("#actionDetailsForm").empty();
        var el = $(this);
        var clickedNodeText = el.find('code').text();
        $(".functionDisplayName").text(clickedNodeText.trim());
        $('#saveActionButton').show();

        var actionNodeFunction =  clickedNodeText.trim().replace(/ *\([^)]*\) */g, "");
        $(".functionDisplayName").attr('name', actionNodeFunction + '()');

        var actionNodeArray ;

        try{
            actionNodeArray = (clickedNodeText.match(/\(([^)]+)\)/)[1]).split(',');
        }catch(e){

        }
        try{
            if(actionNodeArray){

                if(actionNodeArray.length >0){

                    for(var i=0;i<actionNodeArray.length;i++){
                        console.log('field for: '+actionNodeArray[i].trim());
                        console.log('field for: '+actionNodeArray[i].trim().split(' ')[0])

                        $("#actionDetailsForm").append('<div class="col-sm-12" style="margin: 5px 0px 5px 0px">        <input id="'+actionNodeArray[i].trim().split(' ')[1]+'" type="text" class="form-control" id="" placeholder="'+actionNodeArray[i].trim().split(' ')[1]+'">        </div>');
                    }

                    /*
                     console.log('test: '+el.parent().parent().text())

                     console.log('test 2: '+ clickedNodeText.match(/\(([^)]+)\)/)[1]);*/


                }
            }
        }
        catch(e){console.log(e)}


        /*        var methodTree = el.parent().parent('.method-node');

         //todo: delete data from lsm
         var removeLSMData = methodTree.data('tree');
         console.log(removeLSMData);

         updateBreadcrum({"item":"","method":"","action":""});

         methodTree.remove();*/

    });









};

updateDetailsForm();

$(function() {

    var options = {
        source: SIM5ActionList.getKeyboardActions,
        minLength: 1
    };
    var selector = '#keyName';
    $(document).on('keydown.autocomplete', selector, function() {
        $(this).autocomplete(options);
    });

});
