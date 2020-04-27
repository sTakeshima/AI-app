<template>
   <v-layout column>
    <div class="text-center">
      <div class="mt-3 title font-weight-bold">
        ワインについて教えてください
      </div>
      <div class="mt-3 mb-3 caption grey--text">
        スライダーを選択してデータを入力してください。<br>
        データをもとにAIが診断します。
      </div>
    </div>
    <form-card v-for="wineAttr in wineAttributes" :key="`${wineAttr.id}`" :wine-attr="wineAttr" :total="wineAttributes.length"/>
    <div v-if="isError" class="red--text body-2 text-center">入力されていない数値があります</div>
    <v-btn @click="submit">診断結果を表示する</v-btn>
   </v-layout>
</template>

<script lang="ts">
import {Vue,  Component} from 'nuxt-property-decorator'

@Component({
  components: {
    FormCard: () => import('@/components/FormCard.vue')
  }})
export default class Index extends Vue {
  private isError: boolean = false;
}
</script>
<style>

</style>
