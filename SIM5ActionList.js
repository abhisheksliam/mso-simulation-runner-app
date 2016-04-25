/**
 * Created by AbhishekK on 4/14/2016.
 */
var SIM5ActionList = (function(){

    var _keyboardActions = ["ALT","ARROW_DOWN","ARROW_LEFT","ARROW_RIGHT","ARROW_UP","BACK_SPACE","CONTROL","DECIMAL","DELETE","END","ENTER","ESCAPE","F1","F10","F11","F12","F2","F3","F4","F5","F6","F7","F8","F9","HOME","PAGE_DOWN","SHIFT","SPACEBAR","TAB","CTRL","ESC"];

    var _actionList = {

        action  : [],

        excel   :   [
            "clickAndWait(String elementName)",
            "selectCell(String cellName)",
            "selectCellRange(String cellRange, Method methodType)",
            "rightClickOnCell(String cellName)",
            "doubleClick(String elementName)",
            "doubleClickFillHandle(String elementName)",
            "clickTwice(String elementName)",
            "tripleClick(String elementName)",
            "rightClick(String elementName)",
            "enterText(String text)",
            "pressNreleaseKey(MyKeys keyName)",
            "pressKey(MyKeys keyName)",
            "pressKeyMultipleTimes(MyKeys keyName , String numOfTimes)",
            "releaseKey(MyKeys keyName)",
            "waitFor()",
            "release()",
            "clickAndHold(String elementName)",
            "moveByOffset(int xOffset, int yOffset)",
            "moveToElementCenter(String elementName)",
            "dragAndDropByPosBased(String draggable, int xpos, int ypos)",
            "clickAt(String elementName, int pos)",
            "clickAtPercent(String elementName, int xposPercent, int yposPercent)",
            "selectColumn(String columnName)",
            "selectRow(int rowNumber)",
            "selectMultiParaText(String elementNameStart, String elementNameEnd, int Start, int End, Method methodType)",
            "selectText(String elementName, int start, int end, Method methodType)",
            "click(String elementName)",
            "clickAtCurrentPos()",
            "clickAndHoldCurrentPos()",
            "clickMultipleTimes(String elementName , String numOfTimes)",
            "doubleClickAndWait()",
            "rightClickCurrentPos()",
            "dragAndDropBy(String source, String target)",
            "dragAndDropByOffset(String elementName, int xOffset, int yOffset)",
            "enterTextInElement(String elementName, String text)",
            "pressControlA()",
            "pressControlEND()",
            "pressControlENTER()",
            "pressControlHOME()",
            "moveToElement(String moveToElement, int xOffset, int yOffset)",
            "moveToElementPercent(String elementName, double xOffsetPercent, double yOffsetPercent)",
            "releaseElement(String elementName)",
            "waitForSec(int time)",
            "clearText(String elementName)",
            "scroll(String elementName)",
            "selectFromDropdown(String elementName, String option)",
            "selectInputText(String elementName)",
            "pressKeyFromVirtualKeyboard(String keyName)",
            "clickTwiceAtCurrentPos",
            "skipToNextItem()"
        ]
        ,
        word: [
            "clickAt(String elementName, int pos)",
            "clickAtPercent(String elementName, int xposPercent, int yposPercent)",
            "dragAndDropSlideInSlidePane(String firstSlideNumber, String secondSlideNumber)",
            "rightClickSlideInSlidePane(String slideNumber)",
            "selectMultiParaText(String elementNameStart, String elementNameEnd, int Start, int End, Method methodType)",
            "selectSlideFromSlidePane(String slideNumber)",
            "selectText(String elementName, int start, int end, Method methodType)",
            "click(String elementName)",
            "clickAtCurrentPos()",
            "clickAndHoldCurrentPos()",
            "clickMultipleTimes(String elementName , String numOfTimes)",
            "clickAndHold(String elementName)",
            "clickAndWait(String elementName)",
            "doubleClickAndWait()",
            "doubleClick(String elementName)",
            "clickTwice(String elementName)",
            "tripleClick(String elementName)",
            "rightClickCurrentPos()",
            "rightClick(String elementName)",
            "dragAndDropBy(String source, String target)",
            "dragAndDropByOffset(String elementName, int xOffset, int yOffset)",
            "enterText(String text)",
            "enterTextInElement(String elementName, String text)",
            "pressControlA()",
            "pressControlEND()",
            "pressControlENTER()",
            "pressControlHOME()",
            "pressKey(MyKeys keyName)",
            "pressKeyMultipleTimes(MyKeys keyName , String numOfTimes)",
            "pressNreleaseKey(MyKeys keyName)",
            "releaseKey(MyKeys keyName)",
            "moveByOffset(int xOffset, int yOffset)",
            "moveToElementCenter(String elementName)",
            "moveToElement(String elementName, int xOffset, int yOffset)",
            "moveToElementPercent(String elementName, double xOffsetPercent, double yOffsetPercent)",
            "release()",
            "releaseElement(String elementName)",
            "waitFor()",
            "waitForSec(int time)",
            "clearText(String elementName)",
            "scroll(String elementName)",
            "selectFromDropdown(String elementName, String option)",
            "selectInputText(String elementName)",
            "pressKeyFromVirtualKeyboard(String keyName)",
            "clickTwiceAtCurrentPos",
            "skipToNextItem()"
        ],
        ppt: [
            "enterText(String text)",
            "enterTextInElement(String elementName, String text)",
            "click(String elementName)",
            "pressKey(MyKeys keyName)",
            "pressKeyMultipleTimes(MyKeys keyName , String numOfTimes)",
            "pressNreleaseKey(MyKeys keyName)",
            "releaseKey(MyKeys keyName)",
            "selectSlideFromSlidePane(String slideNumber)",
            "rightClickSlideInSlidePane(String slideNumber)",
            "dragAndDropSlideInSlidePane(String firstSlide, String secondSlide)",
            "clickAt(String elementName, int pos)",
            "clickAtCurrentPos()",
            "clickAtPercent(String elementName, int xposPercent, int yposPercent)",
            "selectFromDropdown(String elementName, String option)",
            "selectInputText(String elementName)",
            "selectText(String elementName, int start, int end, Method methodType)",
            "selectMultiParaText(String elementNameStart, String elementNameEnd, int Start, int End, Method methodType)",
            "doubleClick(String elementName)",
            "doubleClickAndWait()",
            "clickTwice(String elementName)",
            "tripleClick(String elementName)",
            "rightClick(String elementName)",
            "rightClickCurrentPos()",
            "clickAndHoldCurrentPos()",
            "clickMultipleTimes(String elementName , String numOfTimes)",
            "clickAndHold(String elementName)",
            "clickAndWait(String elementName)",
            "dragAndDropBy(String source, String target)",
            "dragAndDropByOffset(String elementName, int xOffset, int yOffset)",
            "moveByOffset(int xOffset, int yOffset)",
            "moveToElementCenter(String elementName)",
            "moveToElement(String elementName, int xOffset, int yOffset)",
            "moveToElementPercent(String elementName, double xOffsetPercent, double yOffsetPercent)",
            "release()",
            "releaseElement(String elementName)",
            "pressControlA()",
            "pressControlEND()",
            "pressControlENTER()",
            "pressControlHOME()",
            "waitFor()",
            "waitForSec(int time)",
            "clearText(String elementName)",
            "scroll(String elementName)",
            "pressKeyFromVirtualKeyboard(String keyName)",
            "clickTwiceAtCurrentPos",
            "skipToNextItem()"
        ],
        access  :   [
            "click(String elementName)",
            "rightClick(String elementName)",
            "selectInputText(String elementName)",
            "waitFor()",
            "pressKey(MyKeys keyName)",
            "pressKeyMultipleTimes(MyKeys keyName , String numOfTimes)",
            "pressNreleaseKey(MyKeys keyName)",
            "releaseKey(MyKeys keyName)",
            "enterText(String text)",
            "clickAt(String elementName, int pos)",
            "clickAtPercent(String elementName, int xposPercent, int yposPercent)",
            "selectMultiParaText(String elementNameStart, String elementNameEnd, int Start, int End, Method methodType)",
            "selectText(String elementName, int start, int end, Method methodType)",
            "clickAtCurrentPos()",
            "clickAndHoldCurrentPos()",
            "clickMultipleTimes(String elementName , String numOfTimes)",
            "clickAndHold(String elementName)",
            "clickAndWait(String elementName)",
            "doubleClickAndWait()",
            "doubleClick(String elementName)",
            "clickTwice(String elementName)",
            "tripleClick(String elementName)",
            "rightClickCurrentPos()",
            "dragAndDropBy(String source, String target)",
            "dragAndDropByOffset(String elementName, int xOffset, int yOffset)",
            "enterTextInElement(String elementName, String text)",
            "pressControlA()",
            "pressControlEND()",
            "pressControlENTER()",
            "pressControlHOME()",
            "moveByOffset(int xOffset, int yOffset)",
            "moveToElementCenter(String elementName)",
            "moveToElement(String elementName, int xOffset, int yOffset)",
            "moveToElementPercent(String elementName, double xOffsetPercent, double yOffsetPercent)",
            "release()",
            "releaseElement(String elementName)",
            "waitForSec(int time)",
            "clearText(String elementName)",
            "scroll(String elementName)",
            "selectFromDropdown(String elementName, String option)",
            "skipToNextItem()",
            "selectCell(String cellName)",
            "selectCellRange(String cellRange, Method methodType)",
            "pressKeyFromVirtualKeyboard(String keyName)",
            "clickTwiceAtCurrentPos",
            "rightClickOnCell(String cellName)"
        ]
    };

    return {
        "getKeyboardActions" : _keyboardActions,
        "getActionList" : _actionList
    }
}
)();


