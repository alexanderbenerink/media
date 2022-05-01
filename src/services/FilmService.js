import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://api.airtable.com/v0/appArhUR8kx4G5q88/Films'
})
const airtableAPIKey = process.env.VUE_APP_AIRTABLE_KEY
const url = `?view=Grid%20view`;
const headers = {
    'Authorization': "Bearer " + airtableAPIKey,
    'Content-Type': "application/json"
};

export default {
    async getFilms () {
        let resp = [];
        try {
            let params = { offset: "" }
            do {
                await Axios.get(url, {params: params, headers: headers}).then((response) => {
                    for (let item of response.data.records) {
                        resp.push(item);
                    }
                    if (response.data.offset) {
                        params.offset = response.data.offset;
                    } else {
                        params.offset = "";
                    }
                });
            } while (params.offset !== "");
            return resp;
        } catch (error) {
            console.error(error);
        }
    }
}