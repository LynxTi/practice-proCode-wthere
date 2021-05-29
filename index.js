// 1  получить погоду с апи. на завтра, для своего города
// 2 сделать так, чтобы получало погоду каждые 5 минут
// 3 записывать погоду в какойто файл (так чтобы он дописывался, когда с апи запросили новую погоду. Должно быть дата + температура)
// 4451b0c1d5470f197a9615a3565c6bdf
const axios = require('axios');
const fs = require('fs');

// const urlOpenWether = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4451b0c1d5470f197a9615a3565c6bdf';
// const urlOpenWether = 'http://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&callback=test&appid=4451b0c1d5470f197a9615a3565c6bdf';
// const urlOpenWether = 'http://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&callback=test&appid=4451b0c1d5470f197a9615a3565c6bdf';
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
const urlOpenWether = 'http://api.openweathermap.org/data/2.5/forecast?q=Dnipro&cnt=1&lang=ua&units=metric&appid=4451b0c1d5470f197a9615a3565c6bdf';


setInterval(()=> {
    axios.get(urlOpenWether).then((response) => {
        const whether = response.data.list[0].weather;
        const temp = response.data.list[0].main.temp;
        const str = `Погода: ${whether[0].description}, температура: ${temp}; `;
        
        fs.appendFile('wehter.txt', str, (err) => {
            if(err) throw err;
            console.log('Data has been added!');
        });   
    })
}, 2000);
