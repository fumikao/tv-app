<template>
  <div class="side-navi">
    <h1>NHK番組検索</h1>

    <ul>
      <li
        v-for="(list, index) in sideList"
        :key="index"
        class="side-navi-list"
      >
        <router-link :to="list.to">
          {{ list.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class SideNavi extends Vue {
  sideList: any[] = [
    {
      title: '現在放送中',
      to: '/'
    },
    {
      title: '検索',
      to: '/search'
    }
  ]
}
</script>

<style lang="scss" scoped>
.side-navi {
  width: 200px;
  height: 100vh;
  border-right: 1px solid gray;
}

.side-navi-list {
  list-style: none;
  height: 30px;
  text-align: left;
}
</style>