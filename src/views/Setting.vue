<template>
  <div class="setting">
    <h1>Setting</h1>
    <SettingForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import SettingForm from '@/components/SettingForm.vue';


@Component({
  components: {
    SettingForm,
  },
})
export default class Setting extends Vue {}
</script>

<style scoped>
h1 {
  margin: 10px 0px 20px 0px;
}
</style>
