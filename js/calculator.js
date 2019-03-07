"use strict";

jQuery(document).ready(function() {

    var operand1 = null;
    var lastOperation = null;
    var clearRequired = false;

    var ctrls = {
        Display: "#txtDisplay",
        PlusBtn: ".operator-plus",
        MinusBtn: ".operator-minus",
        MultiplyBtn: ".operator-mul",
        DivideBtn: ".operator-div",
        EqualBtn: ".equal-to"
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
        if (clearRequired && lastOperation != null)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = '+';
        clearRequired = true;
    })

    $(ctrls.MinusBtn).click(function(e) {
        if (clearRequired && lastOperation != null)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = '-';
        clearRequired = true;
    })

    $(ctrls.MultiplyBtn).click(function(e) {
        if (clearRequired && lastOperation != null)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = '*';
        clearRequired = true;
    })

    $(ctrls.DivideBtn).click(function(e) {
        if (clearRequired && lastOperation != null)
            return;

        var text = parseInt(getDisplay());
        operand1 = dolastOperation(text);
        showDisplay(operand1);

        lastOperation = '/';
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

    %
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