import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://api.airtable.com/v0/appArhUR8kx4G5q88/Films'
})

const airtableAPIKey = process.env.VUE_APP_AIRTABLE_KEY
console.log(airtableAPIKey);

Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + airtableAPIKey }

export default {
    getFilms () {
        return Axios.get('?view=Grid%20view')
        // return Axios.get('?maxRecords=4&view=Grid%20view')
    }
}