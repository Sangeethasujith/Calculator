jQuery(document).ready(function() {

    var operand1 = null;
    var lastOperation = null;
    var clearRequired = false;

    var ctrls = {
        Display: "#txtDisplay",
        PlusBtn: ".operator-plus"
    };

    $(".number-button").click(function(e) {
        if (clearRequired)
            clearDisplay();

        clearRequired = false;

        var number = $(this).val();
        var presentContent = getDisplay();
        $(ctrls.Display).val(presentContent + number);
    })

    $(ctrls.PlusBtn).click(function(e) {
        if (clearRequired)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = '+';
        clearRequired = true;
    })

    function dolastOperation(presentval) {
        switch (lastOperation) {
            case '+':
                return operand1 + presentval;
            case '-':
                return operand1 - presentval;
            case '*':
                return operand1 * presentval;
            case '/':
                return operand1 / presentval;
            case null:
                return presentval;
        }
    }

    function showDisplay(text) {
        return $(ctrls.Display).val(text);
    }

    function getDisplay() {
        return $(ctrls.Display).val();
    }

    function clearDisplay() {
        $(ctrls.Display).val('');
    }
});