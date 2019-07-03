<template>
    <div>
        <TheSidebar/>
        <TheHeader/>
        <v-content style="padding: 100px 0 0 300px">
            <router-view/>
        </v-content>
    </div>
</template>

<script>
  //components
  import TheHeader from '../components/TheHeader.vue'
  import TheSidebar from '../components/TheSidebar.vue'

  export default {
    components: {
      TheHeader,
      TheSidebar
    }
  }
</script>