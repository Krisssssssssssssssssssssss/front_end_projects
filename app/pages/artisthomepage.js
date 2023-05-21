import { getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
import { formatDate, generateDateLabels } from "../utils/dates.js";

let myChart;

export function initArtistPage() {
    // Artist Name
    let artistNameHeader = document.querySelector('.artistNameHeader')
    artistNameHeader.innerText = getCurrentArtist();
    
   
    let artistItems;
    if (localStorage.getItem("localStorageItemAray")){

         artistItems = JSON.parse(localStorage.getItem("localStorageItemAray")).filter(item => item.artist === getCurrentArtist());
    }
    else {
        localStorage.setItem("localStorageItemAray", JSON.stringify(items));
        artistItems = JSON.parse(localStorage.getItem("localStorageItemAray")).filter(item => item.artist === getCurrentArtist());
    }

    const soldArtistItems = artistItems.filter(item => Boolean(item.priceSold))
    const totalItemsSoldDiv = document.querySelector('#totalItemsSold');
    totalItemsSoldDiv.innerHTML = `${soldArtistItems.length}/${artistItems.length}`;

    let totalIncome = 0;
    let liveAuctioningItem = document.querySelector('#liveAuctioningItem');
    liveAuctioningItem.innerText = 0;
    soldArtistItems.forEach(item => totalIncome += item.priceSold);
    const totalIncomeSpan = document.querySelector('#totalIncome');
    totalIncomeSpan.innerText = totalIncome;
    artistItems.forEach(item => {
        if(item.isAuctioning){
            liveAuctioningItem.innerText = JSON.parse(localStorage.getItem(`currentHighestBid${item.id}`))
        }

    })
   
    // The Chart
    Chart.defaults.backgroundColor = '#FCEBD5';
    Chart.defaults.borderColor = '#FCEBD5';
    Chart.defaults.color = '#B9B9B9';


    const ctx = document.querySelector('#myChart');
    if (myChart) {
        myChart.destroy()
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10.04.2023', '09.04.2023', '08.04.2023', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Amount',
                data: [1, 6, 3, 5, 2, 3],
                backgroundColor: '#A16A5E',
                hoverBackgroundColor: '#D44C2E',
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
    last7.addEventListener('click', function () {
        const labels = generateDateLabels(7)

        myChart.data.labels = labels


        const chartData = labels.map(label => {

            let sum = 0

            soldArtistItems.forEach(item => {

                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold
                }
            })

            return sum
        })

        myChart.data.datasets[0].data = chartData
        myChart.update()
    })
   
    last14.addEventListener('click', function () {
        const labels = generateDateLabels(14)
        myChart.data.labels = labels
        const chartData = labels.map(label => {
            let sum = 0
            soldArtistItems.forEach(item => {

                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold
                }
            })
            return sum
        })

        myChart.data.datasets[0].data = chartData
        myChart.update()
    })
    last30.addEventListener('click', function () {
        const labels = generateDateLabels(30)

        myChart.data.labels = labels


        const chartData = labels.map(label => {

            let sum = 0

            soldArtistItems.forEach(item => {

                if (label === formatDate(item.dateSold)) {
                    sum += item.priceSold
                }
            })

            return sum
        })

        myChart.data.datasets[0].data = chartData
        myChart.update()
    })
}