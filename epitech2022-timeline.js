google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function sdate(day, month, year)
{
  return date(day, month, year);
}

function edate(day, month, year)
{
  var d = date(day, month, year);
  d.setDate(d.getDate() + 1);
  return d;
}

function drawChart() {
  var container = document.getElementById('timeline-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' })
  dataTable.addColumn({ type: 'string', id: 'Project' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '\0', 'Now', new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate()) ],

    [ 'CONFS', 'C Pool Introduction', sdate(25, 09, 2017), edate(01, 10, 2017) ],
    [ 'CONFS', 'Assistance', sdate(19, 10, 2017), edate(24, 10, 2017) ],
    [ 'CONFS', 'End of the swimming pool statement', sdate(06, 11, 2017), edate(12, 11, 2017) ],

    [ 'DAYS', 'Day 01', sdate(02, 10, 2017), edate(02, 10, 2017) ],
    [ 'DAYS', 'Day 02', sdate(03, 10, 2017), edate(03, 10, 2017) ],
    [ 'DAYS', 'Day 03', sdate(04, 10, 2017), edate(04, 10, 2017) ],
    [ 'DAYS', 'Day 04', sdate(05, 10, 2017), edate(05, 10, 2017) ],
    [ 'DAYS', 'Day 05', sdate(06, 10, 2017), edate(06, 10, 2017) ],
    [ 'DAYS', 'Day 06', sdate(09, 10, 2017), edate(09, 10, 2017) ],
    [ 'DAYS', 'Day 07', sdate(10, 10, 2017), edate(10, 10, 2017) ],
    [ 'DAYS', 'Day 08', sdate(11, 10, 2017), edate(11, 10, 2017) ],
    [ 'DAYS', 'Day 09', sdate(12, 10, 2017), edate(12, 10, 2017) ],
    [ 'DAYS', 'Day 10', sdate(13, 10, 2017), edate(13, 10, 2017) ],
    [ 'DAYS', 'Day 11', sdate(16, 10, 2017), edate(16, 10, 2017) ],
    [ 'DAYS', 'Day 12', sdate(17, 10, 2017), edate(17, 10, 2017) ],
    [ 'DAYS', 'Day 13', sdate(18, 10, 2017), edate(18, 10, 2017) ],

    [ 'RUSHS', 'Rush 1', sdate(07, 10, 2017), edate(08, 10, 2017) ],
    [ 'RUSHS', 'Rush 2', sdate(14, 10, 2017), edate(15, 10, 2017) ],

    [ 'PROJECTS', 'Fir Tree', sdate(04, 10, 2017), edate(08, 10, 2017) ],
    [ 'PROJECTS', 'match nmatch', sdate(09, 10, 2017), edate(15, 10, 2017) ],
    [ 'PROJECTS', 'InfinAdd', sdate(23, 10, 2017), edate(23, 10, 2017) ],
    [ 'PROJECTS', 'EvalExpr', sdate(25, 10, 2017), edate(29, 10, 2017) ],
    [ 'PROJECTS', 'Bistro-matic', sdate(23, 10, 2017), edate(05, 11, 2017) ],

    [ 'OPTIONAL', 'Lib Workshop', sdate(19, 10, 2017), edate(24, 10, 2017) ],

    [ 'STUMPERS', 'Final Stumper', sdate(28, 10, 2017), edate(28, 10, 2017) ]
  ]);


  chart.draw(dataTable, {
    timeline: {
      colorByRowLabel: true
    }
  });

  nowLine('timeline-container');

  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
    if(obj.row == 0){
      $('.google-visualization-tooltip').css('display', 'none');
    }
    nowLine('timeline-container');
  })

  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
    nowLine('timeline-container');
  })
}

function nowLine(div) {

    //get the height of the timeline div
    var height;
    $('#' + div + ' rect').each(function(index) {
        var x = parseFloat($(this).attr('x'));
        var y = parseFloat($(this).attr('y'));

        if (x == 0 && y == 0) {
            height = parseFloat($(this).attr('height'))
        }
    })

    var nowWord = $('#' + div + ' text:contains("Now")');

    nowWord.prev().first().attr('height', height + 'px').attr('width', '1px').attr('y', '0');
    // add this line to remove the display:none style on the vertical line
    $('#' + div + '  text:contains("Now")').each(function(idx, value) {
        if (idx == 0) {
            $(value).parent().find("rect").first().removeAttr("style");
        } else if (idx == 1) {
            $(value).parent().find("rect").first().attr("style", "display:none;");
        }

    });
}

$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/demaisj/Epitech-2022-Timeline/commits", function(json){
    var msg, el, date;

    $("#changelog-container").empty();

    for (var i = 0; i < json.length; i++) {
      msg = json[i].commit.message.split("\n");
      date = moment(json[i].commit.committer.date);
      el = $(`<p class="commit">
<a href="${json[i].html_url}" target="_blank" class="commit-msg">${msg[0]}</a>
<span title="${date.format("dddd, MMMM Do YYYY, h:mm:ss a")}" class="commit-date">${date.fromNow()}</span>
</p>`);
      if (msg.length > 1){
        for (var j = msg.length - 1; j >= 1; j--) {
          if (msg[j].length > 0){
            el.addClass("expanded");
            el.find("a").after(`<span class="commit-desc">${msg[j]}</span>`);
          }
        }
      }
      el.appendTo($("#changelog-container"));
    }

    if (json.length <= 0){
      $("#changelog-container").text("No commits !? xO");
    }
  })
  .fail(function(){
    $("#changelog-container").text("Error while loading changelog :'(");
  });

  function set_theme(dark){
    var dark = dark || false;

    window.localStorage.setItem("dark", dark);

    if (dark){
      $("body").addClass("dark");
      $("#switch").text("Switch to light");
    }
    else{
      $("body").removeClass("dark");
      $("#switch").text("Switch to dark");
    }
  }

  $("#switch").on("click", function(){
    set_theme(!$("body").hasClass("dark"));
    return false;
  })

  set_theme(window.localStorage.getItem("dark") == "true" ? true : false);
});
