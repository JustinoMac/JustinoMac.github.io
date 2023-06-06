$(document).ready(function () {
  $("a[title='chua']").click(function () {
    $.getJSON("json_files/chua.json", function (data) {
      var speakerMonth = "";
      var speakerTitle = "";
      var speakerName = "";
      var speakerText = "";
      var speakerImage = "";

      $.each(data.speakers, function (key, value) {
        speakerMonth = value.month;
        speakerTitle = value.title;
        speakerName = value.speaker;
        speakerText = value.text;
        speakerImage += this.image;
      });

      $("main h1").empty().append(speakerTitle);
      $("main h2").empty().append(speakerMonth + "<br>" + speakerName);
      $("main p").empty().append(speakerText);
      $("main img").attr("src", speakerImage);
    });
  });

  $("a[title='sampson']").click(function () {
    $.getJSON("json_files/sampson.json", function (data) {
      var speakerMonth = "";
      var speakerTitle = "";
      var speakerName = "";
      var speakerText = "";
      var speakerImage = "";

      $.each(data.speakers, function (key, value) {
        speakerMonth = value.month;
        speakerTitle = value.title;
        speakerName = value.speaker;
        speakerText = value.text;
        speakerImage += this.image;
      });

      $("main h1").empty().append(speakerTitle);
      $("main h2").empty().append(speakerMonth + "<br>" + speakerName);
      $("main p").empty().append(speakerText);
      $("main img").attr("src", speakerImage);
    });
  });

  $("a[title='sorkin']").click(function () {
    $.getJSON("json_files/sorkin.json", function (data) {
      var speakerMonth = "";
      var speakerTitle = "";
      var speakerName = "";
      var speakerText = "";
      var speakerImage = "";

      $.each(data.speakers, function (key, value) {
        speakerMonth = value.month;
        speakerTitle = value.title;
        speakerName = value.speaker;
        speakerText = value.text;
        speakerImage += this.image;
      });

      $("main h1").empty().append(speakerTitle);
      $("main h2").empty().append(speakerMonth + "<br>" + speakerName);
      $("main p").empty().append(speakerText);
      $("main img").attr("src", speakerImage);
    });
  });

  $("a[title='toobin']").click(function () {
    $.getJSON("json_files/toobin.json", function (data) {
      var speakerMonth = "";
      var speakerTitle = "";
      var speakerName = "";
      var speakerText = "";
      var speakerImage = "";

      $.each(data.speakers, function (key, value) {
        speakerMonth = value.month;
        speakerTitle = value.title;
        speakerName = value.speaker;
        speakerText = value.text;
        speakerImage += this.image;
      });

      $("main h1").empty().append(speakerTitle);
      $("main h2").empty().append(speakerMonth + "<br>" + speakerName);
      $("main p").empty().append(speakerText);
      $("main img").attr("src", speakerImage);
    });
  });
});





// end ready