<template>
  <section id="app" class="hero has-background-light is-small" :class="{ 'has-background-dark': darkMode }">
    <!-- Header -->
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
                  <a class="button is-info" :class="{ 'is-inverted': !darkMode }">
                    <span class="icon">
                      <i class="fa-solid fa-film"></i>
                    </span>
                    <span>Films</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <router-link to="/games">
                  <a class="button is-info" :class="{ 'is-inverted': !darkMode }">
                    <span class="icon">
                      <i class="fa-solid fa-gamepad"></i>
                    </span>
                    <span>Games</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <router-link to="/wheel">
                  <a class="button is-info" :class="{ 'is-inverted': !darkMode }">
                    <span class="icon">
                      <i class="fa-solid fa-dharmachakra"></i>
                    </span>
                    <span>Wheel</span>
                  </a>
                </router-link>
              </span>
              <span class="navbar-item">
                <a class="button is-info" href="https://github.com/alexanderbenerink/media" target="_blank" :class="{ 'is-inverted': !darkMode }">
                  <span class="icon">
                    <i class="fa-brands fa-github"></i>
                  </span>
                  <span>See on Github</span>
                </a>
              </span>
              <span class="navbar-item">
                <label class="button is-info is-rounded" for="checkbox" :class="{ 'is-inverted': darkMode }" @click="darkMode = !darkMode">
                    <span class="icon">
                      <i class="fas fa-moon" :class="{ 'fas fa-sun': darkMode }"></i>
                    </span>
                  </label>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  <!-- Body -->
  <router-view v-slot="{ Component }">
    <transition name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter">
      <component :is="Component"></component>
    </transition>
  </router-view>
    <!-- Footer -->
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
export default {
  name: 'app',
  data () {
    return {
      darkMode: false,
      prevHeight: 0
    }
  },
  methods: {
    // beforeLeave (element) {
    //   this.prevHeight = getComputedStyle(element).height
    // },
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Consoomers'
    }
  }
}
</script>

<style type="scss">
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
