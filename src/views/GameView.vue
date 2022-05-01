<template>
  <section class="hero is-small">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <!--              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">-->
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <router-link to="/">
                  <a class="button is-info">
                    <span class="icon">
                      <i class="fa-solid fa-film"></i>
                    </span>
                    <span>Films</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <router-link to="/games">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fa-solid fa-gamepad"></i>
                    </span>
                    <span>Games</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <router-link to="/wheel">
                  <a class="button is-info">
                    <span class="icon">
                      <i class="fa-solid fa-dharmachakra"></i>
                    </span>
                    <span>Wheel</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <a class="button is-info" href="https://github.com/alexanderbenerink/media" target="_blank">
                  <span class="icon">
                    <i class="fa-brands fa-github"></i>
                  </span>
                  <span>See on Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

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
                <div class="columns">
                  <div class="column is-9">
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

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li>
              <a style="color: white; pointer-events: none">{{ new Date().getFullYear() }} © Alexander Benerink</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
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