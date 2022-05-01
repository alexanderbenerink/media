// import axios from 'axios'

// const Axios = axios.create({
//     baseURL: 'https://api.airtable.com/v0/appArhUR8kx4G5q88/Films'
// })

const airtableAPIKey = process.env.VUE_APP_AIRTABLE_KEY

// Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + airtableAPIKey }


//hieronder is van Tim (werkt misschien / misschien niet)
var Airtable = require('airtable');
var base = new Airtable({apiKey: airtableAPIKey}).base('appArhUR8kx4G5q88');

export default {
    getFilms () {
        base('Films').select({
            maxRecords: 1000,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                //Alle films die in airtable staan
                console.log(record.get('Title'));
                return record.get('Title');
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        // try {
        //     base('Media').select({

        //     })
        //     let movies = [];
        //     for (let i= 1; i < 10; i++) {
        //         movies.push(Axios.get('?view=Grid%20view'));
        //         console.log(movies)
        //         return Axios.get('?view=Grid%20view')
        //     }
        //   } 
        //   catch (error) {
        //     console.log("oepsie");
        //   }
        // return Axios.get('?maxRecords=4&view=Grid%20view')
        
    }
}