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

    ['C++ Seminar', 'C++ Seminar', start(3, 1, 2019), end(27, 1, 2019)],
    ['Shell Scripting', 'ShellScript Project', start(21, 1, 2019), end(27, 1, 2019)],
    ['Unix Programming - Memory', 'malloc', start(21, 1, 2019), end(3, 2, 2019)],
    ['Unix Programming - Memory', 'nm/objdump', start(4, 2, 2019), end(24, 2, 2019)],
    ['Object-Oriented Programming', 'NanoTekSpice', start(21, 1, 2019), end(24, 2, 2019)],
    ['Object-Oriented Programming', 'Arcade', start(25, 2, 2019), end(31, 3, 2019)],
    ['Network and System Administration', 'Systems and Networks Administration project', start(28, 1, 2019), end(10, 2, 2019)],
    ['FR - Écrits professionnels', 'Mission délicate: recadrer un collègue', start(28, 1, 2019), end(10, 2, 2019)],
    ['FR - Écrits professionnels', 'Diaporama pour décrocher 1 million de dollars', start(18, 2, 2019), end(3, 3, 2019)],
    ['FR - Écrits professionnels', "Rédiger un bilan d'expérience", start(4, 3, 2019), end(17, 3, 2019)],
    ['Computer Numerical Analysis - Trading', 'Bollinger Bands', start(28, 1, 2019), end(3, 3, 2019)],
    ['Computer Numerical Analysis - Trading', 'Trade', start(4, 3, 2019), end(2, 6, 2019)],
    ['Web Security', 'SHODAN', start(11, 2, 2019), end(24, 2, 2019)],
    ['x86-64 Assembly', 'MiniLibC', start(11, 2, 2019), end(10, 3, 2019)],
    ['Mathematics', '201yams', start(11, 2, 2019), end(24, 2, 2019)],
    ['Mathematics', '202unsold', start(25, 2, 2019), end(10, 3, 2019)],
    ['Mathematics', '203hotline', start(11, 3, 2019), end(24, 3, 2019)],
    ['Mathematics', '204ducks', start(25, 3, 2019), end(7, 4, 2019)],
    ['Mathematics', '205IQ', start(8, 4, 2019), end(21, 4, 2019)],
    ['Mathematics', '206neutrinos', start(22, 4, 2019), end(5, 5, 2019)],
    ['Mathematics', '207demography', start(29, 4, 2019), end(12, 5, 2019)],
    ['Mathematics', '208dowels', start(6, 5, 2019), end(19, 5, 2019)],
    ['Mathematics', '209poll', start(13, 5, 2019), end(26, 5, 2019)],
    ['Functional programming', 'deBruijn', start(18, 2, 2019), end(3, 3, 2019)],
    ['Functional programming', 'Image Compressor', start(25, 3, 2019), end(28, 4, 2019)],
    ['Unix Programming - Instrumentation', 'strace', start(25, 2, 2019), end(10, 3, 2019)],
    ['Unix Programming - Instrumentation', 'ftrace', start(25, 3, 2019), end(21, 4, 2019)],
    ['Network Programming', 'FTP Server', start(25, 3, 2019), end(14, 4, 2019)],
    ['Network Programming', 'MyChap', start(15, 4, 2019), end(28, 4, 2019)],
    ['Network Programming', 'ARP Spoofing', start(6, 5, 2019), end(26, 5, 2019)],
    ['Concurrent Programming', 'The Plazza', start(1, 4, 2019), end(28, 4, 2019)],
    ['Project Week', 'Project', start(6, 5, 2019), end(10, 5, 2019)],
    ['Binary Security', 'NOOB', start(6, 5, 2019), end(19, 5, 2019)],
    ['Year-End-Project - Indie Studio', 'Indie Studio', start(6, 5, 2019), end(16, 6, 2019)],
    ['Year-End-Project - Zappy', 'Zappy', start(13, 5, 2019), end(23, 6, 2019)]
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
