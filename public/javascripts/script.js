var app = new Vue({
  el: '#app',
  data: {
    the_holidays: {},
    holiday: '',
  },
  methods: {
    holidayREST(){
      console.log("holiday "+this.holiday);
      var url = "http://omarbriceno.com:4201/holiday?q="+this.holiday;
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((response) => {
          console.log(response);
          this.the_holidays = [];
          console.log(response.holidays[0].weekday.date.name)
          for (let i = 0; i < response.holidays.length; i++) {
            console.log(response);
            this.the_holidays.push({ 
                name: response.holidays[i].name,
                date: response.holidays[i].date,
                day_of_week: response.holidays[i].weekday.date.name
            });
          };
        });
      
    },
  },
});