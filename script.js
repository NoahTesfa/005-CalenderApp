$(document).ready(function () {
    var currentDay = moment().format('dddd, MMMM Do');
    console.log(currentDay)
    $("#currentDay").text(currentDay);

    var presentTime = moment().format("H");
    console.log(presentTime);

    timeblockColor();

    function timeblockColor() {
        $(".timeblockRow").each(function() {
            var eventInput = parseInt($(this).attr("value"));
            if (eventInput < presentTime) {
                $(this).addClass("past");
            }else if (eventInput == presentTime) {
                $(this).addClass("present");
            }else if (eventInput > presentTime) {
                $(this).addClass("future");
            }
        })
    }
    

       $(".saveBtn").on("click", function () {

        localStorage.setItem("9", ($("#event1").val()))
        localStorage.setItem("10", ($("#event2").val()))
        localStorage.setItem("11", ($("#event3").val()))
        localStorage.setItem("12", ($("#event4").val()))
        localStorage.setItem("13", ($("#event5").val()))
        localStorage.setItem("14", ($("#event6").val()))
        localStorage.setItem("15", ($("#event7").val()))
        localStorage.setItem("16", ($("#event8").val()))
        localStorage.setItem("17", ($("#event9").val()))
    })

        $("#event1").append(localStorage.getItem("9"));
        $("#event2").append(localStorage.getItem("10"));
        $("#event3").append(localStorage.getItem("11"));
        $("#event4").append(localStorage.getItem("12"));
        $("#event5").append(localStorage.getItem("13"));
        $("#event6").append(localStorage.getItem("14"));
        $("#event7").append(localStorage.getItem("15"));
        $("#event8").append(localStorage.getItem("16"));
        $("#event9").append(localStorage.getItem("17"));
})