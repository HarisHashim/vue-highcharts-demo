<template>
    <section class="charts">
        <h3>Load Modules(Drilldown)</h3>
        <vue-highcharts :Highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
        <button @click="changeSeries">Change Series</button>
        <button  @click="changeDrillDown">DrillDown</button>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
import Drilldown from "highcharts/modules/drilldown.js";
import * as data from "../assets/data.js";
import Highcharts from "highcharts";

Drilldown(Highcharts);
Highcharts.setOptions({
  lang: {
    drillUpText: "back"
  }
});
export default {
  components: {
    VueHighcharts
  },
  data() {
    return {
      Highcharts: Highcharts,
      drilldownOptions: data.DrilldownData,
      isChanged: false,
      isChangedDrillDown: false
    };
  },
  methods: {
    changeSeries: function() {
      console.log("Changing Series!");
      const altSeries = [
        {
          name: "Things",
          colorByPoint: true,
          data: [
            {
              name: "Animals",
              y: 10,
              drilldown: "animals"
            },
            {
              name: "Fruits",
              y: 4,
              drilldown: "fruits"
            },
            {
              name: "Cars",
              y: 8,
              drilldown: "cars"
            }
          ]
        }
      ];

      const oriSeries = [
        {
          name: "Things",
          colorByPoint: true,
          data: [
            {
              name: "Animals",
              y: 5,
              drilldown: "animals"
            },
            {
              name: "Fruits",
              y: 2,
              drilldown: "fruits"
            },
            {
              name: "Cars",
              y: 4,
              drilldown: "cars"
            }
          ]
        }
      ];

      if (this.isChanged) {
        this.drilldownOptions.series = oriSeries;
        this.isChanged = false;
      } else {
        this.drilldownOptions.series = altSeries;
        this.isChanged = true;
      }
      this.$refs.drilldownChart.mergeOption(this.drilldownOptions);
    },
    changeDrillDown: function() {
      console.log("Changing DrillDown!");
      const altDrillDown = [
        {
          id: "animals",
          data: [
            ["Cats", 8],
            ["Dogs", 4],
            ["Cows", 2],
            ["Sheep", 4],
            ["Pigs", 2]
          ]
        },
        {
          id: "fruits",
          data: [
            {
              name: "Apples",
              y: 4
            },
            {
              name: "Oranges",
              y: 2,
              drilldown: "third-leves"
            }
          ]
        },
        {
          id: "cars",
          data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
        },
        {
          id: "third-leves",
          data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
        }
      ];

      const oriDrillDown = [
        {
          id: "animals",
          data: [
            ["Cats", 4],
            ["Dogs", 2],
            ["Cows", 1],
            ["Sheep", 2],
            ["Pigs", 1]
          ]
        },
        {
          id: "fruits",
          data: [
            {
              name: "Apples",
              y: 4
            },
            {
              name: "Oranges",
              y: 2,
              drilldown: "third-leves"
            }
          ]
        },
        {
          id: "cars",
          data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
        },
        {
          id: "third-leves",
          data: [["Toyota", 4], ["Opel", 2], ["Volkswagen", 2]]
        }
      ];
      
      if (this.isChangedDrillDown) {
        this.drilldownOptions.drilldown.series = oriDrillDown;
        this.isChangedDrillDown = false;
      } else {
        this.drilldownOptions.drilldown.series = altDrillDown;
        this.isChangedDrillDown = true;
      }
      this.$refs.drilldownChart.mergeOption(this.drilldownOptions);
    }
  }
};
</script>
