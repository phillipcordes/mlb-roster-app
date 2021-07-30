<template>
  <div>
    <h1>{{ team.teamName }}</h1>
    <router-link v-bind:to="{ name: 'home'}">Home</router-link>
    <table id="roster">
      <tr>
        <th>Name</th>
        <th>Jersey Number</th>
        <th>Position</th>
        <th>Bat</th>
        <th>Throw</th>
        <th>Age</th>
        <th>Height</th>
        <th>Weight</th>
      </tr>
      <tr v-for="player in team.roster" v-bind:key="player.name">
        <td>{{player.name}}</td>
        <td>{{player.jerseyNum}}</td>
        <td>{{player.position}}</td>
        <td>{{player.bat}}</td>
        <td>{{player.throw}}</td>
        <td>{{player.age}}</td>
        <td>{{player.height}}</td>
        <td>{{player.weight}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "roster-display",
  method: {},
  props: {team:Object},
};
</script>

<style>
h1{
  background-image: url("http://images.firstcovers.com/covers/o/oakland_athletics-954.jpg");
  color: white;

}
#roster {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#roster td, #roster th {
  border: 1px solid #ddd;
  padding: 8px;
}

#roster tr:nth-child(even){background-color: #f2f2f2;}

#roster tr:hover {background-color: #ddd;}

#roster th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #a5adaf;
  color: white;
}
</style>
