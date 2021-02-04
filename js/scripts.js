
//Business Logic

function fortune(array) {
  if (array.length === 7) {
    return 1
  } else if (array.length < 7) {
    return 2
  } else if (array.length > 7) {
    return 3
  }
}


//User interface logic

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    
    let array = [];

    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      const unluckyEvent = $(this).val();
      array.push(unluckyEvent);
    });

    $("input:checkbox[name=lucky-events]:checked").each(function() {
      const luckyEvent = $(this).val();
      array.push(luckyEvent);
    });

    $("input:checkbox[name=miracle-events]:checked").each(function() {
      const miracleEvent = $(this).val();
      array.push(miracleEvent);
    });

    let result = fortune(array)

    if (result === 1) {
      $("#fortune").text("Looks like your entire year is set! Way to go!")
    } else if (result === 2) {
      $("#fortune").text("Uhh ohh, things are not looking good...")
    } else if (result === 3) {
      $("#fortune").text("Just give up!")
    }

  });
});