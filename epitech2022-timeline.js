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

    [ 'Elementary Programming in C', 'Pushswap', sdate(06, 11, 2017), edate(26, 11, 2017) ],
    [ 'Elementary Programming in C', 'BSQ', sdate(27, 11, 2017), edate(17, 12, 2017) ],

    [ 'Unix System Programming', 'my_printf', sdate(06, 11, 2017), edate(19, 11, 2017) ],
    [ 'Unix System Programming', 'my_ls', sdate(20, 11, 2017), edate(03, 12, 2017) ],
    [ 'Unix System Programming', 'my_sokoban', sdate(04, 12, 2017), edate(17, 12, 2017) ],

    [ 'Mathematics', '101pong', sdate(06, 11, 2017), edate(19, 11, 2017) ],
    [ 'Mathematics', '102architect', sdate(20, 11, 2017), edate(03, 12, 2017) ],
    [ 'Mathematics', '103cipher', sdate(04, 12, 2017), edate(17, 12, 2017) ],
    [ 'Mathematics', '104intersection', sdate(18, 12, 2017), edate(07, 01, 2018) ],
    [ 'Mathematics', '105torus', sdate(08, 01, 2018), edate(21, 01, 2018) ],

    [ 'French Writing Skills', 'Mail pro', sdate(06, 11, 2017), edate(26, 11, 2017) ],
    [ 'French Writing Skills', 'Lettre argumentée', sdate(04, 12, 2017), edate(07, 01, 2018) ],
    [ 'French Writing Skills', 'RUSH - Les Seigneurs des mots', sdate(14, 12, 2017), edate(21, 12, 2017) ],

    [ 'C Graphical Programming', 'MyScreenSaver', sdate(13, 11, 2017), edate(10, 12, 2017) ],
    [ 'C Graphical Programming', 'MyHunter', sdate(13, 11, 2017), edate(10, 12, 2017) ],
    [ 'C Graphical Programming', 'MyRadar', sdate(11, 12, 2017), edate(14, 01, 2018) ],
    [ 'C Graphical Programming', 'MyRunner', sdate(11, 12, 2017), edate(14, 01, 2018) ],

    [ 'GetNextLine', 'GetNextLine', sdate(01, 01, 2018), edate(14, 01, 2018) ],

    [ 'Shell Programming', 'Minishell 1', sdate(01, 01, 2018), edate(21, 01, 2018) ],

    [ 'Introduction to OS', 'Rush', sdate(21, 01, 2018), edate(27, 01, 2018) ],
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
