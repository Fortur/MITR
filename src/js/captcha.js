(
  function ($) {
    $.fn.shuffle = function () {
      return this.each(function () {
        var items = $(this).children();
        return (items.length)
          ? $(this).html($.shuffle(items, $(this)))
          : this;
      });
    }
    $.fn.validate = function () {
      var res = false;
      this.each(function () {
        var arr = $(this).children();
        res = ((arr[0].innerHTML == "1") &&
          (arr[1].innerHTML == "2") &&
          (arr[2].innerHTML == "3") &&
          (arr[3].innerHTML == "4") &&
          (arr[4].innerHTML == "5") &&
          (arr[5].innerHTML == "6"));
      });
      return res;
    }
    $.shuffle = function (arr, obj) {
      for (
        var j, x, i = arr.length; i;
        j = parseInt(Math.random() * i),
          x = arr[--i], arr[i] = arr[j], arr[j] = x
      ) ;
      if (arr[0].innerHTML == "1") obj.html($.shuffle(arr, obj))
      else return arr;
    }
  })(jQuery);
$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
  $('ul').shuffle();
  $("#formsubmit").click(function () {
    if ($('ul').validate()) {
      document.getElementById("formsubmitEnd").classList.remove("btn-disabled");
      document.getElementById("formsubmitEnd").setAttribute("style", "visible:visible");
      document.getElementById("formsubmit").dataset.target = "#flipFlop1"
    } else {
      document.getElementById("formsubmit").dataset.target = "#flipFlop2"
    }
  });
  $("#formsubmitEnd").click(function () {
    document.getElementById("formsubmitEnd").classList.add("btn-disabled");
    document.getElementById("formsubmit").classList.add("btn-disabled");
    document.getElementById("submitText").setAttribute("style", "visibility:visible");
  });
});
