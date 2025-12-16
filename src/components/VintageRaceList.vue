<template>
  <ul class="race-list">
    <li
      v-for="race in races"
      :key="race.round"
      @click="$emit('select', race)"
    >
      ROUND {{ race.round }} — {{ race.raceName }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    races: Array
  }
}
</script>

<style>
.race-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.race-list li {
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px dashed #00ff66;
  font-size: 14px;
}

.race-list li:hover {
  background: #00ff66;
  color: black;
}

/* Media Queries - Mobile */
@media (max-width: 768px) {
  .race-list li {
    padding: 6px;
    font-size: 13px;
  }
}

/* Media Queries - Small Mobile */
@media (max-width: 480px) {
  .race-list li {
    padding: 5px;
    font-size: 12px;
  }
}
</style>