import Ember from "ember";

export default Ember.Route.extend({
  model: function () {

    var chart1 = {
      values: [5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7],
      options: {
        type: 'bar'
      }
    };

    var chart2 = {
      values: [5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7],
      options: {
        type: 'bar',
        height: 30,
        barColor: 'red',
        barWidth: 5,
        barSpacing: 2
      }
    };

    var chart3 = {
      values: [5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7],
      options: {
        type: 'line',
        height: 80,
        width: '100%',
        lineColor: '#7266ba',
        lineWidth: 2,
        spotColor: '#888',
        minSpotColor: '#7266ba',
        fillColor: '',
        highlightLineColor: '#fff',
        spotRadius: 3
      }
    };

    return  {
      charts: [chart1, chart2, chart3]
    };
  }
});
