"use strict";

jQuery(document).ready(function() {

    var operand1 = null;
    var lastOperation = null;
    var clearRequired = false;

    var ctrls = {
        Display: "#txtDisplay",
        EqualBtn: ".equal-to",
        DecimalBtn: ".decimal",
        PlusMinus: ".plus-minus",
        Percent: ".operator-percent",

    };

    $(".number-button").click(function(e) {
        if (clearRequired)
            clearDisplay();

        clearRequired = false;

        var number = $(this).val();
        var presentContent = getDisplay();
        $(ctrls.Display).val(presentContent + number);
    })

    $(".operator").click(function(e) {
        if (clearRequired && lastOperation != null)
            return;

        var text = parseFloat(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = $(this).data("operation");
        clearRequired = true;
    })

    $(ctrls.EqualBtn).click(function(e) {
        if (clearRequired)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = null;
        clearRequired = true;

    })

    $(ctrls.DecimalBtn).click(function(e) {
        var present = getDisplay();
        if (present.indexOf('.') == -1)
            present += '.';
        $(ctrls.Display).val(present);
    })

    $(ctrls.PlusMinus).click(function(e) {
        var present = getDisplay();
        present *= -1;
        $(ctrls.Display).val(present);
    })

    $(ctrls.Percent).click(function(e) {
        var present = getDisplay();
        present = present / 100;
        $(ctrls.Display).val(present);
    })

    $(".clear").click(function(e) {
        clearDisplay();
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