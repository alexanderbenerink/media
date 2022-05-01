<template>
    <div class="hero-body">
      <div class="container has-text-centered">
<!--        <p class="subtitle">-->
<!--          Subtitle-->
<!--        </p>-->
      </div>
      <div class="columns is-justify-content-center">
        <div class="column is-5">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-centered">
                Films
              </p>
              <br>
              <div class="content">
                <div class="columns has-background-light">
                  <div class="column is-10">
                    <div id="movies">
                      <ul v-for="film in films" v-bind:key="film.id">
                        <film-component v-bind="film"></film-component>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-1">
                    <button class="button is-warning" @click.prevent="copyMovies('movies')">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import FilmComponent from "@/components/FilmComponent";
import FilmService from "@/services/FilmService";

export default {
  name: "FilmView",
  components: {FilmComponent},
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getFilms () {
      try {
        const response = await FilmService.getFilms()

        self.airtableResponse = response
        console.log(self.airtableResponse)
      } catch (err) {
        console.log(err)
      }
    }
    getFilms()
  },
  computed: {
    films () {
      const self = this
      const filmList = []
      for (let i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          const film = {
            title: self.airtableResponse[i].fields.Title
          }
          filmList.push(film)
        }
      }
      return filmList
    }
  },
  methods: {
    copyMovies(id) {
      let copyText = document.getElementById(id).innerText;
      let movieArray = [copyText];
      let movieArrayToString = movieArray.join('\n');
      navigator.clipboard.writeText(movieArrayToString);
      alert("\nMovies are copied to clipboard!");
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>