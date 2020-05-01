var cases = [];

const url = 'https://api.rootnet.in/covid19-in/stats/latest';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        cases.push(data)

    })
    .catch(
        error => console.log(error)
    )

setTimeout(() => {

    const cards = document.querySelector('.counts .cards');

    const totalcases = document.createElement('div');
    totalcases.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    totalcases.style.backgroundColor = '#f19947'
    totalcases.style.color='#ffffff'
    const total_content = document.createElement('div');
    total_content.classList.add('card-body');
    

    total_content.innerText = "Total Cases :" + " " + cases[0].data.summary.total;
    totalcases.appendChild(total_content);
    cards.appendChild(totalcases);

    const indian = document.createElement('div');
    indian.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    indian.style.backgroundColor = '#6bee37'
    indian.style.color='#ffffff'
    const discharged = document.createElement('div');
    discharged.classList.add('card-body');


    discharged.innerText = "Recovered : "+" " + cases[0].data.summary.discharged;
    indian.appendChild(discharged);
    cards.appendChild(indian)

    const deaths = document.createElement('div');
    deaths.style.backgroundColor = '#ee3737';
    deaths.style.color='#ffffff'
    deaths.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    const deaths_count = document.createElement('div');
    deaths_count.classList.add('card-body');


    deaths_count.innerText = "Death : " + " "+ cases[0].data.summary.deaths;
    deaths.appendChild(deaths_count);
    cards.appendChild(deaths)


    // const state = document.createElement('select');
    // state.classList.add('state', 'col-sm-9', 'col-xs-12','col-md-9' );
    // let state_count = ' ';
    // state_count = document.createElement('option');
    // state_count.innerText = "Choose the State";
    // state.appendChild(state_count);
    // for (let i of cases[0].data.regional){
    //     console.log(i)
    //     state_count = document.createElement('option');
    //     state_count.innerText = i.loc;
    //     state.appendChild(state_count);
    // }


    // state.addEventListener('change',stateChange);
    // console.log(death1)
    

    // cards.appendChild(state)

    // function stateChange(e){
    //     console.log(e.target.value)
    // }
    //charts
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ['Total Case', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'COVID 19 in India',
                backgroundColor: ['#f19947', '#6bee37', '#ee3737'],
                data: [cases[0].data.summary.total
                , cases[0].data.summary.discharged,
                cases[0].data.summary.deaths]
            }]
        },

        // Configuration options go here
        options: {
        }
    });

    const cards1 = document.querySelector('.counts1 .cards1');

    const totalcases1 = document.createElement('div');
    totalcases1.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    totalcases1.style.backgroundColor = '#f19947'
    totalcases1.style.color='#ffffff'
    const total_content1 = document.createElement('div');
    total_content1.classList.add('card-body');
    

    total_content1.innerText = " Total Cases :" + " " + cases[0].data.regional[26].confirmedCasesIndian;
    totalcases1.appendChild(total_content1);
    cards1.appendChild(totalcases1);

    const indian1 = document.createElement('div');
    indian1.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    indian1.style.backgroundColor = '#6bee37'
    indian1.style.color='#ffffff'
    const discharged1 = document.createElement('div');
    discharged1.classList.add('card-body');


    discharged1.innerText = "Discharged : "+" " + cases[0].data.regional[26].discharged;
    indian1.appendChild(discharged1);
    cards1.appendChild(indian1)

    const deaths1 = document.createElement('div');
    deaths1.style.backgroundColor = '#ee3737';
    deaths1.style.color='#ffffff'
    deaths1.classList.add('card','col-sm-3','col-xs-6','col-md-3');
    const deaths_count1 = document.createElement('div');
    deaths_count1.classList.add('card-body');


    deaths_count1.innerText = "Deaths : " + " "+ cases[0].data.regional[26].deaths;
    deaths1.appendChild(deaths_count1);
    cards1.appendChild(deaths1)

    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',

        // The data for our dataset
        data: {
            labels: ['Total Case', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'COVID 19 in Tamilnadu',
                backgroundColor: ['#f19947', '#6bee37', '#ee3737'],
                data: [cases[0].data.regional[26].confirmedCasesIndian
                , cases[0].data.regional[26].discharged,
                cases[0].data.regional[26].deaths]
            }]
        },

        // Configuration options go here
        options: {
        }
    });

    let datasets1 = [];
    let data1 = []
    for (let i in cases[0].data.regional){
        datasets1.push (cases[0].data.regional[i].loc);
        data1.push(cases[0].data.regional[i].totalConfirmed)
    }
    let colors = []
    console.log(datasets1)
    for(let i = 0 ; i < 31; i++){
        function c() {
            var hex = Math.floor(Math.random()*256).toString(16);
            return ("0"+String(hex)).substr(-2); // pad with zero
          }
           colors.push("#"+c()+c()+c());

    }
    console.log(colors)

    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: datasets1,
            datasets: [{
                label: ' Covid-19 All States',
                backgroundColor: colors,
                data: data1
            }]
        },

        // Configuration options go here
        options: {
        }
    });
    

    const footer = document.getElementById('footer')
    const updated_time = document.createElement('p');
    updated_time.innerText = " Updated at" + " " + new Date(cases[0].lastRefreshed).toString();
    footer.appendChild(updated_time);


}, 2000)

