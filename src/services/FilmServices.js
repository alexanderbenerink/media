import axios from "axios";

function processRecords(records) {
    console.log('processRecords()');
    for (let record of records) {
        const airtable_id = record.id;
        const fields = record.fields;
        console.log(airtable_id);
        console.log(fields);
        // do stuff with fields: field['<key>']
    }
}

function getParams(offset) {
    const params = {
        offset: offset
    };
    return params
}

const getFilms = async () => {
    const url = `https://api.airtable.com/v0/appArhUR8kx4G5q88/Films`;

    const headers = {
        'Authorization': "Bearer " + process.env.VUE_APP_AIRTABLE_KEY,
        'Content-Type': "application/json"
    };

    let fetchCount = 0;
    try {
        let offset = 0;    // no initial offset, explicitely set to 0

        // eslint-disable-next-line no-constant-condition
        while (true) {
            const params = getParams(offset);
            console.log('fetchCount:', fetchCount);
            await axios.get(url, {params: params, headers: headers})
                .then((response) => {
                    fetchCount += response.data.records.length;
                    offset = response.data.offset;
                    processRecords(response.data.records);

                    //console.log(response.data);
                    //console.log(response.status);
                    //console.log(response.statusText);
                    //console.log(response.headers);
                    //console.log(response.config);
                });
            if (typeof offset === 'undefined') {
                break;
            }
        }
    } catch (error) {
        console.error(error)
    }
    // console.log('fetchCount:', fetchCount);  // print final # records fetched
};

console.log(getFilms())