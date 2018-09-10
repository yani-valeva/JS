'use strict';
function attachEventsListeners() {
   let outputBox = document.getElementById('outputDistance');
   let convertBtn = document.getElementById('convert');
   let distance = {
       'm': 1,
       'km': 1000,
       'cm': 0.01,
       'mm': 0.001,
       'mi': 1609.34,
       'yrd': 0.9144,
       'ft': 0.3048,
       'in': 0.0254
   };

   convertBtn.addEventListener('click', function () {
       let input = Number(document.getElementById('inputDistance').value);
       let inputUnit = document.getElementById('inputUnits').value;
       let outputUnit = document.getElementById('outputUnits').value;
       let result = input * distance[inputUnit] / distance[outputUnit];
       outputBox.value = result;
   });
}

