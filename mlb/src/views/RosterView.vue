<template>
  <div>
    <roster-display v-bind:team="teamFromId" />
  </div>
</template>

<script>
import RosterDisplay from "@/components/RosterDisplay";
export default {
  components: { RosterDisplay },
  computed: {
    teamFromId() {
      let teamToReturn = this.$store.state.nlCentral.find((team) => {
        return team.id == this.$route.params.id;
      });
      if (!teamToReturn) {
        teamToReturn = this.$store.state.nlEast.find((team) => {
          return team.id == this.$route.params.id;
        });
        if(!teamToReturn){
            teamToReturn = this.$store.state.nlWest.find((team)=>{
              return team.id == this.$route.params.id;
          })
          }
          if(!teamToReturn){
            teamToReturn = this.$store.state.alCentral.find((team)=>{
              return team.id == this.$route.params.id;
          })
          }
          if(!teamToReturn){
            teamToReturn = this.$store.state.alEast.find((team)=>{
              return team.id == this.$route.params.id;
          })
          }
          if(!teamToReturn){
            teamToReturn = this.$store.state.alWest.find((team)=>{
              return team.id == this.$route.params.id;
          })
          }
      }

      return teamToReturn;
    },
  },
};
</script>

<style></style>
