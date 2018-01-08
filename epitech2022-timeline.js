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

      [ 'Elementary Programming in C (Part 1)', 'Matchstick', sdate(29, 01, 2018), edate(11, 02, 2018) ],
      [ 'Elementary Programming in C (Part 1)', 'Corewar', sdate(05, 02, 2018), edate(11, 03, 2018) ],

      [ 'C Graphical Programming', 'MyWorld', sdate(29, 01, 2018), edate(04, 03, 2018) ],
      [ 'C Graphical Programming', 'MyCook', sdate(29, 01, 2018), edate(04, 03, 2018) ],
      [ 'C Graphical Programming', 'MyRPG', sdate(05, 03, 2018), edate(13, 05, 2018) ],

      [ 'French Writing Skills', "Mode d'emploi", sdate(29, 01, 2018), edate(18, 02, 2018) ],
      [ 'French Writing Skills', 'Faire préciser', sdate(26, 02, 2018), edate(11, 03, 2018) ],
      [ 'French Writing Skills', 'Lettre de vente', sdate(19, 03, 2018), edate(15, 04, 2018) ],

      [ 'Unix System Programming', 'Navy', sdate(05, 02, 2018), edate(25, 02, 2018) ],
      [ 'Unix System Programming', 'Tetris', sdate(26, 02, 2018), edate(18, 03, 2018) ],

      [ 'Mathematics', '106bombyx', sdate(05, 02, 2018), edate(18, 02, 2018) ],
      [ 'Mathematics', '107transfer', sdate(19, 02, 2018), edate(04, 03, 2018) ],
      [ 'Mathematics', '108trigo', sdate(05, 03, 2018), edate(18, 03, 2018) ],
      [ 'Mathematics', '109titration', sdate(19, 03, 2018), edate(01, 04, 2018) ],
      [ 'Mathematics', '110borwein', sdate(02, 04, 2018), edate(15, 04, 2018) ],

      [ 'Introduction to Sys Admin.', 'My Web', sdate(26, 02, 2018), edate(26, 03, 2018) ],

      [ 'Introduction to Networks', 'Rush', sdate(26, 02, 2018), edate(11, 03, 2018) ],

      [ 'Elementary Programming in C (Part 2)', 'Lem-in', sdate(12, 03, 2018), edate(08, 04, 2018) ],
      [ 'Elementary Programming in C (Part 2)', 'Need4Stek', sdate(09, 04, 2018), edate(20, 05, 2018) ],

      [ 'Shell Programming', 'MiniShell 2', sdate(19, 03, 2018), edate(15, 04, 2018) ],
      [ 'Shell Programming', '42Sh', sdate(16, 04, 2018), edate(27, 05, 2018) ],

      [ 'Introduction to Web Dev', 'EPyTodo', sdate(26, 03, 2018), edate(09, 04, 2018) ],

      [ 'Introduction to AI', "Dante's star", sdate(09, 04, 2018), edate(13, 05, 2018) ],
      [ 'Introduction to AI', 'Tournament', sdate(14, 05, 2018), edate(20, 05, 2018) ],

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
