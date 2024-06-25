var options = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    locales: [{
        "name": "tr",
        "options": {
          "months": [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
          ],
          "shortMonths": [
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
            "Ara"
          ],
          "days": [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi"
          ],
          "shortDays": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          "toolbar": {
            "exportToSVG": "SVG İndir",
            "exportToPNG": "PNG İndir",
            "exportToCSV": "CSV İndir",
            "menu": "Menü",
            "selection": "Seçim",
            "selectionZoom": "Seçim Yakınlaştır",
            "zoomIn": "Yakınlaştır",
            "zoomOut": "Uzaklaştır",
            "pan": "Kaydır",
            "reset": "Yakınlaştırmayı Sıfırla"
          }
        }
      }
      ],
      defaultLocale: "tr"
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
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
  },
  
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();





var chart_users = {
    series: [
      {
        name: "Eylül 07 ",
        data: [0, 20, 15, 19, 14, 25, 30],
      },
      {
        name: "Geçen Hafta",
        data: [0, 8, 19, 13, 26, 16, 25],
      },
    ],
    chart: {
      fontFamily: "inherit",
      height: 100,
      type: "line",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      locales: [{
        "name": "tr",
        "options": {
          "months": [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
          ],
          "shortMonths": [
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
            "Ara"
          ],
          "days": [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi"
          ],
          "shortDays": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          "toolbar": {
            "exportToSVG": "SVG İndir",
            "exportToPNG": "PNG İndir",
            "exportToCSV": "CSV İndir",
            "menu": "Menü",
            "selection": "Seçim",
            "selectionZoom": "Seçim Yakınlaştır",
            "zoomIn": "Yakınlaştır",
            "zoomOut": "Uzaklaştır",
            "pan": "Kaydır",
            "reset": "Yakınlaştırmayı Sıfırla"
          }
        }
      }
      ],
      defaultLocale: "tr"
    },
    colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
      width: 2,
    },
    markers: {
      colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
      strokeColors: "transparent",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      followCursor: true,
    },
    
  };
  var chart_line_basic = new ApexCharts(
    document.querySelector("#customers-area"),
    chart_users
  );
  chart_line_basic.render();





  $(document).ready(function() {
    $('.test2').on('click', function() {
        var $chevron = $(this).find('.fa-chevron-down');
        var $dropdownMenu = $(this).next('.dropdown-menu');
        if ($dropdownMenu.hasClass('show')) {
            $chevron.addClass('rotate-180');
        } else {
            $chevron.removeClass('rotate-180');
          }
        
        $dropdownMenu.on('hide.bs.dropdown', function () {
            $chevron.removeClass('rotate-180');
        });
    });
});