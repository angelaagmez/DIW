google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('string', 'Resource');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        data.addRows([
            ['2014Spring', 'Spring 2014', 'spring',
            new Date(2014, 2, 22), new Date(2014, 5, 20), null, 45, null],
            ['2014Summer', 'Summer 2014', 'summer',
            new Date(2014, 5, 21), new Date(2014, 8, 20), null, 25, null],
            ['2014Autumn', 'Autumn 2014', 'autumn',
            new Date(2014, 8, 21), new Date(2014, 11, 20), null, 75, null],
            ['2014Winter', 'Winter 2014', 'winter',
            new Date(2014, 11, 21), new Date(2015, 2, 21), null, 80, null],
            ['2015Spring', 'Spring 2015', 'spring',
            new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
            ]);

        var options = {
            width: 700,
            height: 150,
            gantt: {
            trackHeight: 30
            }
        };

        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);
    

    function drawVisualization() {
      // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
        title : 'Monthly Clothes Sales by Country',
        width: 1000,
        height: 110,
        vAxis: {title: 'Clothes'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
    }

    google.charts.load('current', {
        'packages':['geochart'],
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        ]);

        var options = {
            width: 400,
            height: 120
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Media ventas por dia'],
        ['Hoodies',     11],
        ['Pantalones',      2],
        ['Camisetas',  2],
        ['Camisas', 2],
        ['Accesorios',    7]
    ]);

    var options = {
        title: 'Media de ventas por dia',
        width: 300,
        height: 100
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {
        var data = google.visualization.arrayToDataTable([
        ['ID', 'Sales Expectancy', 'Sales Rate', 'Region',     'Population'],
        ['CAN',    80.66,              1.67,      'North America',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['USA',    78.09,              2.05,      'North America',  307007000]
        ]);

        var options = {
        title: 'Sales rate vs sales expectancy in selected countries (2010).' +
            ' X=Sales Expectancy, Y=Sales, Bubble size=Population, Bubble color=Region',
        width: 750,
        height: 100,
        hAxis: {title: 'Sales Expectancy'},
        vAxis: {title: 'Sales Rate'},
        bubble: {textStyle: {fontSize: 11}}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
        chart.draw(data, options);
    }


    google.charts.load("current", {packages:["calendar"]});
    google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'date', id: 'Date' });
        dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
        dataTable.addRows([
        // Many rows omitted for brevity.
        [ new Date(2015, 9, 4), 177 ],
        [ new Date(2015, 9, 5), 705 ],
        [ new Date(2015, 9, 12), 210 ],
        [ new Date(2015, 9, 13), 389 ],
        [ new Date(2015, 9, 19), 383 ],
        [ new Date(2015, 9, 23), 385 ],
        [ new Date(2015, 9, 24), 846 ],
        [ new Date(2015, 9, 30), 844 ],
        [ new Date(2015, 6, 1), 805 ],
        [ new Date(2015, 6, 8), 821 ],
        [ new Date(2015, 6, 9), 802 ],
        [ new Date(2015, 6, 15), 882 ],
        [ new Date(2015, 6, 14), 845 ],
        [ new Date(2015, 6, 10), 436 ],
        [ new Date(2015, 6, 19), 323 ],
        [ new Date(2015, 6, 23), 334 ],
        [ new Date(2015, 12, 24), 346 ],
        [ new Date(2015, 12, 30), 447 ],
        [ new Date(2015, 12, 31), 705 ],
        [ new Date(2015, 12, 28), 821 ],
        [ new Date(2015, 12, 29), 829 ],
        [ new Date(2015, 12, 15), 823 ],
        [ new Date(2015, 12, 14), 685 ],
        [ new Date(2015, 12, 25), 583 ],
        [ new Date(2015, 10, 4), 436 ],
        [ new Date(2015, 10, 3), 447 ],
        [ new Date(2015, 10, 5), 705 ],
        [ new Date(2015, 10, 18), 210 ],
        [ new Date(2015, 10, 9), 291 ],
        [ new Date(2015, 10, 12), 823 ],
        [ new Date(2015, 10, 13), 345 ],
        [ new Date(2015, 10, 21), 384 ],
        [ new Date(2015, 4, 29), 829 ],
        [ new Date(2015, 4, 15), 823 ],
        [ new Date(2015, 4, 14), 685 ],
        [ new Date(2015, 4, 25), 583 ],
        [ new Date(2015, 4, 4), 436 ],
        [ new Date(2015, 3, 3), 447 ],
        [ new Date(2015, 3, 5), 705 ],
        [ new Date(2015, 3, 18), 210 ],
        [ new Date(2015, 3, 9), 291 ],
        [ new Date(2015, 3, 12), 823 ],
        [ new Date(2015, 2, 13), 345 ],
        [ new Date(2015, 2, 21), 384 ],
        ]);

        var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

        var options = {
            width: 1000,
            height: 180,
            calendar: {
                focusedCellColor: {
                    stroke: '#d3362d',
                    strokeOpacity: 1,
                    strokeWidth: 1,
                }
            }
        };

        chart.draw(dataTable, options);
}

// $(function() {
//     var Accordion = function(el, multiple) {
//         this.el = el || {};
//       // more then one submenu open?
//         this.multiple = multiple || false;
//         var dropdownlink = this.el.find('.dropdownlink');
//         dropdownlink.on('click',
//                         { el: this.el, multiple: this.multiple },
//                         this.dropdown);
//     };
    
//     Accordion.prototype.dropdown = function(e) {
//         var $el = e.data.el,
//         $this = $(this),
//           //this is the ul.submenuItems
//         $next = $this.next();
//         $next.slideToggle();
//         $this.parent().toggleClass('open');
//         if(!e.data.multiple) {
//         //show only one menu at the same time
//         $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
//         }
//     }
    
//     var accordion = new Accordion($('.accordion-menu'), false);
// })
