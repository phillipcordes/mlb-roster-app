<template>
  <div>
    <h1 class="banner">MLB ROSTER APP</h1>
    <section class="flex-container">
      <div class="national-league">
        <h3>NL Central</h3>
        <div v-for="team in $store.state.nlCentral" v-bind:key="team.id">
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
      <div class="national-league">
        <h3>NL East</h3>
        <div
          v-for="team in $store.state.nlEast"
          v-bind:key="team.id"
        >
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
      <div class="national-league">
        <h3>NL West</h3>
        <div
          v-for="team in $store.state.nlWest"
          v-bind:key="team.id"
        >
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
      <div class="national-league">
        <h3>AL Central</h3>
        <div 
          v-for="team in $store.state.alCentral"
          v-bind:key="team.id"
        >
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
      <div class="national-league">
        <h3>AL East</h3>
        <div
          v-for="team in $store.state.alEast"
          v-bind:key="team.id"
        >
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
      <div class="national-league">
        <h3>AL West</h3>
        <div
          v-for="team in $store.state.alWest"
          v-bind:key="team.id"
        >
          <team-logo v-bind:team="team"></team-logo>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamLogo from "@/components/TeamLogo.vue";

export default {
  name: "welcome-page",
  components: {
    TeamLogo,
  },
};
</script>

<style>
.national-league {
  align-items: center;
}
.flex-container{
  display: flex;
  flex-direction: row;
  align-items: center;

  
}
.banner {
  background-image: url("http://images.firstcovers.com/covers/o/oakland_athletics-954.jpg");
  color: white;
  padding: 0%;
}
h3{
  text-align: left;
}
</style>
