$(document).ready(function(e) {

    $("#statesBtn").click(function(e) {
        $.ajax({
            url: "http://localhost:58174/home/states",
            success: function(result) {
                $.each(result, function(index, item) {
                    $("#countries").append("<option value=" + item + ">" + item + "</option>");
                })

            }
        });
    });

    $("#selectBtn").click(function(e) {
        var selectState = $("#countries").val();
        alert(selectState);
    });


    $("#calculate").click(function(e) {
        $.ajax({
            url: "https://wordsapiv1.p.mashape.com/words/example",
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "1c0655750amshc5624b3fa437ff5p100e34jsn1c64fef5d56b");
            },
            success: function(result) {
                alert(JSON.stringify(result));

            }
        });
    });



})