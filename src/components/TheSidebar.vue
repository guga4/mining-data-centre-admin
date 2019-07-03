<template>
    <v-navigation-drawer class="app-sidebar" dark permanent fixed>
        <v-toolbar height="100" flat dark class="app-home">
            <v-list>
                <v-list-tile>
                    <img src="../assets/img/logo.png">
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click=""
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
      data () {
        return {
          items: [
            {title: 'Dashboard', icon: 'icon-home'},
            {title: 'My profile', icon: 'icon-user'},
            {title: 'Current debt', icon: 'icon-alert-triangle'},
            {title: 'Transactions history', icon: 'icon-bookmark'},
            {title: 'My miners info', icon: 'icon-alert-circle'},
            {title: 'Referral system', icon: 'icon-reverse-arrows'},
            {title: 'Agreement', icon: 'icon-document'},
          ],
        }
      }
    }
</script>

<style scoped>
    .app-sidebar {
        background-color: #1e2037 !important;
    }
    .app-home {
        background-color: #2b2c44 !important;
    }
</style>