// Payment Method Start
function addBoxShadow() {
  var bars = document.querySelectorAll('.apexcharts-bar');

  bars.forEach(function(bar) {
    bar.style.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.1)';
  });
}

var toplamTahsilatOptions = {
  series: [
    {
      name: "Toplam Tahsilat",
      data: [2.3, 3.1, 4.0, 2.0, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5],
    },
  ],
  chart: {
    height: 80,
    type: "bar",
    toolbar: {
      show: false, // Bu satır hamburger menüsünü devre dışı bırakır
    },
    events: {
      mounted: function (chartContext, config) {
        addBoxShadow();
      },
      updated: function (chartContext, config) {
        addBoxShadow();
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // üst, orta, alt
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false, // Ay isimlerini gizler
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  grid: {
    show: false,
  },
  title: {
    text: "Toplam Tahsilat",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444",
    },
  },
  fill: {
    colors: ["#178f39"],
  },
  tooltip: {
    enabled: false,
  },
};

var toplamTahsilatChart = new ApexCharts(
  document.querySelector("#toplam-tahsilat"),
  toplamTahsilatOptions
);
toplamTahsilatChart.render();


var gecikmisOdemelerToplamiOptions = {
  series: [
    {
      name: "Gecikmiş Ödemeler Toplamı",
      data: [2.3, 3.1, 4.0, 2.0, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5],
    },
  ],
  chart: {
    height: 80,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "10px",
      colors: ["#000000"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    labels: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  grid: {
    show: false,
  },
  title: {
    text: "Gecikmiş Ödemeler Toplamı",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444",
    },
  },
  fill: {
    colors: ["#F64A54"],
  },
  tooltip: {
    enabled: false,
  },
};

var gecikmisOdemelerToplamiChart = new ApexCharts(
  document.querySelector("#gecikmis-odemeler-toplami-chart"),
  gecikmisOdemelerToplamiOptions
);
gecikmisOdemelerToplamiChart.render();

var tahsilatYontemiChartOptions = {
  series: [
    {
      name: "Kart/Eft",
      data: [80, 100, 45, 80, 80, 55, 30, 10, 72],
    },
    {
      name: "Nakit",
      data: [50, 75, 18, 20, 35, 65, 80, 90, 100],
    },
  ],
  chart: {
    height: 194,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      show: false,
    },
    categories: [
      "2024-01-01T00:00:00.000Z",
      "2024-02-01T00:00:00.000Z",
      "2024-03-01T00:00:00.000Z",
      "2024-04-01T00:00:00.000Z",
      "2024-05-01T00:00:00.000Z",
      "2024-06-01T00:00:00.000Z",
      "2024-07-01T00:00:00.000Z",
      "2024-08-01T00:00:00.000Z",
      "2024-09-01T00:00:00.000Z",
    ],
    axisBorder: {
      show: false, // X ekseni zemin rengini gizler
    },
    axisTicks: {
      show: false, // X ekseni çizgi rengini gizler
    },
    tooltip: {
      enabled: false, // Tooltip'i devre dışı bırakır
    },
  },
  yaxis: {
    labels: {
      show: false, // Y ekseni etiketlerini gizler
    },
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#198754", "#f0ad4e"],
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  fill: {
    colors: ["#ffffff"],
  },
};

var tahsilatYontemiChart = new ApexCharts(
  document.querySelector("#tahsilat-yontemi-chart"),
  tahsilatYontemiChartOptions
);
tahsilatYontemiChart.render();

var tahsilatOraniOptions = {
  series: [76],
  chart: {
    type: "radialBar",
    offsetY: -20,
    height: 432,
    sparkline: {
      enabled: true,
    },
    stacked: false,
  },

  plotOptions: {
    bar: {
      borderRadius: 30,
    },
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#dddede",
        strokeWidth: "85%",
        margin: 5,
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: "#999",
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: "30px",
          fontWeight: "bold",
        },
      },
      hollow: {
        margin: 15,
        size: "70%",
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    type: "solid",
    colors: ["#178f39"],
  },
  labels: ["Average Results"],
};

var tahsilatOraniChart = new ApexCharts(
  document.querySelector("#tahsilat-orani-chart"),
  tahsilatOraniOptions
);
tahsilatOraniChart.render();


var odemeDurumuOption = {
  series: [70],
  chart: {
    width: 100,
    height: 100,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '40%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: '14px',
          fontWeight: 'bold',
          formatter: function (val) {
            return val + "%";
          },
          offsetY: 5,
        },
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#178f39"],
  },
};

var odemeDurumuChart = new ApexCharts(document.querySelector("#chart"), odemeDurumuOption);
odemeDurumuChart.render();




// Payment Method End
