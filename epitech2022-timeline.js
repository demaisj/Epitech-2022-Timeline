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
    ['Innov. - Moonshot', 'TOGETHER', start(2, 9, 2019), end(3, 9, 2019)],
    ['Innov. - Moonshot', 'CLIMATE', start(3, 9, 2019), end(4, 9, 2019)],
    ['Innov. - Moonshot', 'LIFE', start(4, 9, 2019), end(5, 9, 2019)],
    ['Innov. - Moonshot', 'WORK', start(5, 9, 2019), end(6, 9, 2019)],
    ['Innov. - Moonshot', 'Hack\'InTrack', start(7, 9, 2019), end(8, 9, 2019)],
    ['Innov. - Moonshot', 'Moonshot Solution', start(9, 9, 2019), end(12, 9, 2019)],
    ['Security - Cryptography', 'Call for Papers', start(2, 9, 2019), end(29, 9, 2019)],
    ['Security - Cryptography', 'CAESAR', start(16, 9, 2019), end(29, 9, 2019)],
    ['Security - Cryptography', 'BTTF', start(4, 11, 2019), end(10, 11, 2019)],
    ['Security - Cryptography', 'BTTF2', start(16, 12, 2019), end(29, 12, 2019)],
    ['FR - Écrits Professionnels', 'Avocat du diable', start(16, 9, 2019), end(6, 10, 2019)],
    ['FR - Écrits Professionnels', '3 emails', start(7, 10, 2019), end(27, 10, 2019)],
    ['FR - Écrits Professionnels', 'Mémo professionnel', start(28, 10, 2019), end(17, 11, 2019)],
    ['FR - Écrits Professionnels', 'Informer: Le magazine du geek', start(11, 11, 2019), end(12, 1, 2020)],
    ['Mathematics ', '301dannon', start(16, 9, 2019), end(29, 9, 2019)],
    ['Mathematics ', '302separation', start(30, 9, 2019), end(13, 10, 2019)],
    ['Mathematics ', '303make', start(14, 10, 2019), end(27, 10, 2019)],
    ['Mathematics ', '304pacman', start(28, 10, 2019), end(10, 11, 2019)],
    ['Mathematics ', '305construction', start(11, 11, 2019), end(24, 11, 2019)],
    ['Mathematics ', '306radiator', start(25, 11, 2019), end(22, 12, 2019)],
    ['Mathematics ', '307multigrains', start(23, 12, 2019), end(12, 1, 2020)],
    ['Mathematics ', '308reedpipes', start(13, 1, 2020), end(26, 1, 2020)],
    ['Mathematics ', '309pollution', start(27, 1, 2020), end(9, 2, 2020)],
    ['Advanced C++ - Babel', 'Babel', start(16, 09, 2019), end(6, 10, 2019)],
    ['Advanced C++ - Babel', 'BTTF', start(4, 11, 2019), end(10, 11, 2019)],
    ['Advanced C++ - Babel', 'BTTF2', start(16, 12, 2019), end(29, 12, 2019)],
    ['Appdev - Epicture', 'Epicture', start(30, 9, 2019), end(20, 10, 2019)],
    ['Appdev - Epicture', 'BTTF', start(4, 11, 2019), end(10, 11, 2019)],
    ['Appdev - Epicture', 'BTTF2', start(16, 12, 2019), end(29, 12, 2019)],
    ['Artificial Intelligence', 'Gomoku', start(7, 10, 2019), end(27, 10, 2019)],
    ['Artificial Intelligence', 'BTTF', start(4, 11, 2019), end(10, 11, 2019)],
    ['Artificial Intelligence', 'BTTF2', start(16, 12, 2019), end(29, 12, 2019)],
    ['Functional Prog - evalExpr', 'evalExpr', start(21, 10, 2019), end(3, 11, 2019)],
    ['Functional Prog - evalExpr', 'BTTF', start(4, 11, 2019), end(10, 11, 2019)],
    ['Functional Prog - evalExpr', 'BTTF2', start(16, 12, 2019), end(29, 12, 2019)],
    ['DevOps', 'Docker Containerization', start(21, 10, 2019), end(3, 11, 2019)],
    ['DevOps', 'Automation', start(4, 11, 2019), end(17, 11, 2019)],
    ['DevOps', 'Orchestrator', start(18, 11, 2019), end(15, 12, 2019)],
    ['Appdev - Dashboard', 'Dashboard', start(28, 10, 2019), end(17, 11, 2019)],
    ['Appdev - Dashboard', 'BTTF', start(16, 12, 2019), end(29, 12, 2019)],
    ['Advanced C++ - R-Type', 'R-Type', start(4, 11, 2019), end(1, 12, 2019)],
    ['Advanced C++ - R-Type', 'BTTF', start(16, 12, 2019), end(29, 12, 2019)],
    ['Functional Prog - dumbXML', 'dumbXML', start(18, 11, 2019), end(5, 1, 2020)],
    ['Functional Prog - dumbXML', 'BTTF', start(13, 1, 2020), end(19, 1, 2020)],
    ['Advanced C++ - Zia', 'Zia', start(6, 1, 2020), end(1, 3, 2020)],
    ['Appdev - AREA', 'AREA', start(6, 1, 2020), end(1, 3, 2020)],
    ['Functional Prog - KOAK ', 'KOAK ', start(6, 1, 2020), end(1, 3, 2020)],
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
