$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      const unluckyEvent = $(this).val();


    });

    $("input:checkbok[name=lucky-events]:checked").each(function() {
      const luckyEvent = $(this).val();


    })
  }
})