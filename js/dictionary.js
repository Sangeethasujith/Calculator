$(document).ready(function(e) {
    $("#SearchBtn").click(function(e) {
        var word = $("#SearchWordTxt").val();
        $("#DictionaryResult").addClass('Loading');
        $.ajax({
            url: "https://wordsapiv1.p.mashape.com/words/" + word,
            beforeSend: function(request) {
                request.setRequestHeader("X-RapidAPI-Key", "1c0655750amshc5624b3fa437ff5p100e34jsn1c64fef5d56b");
            },
            success: function(result) {
                var desc = '';
                $.each(result.results, function(index, item) {
                    desc += item["definition"] + "<br/>";
                    $("#DictionaryResult").removeClass('Loading');

                })
                $("#DictionaryResult").html(desc);

            },
            error: function(e) {
                $("#DictionaryResult").text("no defintion found");
                $("#DictionaryResult").removeClass('Loading');
            }
        })
    })
})