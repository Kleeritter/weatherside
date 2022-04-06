function alla(e){
var jsx=[];
var jsy=[];
var jsxx=[];
var jshum=[];
console.log(jsonData);

for (let i=0; i<jsonData.length;i++){
	 var alla= jsonData[i]['label'];
    var allarm=jsonData[i]['tempe'];
    var allarh=jsonData[i]['humus'];
    var allarmx=jsonData[i]['humid']*1000;
    jsx.push(alla);
    jsxx.push(allarmx);
    jsy.push(allarm);
    jshum.push(allarh);
};
let last = jsy[jsy.length - 1];
var xValues = jsx;
var yValueshu = jsxx;
var yValues = jsy;
//Maximale Temperatur
var numberArray = jsy.map(Number);

let index = numberArray.indexOf( Math.max(...numberArray));

console.log(last);
document.getElementById("maxTi").innerHTML = Math.max(...numberArray);
document.getElementById("maxTdi").innerHTML = "°C  am " +moment(jsx[index]).format('DD.MM.YYYY');
//Minimale Temperatur
let indexm = numberArray.indexOf( Math.min(...numberArray));
document.getElementById("minTi").innerHTML = Math.min(...numberArray);
document.getElementById("minTdi").innerHTML = "°C  am " +moment(jsx[indexm]).format('DD.MM.YYYY');
//Mittlere Temperatur
const average = (array) => array.reduce((a, b) => a + b) / array.length;
document.getElementById("mimTi").innerHTML = average(numberArray);
//Max Luftdruck
var par = jsxx.map(Number);
let indexp = par.indexOf( Math.max(...par));
document.getElementById("maxPi").innerHTML = Math.max(...par);
document.getElementById("maxPdi").innerHTML = " hPa am "+ moment(jsx[indexp]).format('DD.MM.YYYY');
//min Luftdruck
let indexpm = numberArray.indexOf( Math.min(...numberArray));
document.getElementById("minPi").innerHTML = Math.min(...par);
document.getElementById("minPdi").innerHTML =" hPa am "+ moment(jsx[indexpm]).format('DD.MM.YYYY');
//mittlere Luftdruck
document.getElementById("mimPi").innerHTML =Math.round(average(par));
new Chart("indext", {
  type: "line",
  data:{ 
  labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(191, 97, 106, 1)",
      Color: "rgba(236, 239, 244, 1)",
      borderColor : "rgba(191, 97, 106, 1)",
      data: yValues
    }]
},
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend:{
        display: false
      },
      title: {
          display: true,
          text: 'Temperatur'
      }
  },

    legend: {display: true},
    scales:{
        xAxes:{
            type:'time',
            time: {
                displayFormats: {
                        minute: 'hh:mm '
                    },
                round: 'minute'
            },
            grid:{
                display:true,
                color:"rgba(76, 86, 106, 1)"
            }
        },
        yAxes:{
          title:{
            display:true,
            text:'Temperatur in °C'
          },
          grid:{
                color:"rgba(76, 86, 106, 1)"
            }
        }
    }
  }
});
new Chart("indexp", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "#b48ead",
      borderColor: "#b48ead",
      data: yValueshu
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend:{
        display: false
      },
      title: {
          display: true,
          text: 'Luftdruck'
      }
  },
    legend: {display: false},
    scales:{
        xAxes:{
            type:'time',
            time: {
                displayFormats: {
                        minute: 'hh:mm '
                    }
            },
            grid:{
                display:true,
                color:"rgba(76, 86, 106, 1)"
            }
        },
        yAxes:{
          title:{
            display:true,
            text:'Luftdruck in hPa'
          },
          grid:{
                color:"rgba(76, 86, 106, 1)"
            }
        }
    }
  }
});
var yValues = jshum;
new Chart("indexh", {
  type: "line",
  data:{ 
  labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "#88c0d0",
      Color: "#88c0d0",
      borderColor : "#88c0d0",
      data: yValues
    }]
},
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend:{
        display: false
      },
      title: {
          display: true,
          text: 'Feuchte'
      }
  },
    legend: {display: true},
    scales:{
        xAxes:{
            type:'time',
            time: {
                displayFormats: {
                        minute: 'hh:mm '
                    },
                round: 'minute'
            },
            grid:{
                display:true,
                color:"rgba(76, 86, 106, 1)"
            }
        },
        yAxes:{
          title:{
            display:true,
            text:'Luftfeuchte in %'
          },
          grid:{
                color:"rgba(76, 86, 106, 1)"
            }
        }
    }
  }
});
console.log(vimarker._leaflet_id);
//$(".aufklapper").fadeIn();
$(".aufklapper").show('slide', {direction: 'left'}, 200);
};