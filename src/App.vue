<template>
  <div id="app">
    <MainHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/root/MainHeader';

export default {
  name: 'app',
  components: {
    MainHeader,
  },
};
</script>

<style src="@/assets/sass/app.scss" lang="sass">

</style>
