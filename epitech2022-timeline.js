google.charts.load('current', { packages: ['timeline'] });
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year) {
  return new Date(year, month - 1, day);
}

function start(day, month, year) {
  return date(day, month, year);
}

function end(day, month, year) {
  var d = date(day, month, year);
  d.setDate(d.getDate() + 1);
  return d;
}

function drawChart() {
  var container = document.getElementById('timeline-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' });
  dataTable.addColumn({ type: 'string', id: 'Project' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  var now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  dataTable.addRows([
    ['\0', 'Now', now, now],

    [ 'B5 - FR - Écrits Professionnels', 'Avocat du diable', start(16, 09, 2019), start(06, 10, 2019) ],
    [ 'B5 - FR - Écrits Professionnels', '3 emails', start(07, 10, 2019), start(27, 10, 2019) ],
    [ 'B5 - FR - Écrits Professionnels', 'Mémo professionel', start(28, 10, 2019), start(17, 11, 2019) ],
    [ 'B5 - FR - Écrits Professionnels', 'Informer: Le magasine du geek', start(11, 11, 2019), start(12, 01, 2020) ],

    [ 'B5 - Advanced C++ - Babel', 'Babel', start(16, 09, 2019), start(06, 10, 2019) ],
    [ 'B5 - Advanced C++ - Babel', 'BTTF - Babel', start(04, 11, 2019), start(10, 11, 2019) ],
    [ 'B5 - Advanced C++ - Babel', 'BTTF 2 - Babel', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - Advanced C++ - R-Type', 'R-Type', start(04, 11, 2019), start(01, 12, 2019) ],
    [ 'B5 - Advanced C++ - R-Type', 'BTTF - R-Type', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - Advanced C++ - Zia', 'Zia', start(06, 01, 2020), start(01, 03, 2020) ],

    [ 'B5 - AppDev - AREA', 'AREA', start(06, 01, 2020), start(01, 03, 2020) ],

    [ 'B5 - AppDev - Dashboard', 'Dashboard', start(28, 10, 2019), start(17, 11, 2019) ],
    [ 'B5 - AppDev - Dashboard', 'BTTF - Dashboard', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - AppDev - Epicture', 'Epicture', start(30, 09, 2019), start(20, 10, 2019) ],
    [ 'B5 - AppDev - Epicture', 'BTTF - Epicture', start(04, 11, 2019), start(10, 11, 2019) ],
    [ 'B5 - AppDev - Epicture', 'BTTF 2 - Epicture', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - Artificial Intelligence', 'Gomoku', start(07, 10, 2019), start(27, 10, 2019) ],
    [ 'B5 - Artificial Intelligence', 'BTTF - Gomoku', start(04, 11, 2019), start(10, 11, 2019) ],
    [ 'B5 - Artificial Intelligence', 'BTTF 2 - Gomoku', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - DevOps', 'Docker Containerization', start(21, 10, 2019), start(03, 11, 2019) ],
    [ 'B5 - DevOps', 'Automation', start(04, 11, 2019), start(17, 11, 2019) ],
    [ 'B5 - DevOps', 'Orchestrator', start(18, 11, 2019), start(15, 12, 2019) ],

    [ 'B5 - Functional Prog - dumbXML', 'dumbXML', start(18, 11, 2019), start(05, 01, 2020) ],
    [ 'B5 - Functional Prog - dumbXML', 'BTTF - dumbXML', start(13, 01, 2020), start(19, 01, 2020) ],

    [ 'B5 - Functional Prog - evalExpr', 'functional evalExpr', start(21, 10, 2019), start(03, 11, 2019) ],
    [ 'B5 - Functional Prog - evalExpr', 'BTTF - functional evalExpr', start(04, 11, 2019), start(10, 11, 2019) ],
    [ 'B5 - Functional Prog - evalExpr', 'BTTF 2 - functional evalExpr', start(16, 12, 2019), start(29, 12, 2019) ],

    [ 'B5 - Functional Prog - KOAK', 'KOAK', start(06, 01, 2020), start(01, 03, 2020) ],

    [ 'B5 - Innov. - Moonshot', '#TOGETHER', start(02, 09, 2019), start(03, 09, 2019) ],
    [ 'B5 - Innov. - Moonshot', '#CLIMATE', start(03, 09, 2019), start(04, 09, 2019) ],
    [ 'B5 - Innov. - Moonshot', '#LIFE', start(04, 09, 2019), start(05, 09, 2019) ],
    [ 'B5 - Innov. - Moonshot', '#WORK', start(05, 09, 2019), start(06, 09, 2019) ],
    [ 'B5 - Innov. - Moonshot', 'Hack\'InTrack', start(07, 09, 2019), start(08, 09, 2019) ],
    [ 'B5 - Innov. - Moonshot', 'Moonshot Solution', start(09, 09, 2019), start(12, 09, 2019) ],

    [ 'B5 - Mathematics', '301dannon', start(16, 09, 2019), start(29, 09, 2019) ],
    [ 'B5 - Mathematics', '302separation', start(30, 09, 2019), start(13, 10, 2019) ],
    [ 'B5 - Mathematics', '303make', start(14, 10, 2019), start(27, 10, 2019) ],
    [ 'B5 - Mathematics', '304pacman', start(28, 10, 2019), start(10, 11, 2019) ],
    [ 'B5 - Mathematics', '305construction', start(11, 11, 2019), start(24, 11, 2019) ],
    [ 'B5 - Mathematics', '306radiator', start(25, 11, 2019), start(22, 12, 2019) ],
    [ 'B5 - Mathematics', '307multigrains', start(23, 12, 2019), start(12, 01, 2020) ],
    [ 'B5 - Mathematics', '308reedpipes', start(13, 01, 2020), start(26, 01, 2020) ],
    [ 'B5 - Mathematics', '309pollution', start(27, 01, 2020), start(09, 02, 2020) ],

    [ 'B5 - Part-Time Job', 'Part-time internship', start(16, 09, 2019), start(08, 03, 2020) ]
  ]);

  chart.draw(dataTable, {
    timeline: {
      colorByRowLabel: true
    }
  });

  nowLine('timeline-container');

  google.visualization.events.addListener(chart, 'onmouseover', function(obj) {
    if (obj.row == 0) {
      $('.google-visualization-tooltip').css('display', 'none');
    }
    nowLine('timeline-container');
  });

  google.visualization.events.addListener(chart, 'onmouseout', function(obj) {
    nowLine('timeline-container');
  });
}

function nowLine(div) {
  //get the height of the timeline div
  var height;
  $('#' + div + ' rect').each(function(index) {
    var x = parseFloat($(this).attr('x'));
    var y = parseFloat($(this).attr('y'));

    if (x == 0 && y == 0) {
      height = parseFloat($(this).attr('height'));
    }
  });

  var nowWord = $('#' + div + ' text:contains("Now")');

  nowWord
    .prev()
    .first()
    .attr('height', height + 'px')
    .attr('width', '1px')
    .attr('y', '0');
  // add this line to remove the display:none style on the vertical line
  $('#' + div + '  text:contains("Now")').each(function(idx, value) {
    if (idx == 0) {
      $(value)
        .parent()
        .find('rect')
        .first()
        .removeAttr('style');
    } else if (idx == 1) {
      $(value)
        .parent()
        .find('rect')
        .first()
        .attr('style', 'display:none;');
    }
  });
}

$(document).ready(function() {
  $.getJSON('https://api.github.com/repos/demaisj/Epitech-2022-Timeline/commits', function(json) {
    var msg, el, date;

    $('#changelog-container').empty();

    for (var i = 0; i < json.length; i++) {
      msg = json[i].commit.message.split('\n');
      date = moment(json[i].commit.committer.date);
      el = $(`<p class="commit">
<a href="${json[i].html_url}" target="_blank" class="commit-msg">${msg[0]}</a>
<span title="${date.format('dddd, MMMM Do YYYY, h:mm:ss a')}" class="commit-date">${date.fromNow()}</span>
</p>`);
      if (msg.length > 1) {
        for (var j = msg.length - 1; j >= 1; j--) {
          if (msg[j].length > 0) {
            el.addClass('expanded');
            el.find('a').after(`<span class="commit-desc">${msg[j]}</span>`);
          }
        }
      }
      el.appendTo($('#changelog-container'));
    }

    if (json.length <= 0) {
      $('#changelog-container').text('No commits !? xO');
    }
  }).fail(function() {
    $('#changelog-container').text("Error while loading changelog :'(");
  });

  function set_theme(dark) {
    var dark = dark || false;

    window.localStorage.setItem('dark', dark);

    if (dark) {
      $('body').addClass('dark');
      $('#switch').text('Switch to light');
    } else {
      $('body').removeClass('dark');
      $('#switch').text('Switch to dark');
    }
  }

  $('#switch').on('click', function() {
    set_theme(!$('body').hasClass('dark'));
    return false;
  });

  set_theme(window.localStorage.getItem('dark') == 'true' ? true : false);
  setTimeout(function() {
    $('body').addClass('ready');
  }, 500);
});
