$(document).ready(function() {

  $("form#stress-survey").submit(function(event) {
    event.preventDefault();

    $("#stress-survey-area").hide();
    $("#response").show();

    var warningsTotal = 0;
    var healthsTotal = 0;
    var copingsTotal = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      warningsTotal += parseInt($(this).val(), 10) || 0;

      console.log(warningsTotal);
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      healthsTotal += parseInt($(this).val(), 10) || 0;

      console.log(healthsTotal);
    });

    $("input:checkbox[name=coping-methods]:checked").each(function() {
      copingsTotal += parseInt($(this).val(), 10) || 0;

      console.log(copingsTotal);
    });

    var stressTotal = warningsTotal + healthsTotal;

    console.log(stressTotal);
    console.log(copingsTotal);

    if (stressTotal > copingsTotal) {
      $("#response").append("<h4>Let's get you some help!</h4>");
      console.log("help");

    } else if (stressTotal === copingsTotal) {
        $("#response").append("<h4>It looks like you are scooting by alright</h4>");
        console.log("alright");

    } else if (stressTotal < copingsTotal) {
        $("#response").append("<h4>You must be stress free!</h4>");
        console.log("stress free");
    }

  });

});
