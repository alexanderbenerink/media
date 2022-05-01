import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://api.airtable.com/v0/appArhUR8kx4G5q88/Films'
})

const airtableAPIKey = process.env.VUE_APP_AIRTABLE_KEY

// Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + airtableAPIKey }

// const url = `https://api.airtable.com/v0/appArhUR8kx4G5q88/Films`;
const url = `?view=Grid%20view`;
const headers = {
    'Authorization': "Bearer " + airtableAPIKey,
    'Content-Type': "application/json"
};

export default {
    async getFilms () {
        // return Axios.get('?view=Grid%20view')
        let resp = [];
        try {
            let params = { offset: "" }
            do {
                await Axios.get(url, {params: params, headers: headers}).then((response) => {
                    for (let item of response.data.records) {
                        // console.log(item.fields.Title)
                        resp.push(item);
                    }
                    if (response.data.offset) {
                        params.offset = response.data.offset;
                    } else {
                        params.offset = "";
                    }
                });
            } while (params.offset !== "");
            // console.log(resp);
            return resp;
        } catch (error) {
            console.error(error);
        }

        // base('Films').select({
        //     maxRecords: 1000,
        //     view: "Grid view"
        // }).eachPage(function page(records, fetchNextPage) {
        //     records.forEach(function(record) {
        //         //Alle films die in airtable staan
        //         // console.log(record.get('Title'));
        //         // return record.get('Title');
        //         movies.push(record.get('Title'));
        //     });
        //     fetchNextPage();
        //
        // }, function done(err) {
        //     // console.log(movies);
        //     if (err) { console.error(err); }
        // });

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

    },
    getMovies () {
        this.getFilms();
        // return movies;
    }
}