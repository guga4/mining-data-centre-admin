<template>
    <v-navigation-drawer class="app-sidebar" dark permanent fixed>
        <v-toolbar height="100" flat dark class="app-home elevation-0">
            <v-list>
                <v-list-tile>
                    <img src="../assets/img/logo.png">
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list>
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    class="app-inactive-list-tile"
                    active-class="app-active-list-tile"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-footer class="ml-3 py-4 app-sidebar align-center app-footer" inset app>
            <span style="font-size: 1.7em" class="mr-2 app-inactive-list-tile">©</span> <span class="app-inactive-list-tile">Copyright, 2018</span>
        </v-footer>
    </v-navigation-drawer>
</template>

<script>
    export default {
      data () {
        return {
          items: [
            {title: 'Dashboard', icon: 'icon-home', to: {name: 'Dashboard'}},
            {title: 'My profile', icon: 'icon-user', to: {name: 'Profile'}},
            {title: 'Current debt', icon: 'icon-alert-triangle', to: {name: 'CurrentDept'}},
            {title: 'Transactions history', icon: 'icon-bookmark', to: {name: 'TransactionsHistory'}},
            {title: 'My miners info', icon: 'icon-alert-circle', to: {name: 'MinersInfo'}},
            {title: 'Referral system', icon: 'icon-reverse-arrows', to: {name: 'ReferralSystem'}},
            {title: 'Agreement', icon: 'icon-document', to: {name: 'Agreement'}},
          ],
        }
      }
    }
</script>

<style lang="scss">
    .app-footer {
        border-top: 0.7px solid rgba(white, 0.3);
        box-sizing: content-box
    }
    .app-inactive-list-tile {
        color: rgba(white, 0.3);
        .v-icon {
            color: rgba(white, 0.3);
        }
    }
    .app-active-list-tile {
        border-right: 2px solid #ed1847;
        color: white;
        .v-icon {
            color: white
        }
    }
    .app-sidebar {
        background-color: #1e2037 !important;
    }
    .app-home {
        background-color: #2b2c44 !important;
    }
</style>
