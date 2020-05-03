<template>
  <v-app> <!-- Vuetifyの起点となるタグです。 -->
  <!--アプリのバーを示すタグです。fixedはスクロールしたときに固定した状態にします。 -->
  <!--appはアプリのレイアウトを示すタグです。colorのprimaryはnuxt.config.jsで指定したカラーです。 -->
  <!--classのwhite-textはテキストの色を白に設定します。v-app-bar-nav-iconはハンバーガメニューを示すタグです。 -->
    <v-app-bar
    fixed
    app
    color="primary"
    class="white--text"
    >
        <v-app-bar-nav-icon class="white--text"/>
        <v-toolbar-title text="入力"/>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator'
  import { appStore } from '@/store';

  @Component
  export default class extends Vue {
    get title() {
      return appStore.title;
    }
  }
</script>

<style>

</style>
