$(document).ready(function(e) {

    $("#SearchBtn").click(function(e) {
        var word = $("#SearchWordTxt").val();
        var description = "";
        $("#DictionaryResult").addClass("Loading");
        $.ajax({
            url: "https://wordsapiv1.p.rapidapi.com/words/" + word,
            beforeSend: function(request) {
                request.setRequestHeader("X-Mashape-Key", "1c0655750amshc5624b3fa437ff5p100e34jsn1c64fef5d56b");
            },
            success: function(result) {
                $.each(result.results, function(index, item) {
                    description += item["definition"] + "<br/>";

                })
                $("#DictionaryResult").html((description));
                $("#DictionaryResult").removeClass("Loading");
            },
            error: function(e) {
                $("#DictionaryResult").text("not defined");
                $("#DictionaryResult").removeClass("Loading");
            }
        })
    });

})