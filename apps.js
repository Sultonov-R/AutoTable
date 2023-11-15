import { data } from "./data.js";

const tbody = document.getElementById("tbody");
const cars = document.getElementById("cars");
const years = document.getElementById("years");
const colors= document.getElementById("colors");
const price = document.getElementById('price');

function createRows(data) {
    let list = "";
    tbody.innerHTML = "";
    data.forEach((element) => {
      let {
        id,
        name = "Mavjud emas",
        year = "",
        color = "Mavjud emas",
        price = "",
        status = "",
      } = element;
      if (status == "active") {
        status = "Available";
      }

      if (status == "inactive") {
        status = "Not available";
      }

      let tr = `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${year}</td>
                <td>${color}</td>
                <td>${price}</td>
                <td>${status}</td>
            </tr>
            `;

      list += tr;
    });
    tbody.innerHTML += list;
}


cars.addEventListener("change", function () {
  let selectedCar = this.value;
  let selectedCars = data.filter((element) => {
    return element.name == selectedCar;
  });

     createRows(selectedCars);
});

years.addEventListener('change', function(){
    let selectedYear = this.value;
    let selectedYears = data.filter((element) => {
        return element.year == selectedYear;
    })

    createRows(selectedYears);
});

colors.addEventListener('change', function () {
    let selectedColor = this.value;
    let selectedColors = data.filter((element) => {
        return element.color == selectedColor;
    });
        createRows(selectedColors);
});

price.addEventListener('change', function () {
    let selectedPrice = this.value;
    let selectedAllPrice = data.filter((element) => {
        return element.price == selectedPrice;
    });

    createRows(selectedAllPrice);
})

window.onload = function (params) {
  if (data.length) {
     createRows(data);
  }
};


