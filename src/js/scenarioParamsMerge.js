/**
 * Created by AbhishekK on 2/10/2016.
 */
var taskData;
var scenarioParams;
var stepTemplate;

var generateStepJsonScript = function(){

    /**
     * todo:
     *
     * load scenario params to var from modal
     * parse taskdata for <> params
     * backup current template {update template for multiple set of params else show if blank show raw template replace taskdata lsm from backup}
     * search for keys in params
     * update taskdata
     * store taskdata updated to lsm
     * reload
     *
     *  - > then user can run tests in normal floe
     *  ?? task id
     *  ?? skip item
     *  ?? template will get updated
     */
	
    taskData = JSON.parse(localStorage.getItem('taskData'));

    stepTemplate = taskData;
    mergeStepScenario(stepTemplate, function(mergedFile){
        localStorage.setItem('taskData', JSON.stringify(mergedFile));
        location.reload();
    });
  };

function mergeStepScenario(stepTemplate, callback){

        // todo: merge stepTemplate & scenarioParams

        var stepTemplateString = JSON.stringify(stepTemplate);
        var mergedFile = stepTemplateString.replace(/\$\$.*?\$\$/gi, function myFunction(x){return getStepKeyValue(x);});
        console.log(mergedFile);
        callback(JSON.parse(mergedFile));
};

function getStepKeyValue(key){

    scenarioParams = JSON.parse($('#prettyScenarioModalBody').val());
    var key1 = key.substr(2).slice(0, -2);
    return scenarioParams[key1];
};

$( "#processPrettyScenarioModal" ).on( "click", function() {
    generateStepJsonScript();
});