<template>
  <div class="logo-div">
    <router-link v-bind:to="{ name: 'roster', params: { id: team.id } }">
      <img class="logo" v-bind:src="team.logo" alt="Reds" />
      <h3>{{ team.teamName }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "team-logo",
  props: {
    team: Object,
  },
};
</script>

<style>
.logo {
  width: 40%;
  height: 40%;
}
.logo-div {
  width: 25%;
  text-align: center;
}

</style>
