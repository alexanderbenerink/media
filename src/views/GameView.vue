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
              Games
            </p>
            <br>
            <div class="content">
              <div class="columns has-background-light">
                <div class="column is-10">
                  <div id="games">
                    <ul v-for="game in games" v-bind:key="game.id">
                      <game-component v-bind="game"></game-component>
                    </ul>
                  </div>
                </div>
                <div class="column is-1">
                  <button class="button is-warning" @click.prevent="copyGames('games')">Copy</button>
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
import GameComponent from "@/components/GameComponent";
import GameService from "@/services/GameService";

export default {
  name: "GameView",
  components: {GameComponent},
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getGames () {
      try {
        const response = await GameService.getGames()

        self.airtableResponse = response
        console.log(self.airtableResponse)
      } catch (err) {
        console.log(err)
      }
    }
    getGames()
  },
  computed: {
    games () {
      const self = this
      const gameList = []
      for (let i = 0; i < self.airtableResponse.length; i++) {
        if (self.airtableResponse[i].fields.Published) {
          const game = {
            title: self.airtableResponse[i].fields.Title
          }
          gameList.push(game)
        }
      }
      return gameList
    }
  },
  methods: {
    copyGames(id) {
      let copyText = document.getElementById(id).innerText;
      let gameArray = [copyText];
      let gameArrayToString = gameArray.join('\n');
      navigator.clipboard.writeText(gameArrayToString);
      alert("\nGames are copied to clipboard!");
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>