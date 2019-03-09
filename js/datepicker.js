(function() {
  var datepicker = {};
  datepicker.getMonthData = function(year, month) {
    var ret = [];
    if (year ==null || month==null) {
      var today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }

    var firstDay = new Date(year, month - 1, 1);
    var firstDayWeekDay = firstDay.getDay(); //当月星期几
    if (firstDayWeekDay === 0) firstDayWeekDay = 7; //星期日置为7

    year = firstDay.getFullYear();
    month = firstDay.getMonth() + 1;

    var lastDayOfLastMonth = new Date(year, month - 1, 0); //获取最后日期
    var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); //当月最后一天

    var preMonthDayCount = firstDayWeekDay - 1; //日历前置补位

    var lastDay = new Date(year, month, 0);
    var lastDate = lastDay.getDate();

    for (var i = 0; i < 42; i++) {
      var date = i + 1 - preMonthDayCount;
      var showDate = date;
      var thisMonth = month;

      if (date <= 0) {
        //上一月
        thisMonth = month - 1;
        showDate = lastDateOfLastMonth + date;
      } else if (date > lastDate) {
        //下一月
        thisMonth = month + 1;
        showDate = showDate - lastDate;
      }

      if (thisMonth === 0) {
        thisMonth = 12;
      }
      if (thisMonth === 13) {
        thisMonth = 1;
      }

      ret.push({
        month: thisMonth,
        date: date,
        showDate: showDate
      });
    }
    return {
      year: year,
      month: month,
      days: ret
    };
  };
  window.datepicker = datepicker;
})();
