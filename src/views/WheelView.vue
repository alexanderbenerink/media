<template>
  <div class="hero-body">
    <div class="container has-text-centered">
  <!--        <p class="subtitle">-->
  <!--          Subtitle-->
  <!--        </p>-->
    </div>
    <div class="columns is-justify-content-center">
      <div class="column is-10">
            <div class="content">
              <wheel-component class="is-centered border"></wheel-component>
            </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import WheelComponent from "@/components/WheelComponent";
export default {
  name: "WheelView",
  components: {WheelComponent}
}
</script>

<style scoped>
  .border {
    border: 5px solid white;
    border-radius: 5px;
    background: white;
  }
</style>