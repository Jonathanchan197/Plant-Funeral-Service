<template>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </template>
  
  <script>
    import { db } from "../firestoreInit";
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    name: 'BarChart',
    components: { Bar },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        chartData: {
          labels: [ 'Indoor', 'Outdoor', 'Subscription' ],
          datasets: [ { label: 'User Analytics', data: []}]
        },
        chartOptions: {
          responsive: true
        },
        list: [],
        indoor: [],
        outdoor: [],
        subscription: [],
        data: [1,2,3],
      }
    },
    methods: {
        async getMarker() {
            await db.collection("users").get()
                .then((snapshot) => snapshot.docs.forEach((doc) => {
                this.list.push(doc.data());
            }));
            console.log(this.list[0].data.indoor)
            let i = [...Array(this.list.length-1).keys()]
            i.forEach((index) => {
                this.indoor.push(this.list[index].data.indoor);
                this.outdoor.push(this.list[index].data.outdoor);
                this.subscription.push(this.list[index].data.spam);
            })
            this.chartData.datasets[0].data.push(this.indoor.filter(Boolean).length)
            this.chartData.datasets[0].data.push(this.outdoor.filter(Boolean).length)
            this.chartData.datasets[0].data.push(this.subscription.filter(Boolean).length)
        }
    },
    beforeMount() {
        this.getMarker();
    },
  }
  </script>