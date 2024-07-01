// $(document).ready(function() {
//   $('.aside-toggle-box').click(function() {
//       $('.dashboard-aside').toggleClass('collapsed');
//       $('.dashboard-main').toggleClass('collapsed');
      
//       var $icon = $(this).find('svg'); // Belirli bir simgeyi seç
//       if ($icon.hasClass('fa-chevron-left')) {
//           $icon.removeClass('fa-chevron-left').addClass('fa-chevron-right');
//       } else {
//           $icon.removeClass('fa-chevron-right').addClass('fa-chevron-left');
//       }

//   });
// });



// $(document).ready(function() {
//   $('.aside-toggle-box').click(function() {
//     $('.dashboard-aside').toggleClass('collapsed');
//     $('.dashboard-main').toggleClass('collapsed');

//     var $icon = $(this).find('svg'); // Belirli bir simgeyi seç
//     $icon.toggleClass('fa-chevron-left fa-chevron-right');

//     // Logo değişimi
//     if ($('.dashboard-aside').hasClass('collapsed')) {
//       $('.logo-box').addClass('d-none');
//       $('.logo-box-collapsed').removeClass('d-none').addClass('d-block');
//     } else {
//       $('.logo-box').removeClass('d-none');
//       $('.logo-box-collapsed').addClass('d-none').removeClass('d-block');
//     }
//   });

//   // Mouse enter ve leave olayları
//   $('.dashboard-aside').on('mouseenter', function() {
//     if ($(this).hasClass('collapsed')) {
//       $(this).removeClass('collapsed-hover');
//       $(this).addClass('expanded-hover');
//       // Hover sırasında logo değişimi
//       $('.logo-box').removeClass('d-none').addClass('d-block');
//       $('.logo-box-collapsed').addClass('d-none').removeClass('d-block');
//     }
//   });

//   $('.dashboard-aside').on('mouseleave', function() {
//     if ($(this).hasClass('collapsed')) {
//       $(this).removeClass('expanded-hover');
//       $(this).addClass('collapsed-hover');
//       // Hover çıkışında logo eski haline dönsün
//       $('.logo-box').addClass('d-none').removeClass('d-block');
//       $('.logo-box-collapsed').removeClass('d-none').addClass('d-block');
//     }
//   });
// });


// $(document).ready(function() {
//   const $aside = $('.dashboard-aside');
//   const $main = $('.dashboard-main');
//   const $logoBox = $('.logo-box');
//   const $logoBoxCollapsed = $('.logo-box-collapsed');

//   function toggleLogo(isCollapsed) {
//     $logoBox.toggleClass('d-none', isCollapsed);
//     $logoBoxCollapsed.toggleClass('d-none', !isCollapsed);
//   }

//   $('.aside-toggle-box').click(function() {
//     const isCollapsed = $aside.toggleClass('collapsed').hasClass('collapsed');
//     $main.toggleClass('collapsed');
    

//     toggleLogo(isCollapsed);
//   });

//   $aside.hover(
//     function() {
//       if ($(this).hasClass('collapsed')) {
//         $(this).removeClass('collapsed-hover').addClass('expanded-hover');
//         toggleLogo(false);
//       }
//     },
//     function() {
//       if ($(this).hasClass('collapsed')) {
//         $(this).removeClass('expanded-hover').addClass('collapsed-hover');
//         toggleLogo(true);
//       }
//     }
//   );
// });


// $(document).ready(function () {
//   const $aside = $('.dashboard-aside');
//   const $main = $('.dashboard-main');
//   const $logoBox = $('.logo-box');
//   const $logoBoxCollapsed = $('.logo-box-collapsed');
//   let isCollapsed = false;

//   function toggleLogo(isCollapsed) {
//       $logoBox.toggleClass('d-none', isCollapsed);
//       $logoBoxCollapsed.toggleClass('d-none', !isCollapsed);
//   }

//   $('.aside-toggle-box').click(function () {
//       isCollapsed = !isCollapsed;
//       $aside.toggleClass('collapsed', isCollapsed);
//       $main.toggleClass('collapsed', isCollapsed);
//       toggleLogo(isCollapsed);
//   });

//   $aside.on('mouseenter', function () {
//       if (isCollapsed) {
//           $aside.addClass('expanded-hover');
     
//           toggleLogo(false);
//       }
//   });

//   $aside.on('mouseleave', function () {
//       if (isCollapsed) {
//           $aside.removeClass('expanded-hover');

//           toggleLogo(true);
//       }
//   });
// });


// $(document).ready(function () {
//   const $aside = $('.dashboard-aside');
//   const $main = $('.dashboard-main');
//   const $logoBox = $('.logo-box');
//   const $logoBoxCollapsed = $('.logo-box-collapsed');
//   let isCollapsed = false;

//   function toggleLogo(isCollapsed) {
//       $logoBox.toggleClass('d-none', isCollapsed);
//       $logoBoxCollapsed.toggleClass('d-none', !isCollapsed);
//   }

//   $('.aside-toggle-box').click(function () {
//       isCollapsed = !isCollapsed;
//       $aside.toggleClass('collapsed', isCollapsed);
//       $main.toggleClass('collapsed', isCollapsed);
//       $(this).find('i').toggleClass('fa-chevron-left fa-chevron-right');
//       toggleLogo(isCollapsed);
//   });

//   $aside.on('mouseenter', function () {
//       if (isCollapsed) {
//           $aside.addClass('expanded-hover');
      
//           toggleLogo(false);
//       }
//   });

//   $aside.on('mouseleave', function () {
//       if (isCollapsed) {
//           $aside.removeClass('expanded-hover');
       
//           toggleLogo(true);
//       }
//   });
// });


// $(document).ready(function () {
//   const $aside = $('.dashboard-aside');
//   const $main = $('.dashboard-main');
//   const $logoBox = $('.logo-box');
//   const $logoBoxCollapsed = $('.logo-box-collapsed');
//   let isCollapsed = false;

//   function toggleLogo(isCollapsed) {
//       $logoBox.toggleClass('d-none', isCollapsed);
//       $logoBoxCollapsed.toggleClass('d-none', !isCollapsed);
//   }

//   $('.aside-toggle-box').click(function () {
//       isCollapsed = !isCollapsed;
//       $aside.toggleClass('collapsed', isCollapsed);
//       $main.toggleClass('collapsed', isCollapsed);
//       $(this).find('i').toggleClass('fa-chevron-left fa-chevron-right');
//       toggleLogo(isCollapsed);
//   });

//   $aside.on('mouseenter', function () {
//       if (isCollapsed) {
//           $aside.addClass('expanded-hover');
//           $main.addClass('expanded-hover');
//           toggleLogo(false);
//       }
//   });

//   $aside.on('mouseleave', function () {
//       if (isCollapsed) {
//           $aside.removeClass('expanded-hover');
//           $main.removeClass('expanded-hover');
//           toggleLogo(true);
//       }
//   });
// });

$(document).ready(function() {
  const $logoBox = $('.logo-box');
  const $logoBoxCollapsed = $('.logo-box-collapsed');
  const $dashboardAside = $('.dashboard-aside');
  const $dashboardMain = $('.dashboard-main');
  const $listItemLinkName = $('.dashboard-aside-list-item-link-name');
  const $listTitleManagement = $('.dashboard-aside-list-title-management');
  const $listTitlefinancialTransactions = $('.dashboard-aside-list-title-financial-transactions');
  const $listTitleContact = $('.dashboard-aside-list-title-contact');
  const $listItemBox = $('.dashboard-aside-list-item-box');


  let isCollapsed = false;

  $('.aside-toggle-box').click(function() {
      isCollapsed = !isCollapsed;
      toggleCollapse(isCollapsed);
  });

  $dashboardAside.on('mouseenter', function() {
      if (isCollapsed) {
          $dashboardAside.removeClass('collapsed');
          $dashboardMain.removeClass('collapsed');
          toggleLogo(false);
          toggleIcon(false);
          listItemLink(false);
          listItemTitle(false);
          listItemBoxs(false);
      }
  }).on('mouseleave', function() {
      if (isCollapsed) {
          $dashboardAside.addClass('collapsed');
          $dashboardMain.addClass('collapsed');
          toggleLogo(true);
          toggleIcon(true);
          listItemLink(true);
          listItemTitle(true);
          listItemBoxs(true);
      }
  });

  function toggleCollapse(collapsed) {
      isCollapsed = collapsed;
      $dashboardAside.toggleClass('collapsed', isCollapsed);
      $dashboardMain.toggleClass('collapsed', isCollapsed);
      toggleLogo(isCollapsed);
      toggleIcon(isCollapsed);
      listItemLink(isCollapsed);
      listItemTitle(isCollapsed);
      listItemBoxs(isCollapsed);
    }

  function toggleLogo(isCollapsed) {
      $logoBox.toggleClass('d-none', isCollapsed);
      $logoBoxCollapsed.toggleClass('d-none', !isCollapsed);
  }

  function listItemLink(isCollapsed) {
      if (isCollapsed) {
          $listItemLinkName.addClass('d-none');
      } else {
          $listItemLinkName.removeClass('d-none');
      }
  }

  function listItemBoxs(isCollapsed) {
    if (isCollapsed) {
        $listItemBox.addClass('justify-content-center');
    } else {
        $listItemBox.removeClass('justify-content-center');
    }
}


  function listItemTitle(isCollapsed) {
    if (isCollapsed) {
        $listTitleContact.addClass('d-none');
        $listTitleManagement.addClass('d-none');
        $listTitlefinancialTransactions.addClass('d-none');
    } else {
        $listTitleContact.removeClass('d-none');
        $listTitleManagement.removeClass('d-none');
        $listTitlefinancialTransactions.removeClass('d-none');
    }
}

  function toggleIcon(isCollapsed) {
      const $icon = $('.aside-toggle-box svg');
      if (isCollapsed) {
          $icon.removeClass('fa-chevron-left').addClass('fa-chevron-right');
      } else {
          $icon.removeClass('fa-chevron-right').addClass('fa-chevron-left');
      }
  }
});



var chart_bounce_rate = {
  series: [
    {
      name: "Project",
      labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
      data: [3, 5, 5, 7, 6, 5, 3, 5, 3],
    },
  ],
  chart: {
    fontFamily: "inherit",
    height: 46,
    type: "bar",
    offsetX: -10,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  colors: ["var(--general-brand-color)"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "90%",
      endingShape: "rounded",
      borderRadius: 5,
    },
  },
  tooltip: {
    theme: "light",
    followCursor: true,
  },
};
var chart_line_basic = new ApexCharts(
  document.querySelector("#total-money"),
  chart_bounce_rate
);
chart_line_basic.render();


var chart_bounce_rate_second = {
  series: [
    {
      name: "Project",
      labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
      data: [3, 5, 5, 7, 6, 5, 3, 5, 3],
    },
  ],
  chart: {
    fontFamily: "inherit",
    height: 46,
    type: "bar",
    offsetX: -10,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  colors: "#ff0000",
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "90%",
      endingShape: "rounded",
      borderRadius: 5,
    },
  },
  tooltip: {
    theme: "light",
    followCursor: true,
  },
};
var chart_line_basic_second = new ApexCharts(
  document.querySelector("#total-overdue"),
  chart_bounce_rate_second
);
chart_line_basic_second.render();


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


      
var optionssecond = {
  series: [75],
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90, // Semi-circle gauge start angle
      endAngle: 90,    // Semi-circle gauge end angle
      hollow: {
        margin: 0,
        size: '70%',
        background: 'none',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 2,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '90%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
          offsetY: -50,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['test'],
};

var chart = new ApexCharts(document.querySelector("#semi-gague"), optionssecond);
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



  var chart_users_second = {
    series: [
      {
        name: "mayıs 07 ",
        data: [0, 20, 15, 19, 14, 25, 30],
      },
      {
        name: "Geçen Haftasonu",
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
  var chart_line_basic_second = new ApexCharts(
    document.querySelector("#customers-area-second"),
    chart_users_second
  );
  chart_line_basic_second.render();





  $(document).ready(function() {
    $('.dropdown-content').on('click', function() {
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


$(document).ready(function() {
  $('.list-group-item').click(function() {
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');
  });
});


$('#exampleModal').on('show.bs.modal', function () {
  var backdrop = $('<div class="modal-backdrop fade show"></div>');
  $('body').append(backdrop);
});

$('#exampleModal').on('hidden.bs.modal', function () {
  $('.modal-backdrop').last().remove();
});
// document.addEventListener('DOMContentLoaded', function() {
//   var dropdownToggles = document.querySelectorAll('.dropdown-content');
  
//   dropdownToggles.forEach(function(toggle) {
//       toggle.addEventListener('click', function() {
//           var chevron = toggle.querySelector('.fa-chevron-down');
//           var dropdownMenu = toggle.nextElementSibling;
          
//           if (dropdownMenu.classList.contains('show')) {
//               chevron.classList.add('rotate-180');
//           } else {
//               chevron.classList.remove('rotate-180');
//           }

//           dropdownMenu.addEventListener('hide.bs.dropdown', function () {
//               chevron.classList.remove('rotate-180');
//           });
//       });
//   });
// });





