<template>
  <section class="hero is-info is-large">
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
                  <a class="button is-info is-active">
                    <span class="icon">
                      <i class="fa-solid fa-gamepad"></i>
                    </span>
                    <span>Games</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <a class="button is-info is-inverted" href="https://github.com/alexanderbenerink/media" target="_blank">
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
        <p class="title">
          Games
        </p>
        <p class="subtitle">
          Subtitle
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li>
              <a>{{ new Date().getFullYear() }} © Alexander Benerink</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "GameView"
}
</script>

<style scoped>

</style>