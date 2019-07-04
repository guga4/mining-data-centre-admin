<template>
    <v-toolbar height="100" color="white" fixed style="padding-left: 300px" class="elevation-0">
        <v-list style="margin-left: -15px" two-line>
            <v-list-tile
                    avatar
            >
                <v-list-tile-avatar>
                    <img src="../assets/img/avatar.png">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>
                        Tamta davitashvili
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                        Balance 0. 00172 BTC (Refferal: 5 000 GEL)
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-icon color="grey lighten-2">icon-divider</v-icon>
            <v-btn color="grey" class="ml-3" flat icon>
                <v-icon>icon-bell</v-icon>
            </v-btn>
            <v-btn color="grey" class="ml-3" flat icon>
                <v-icon>icon-sun</v-icon>
            </v-btn>
            <v-btn color="grey" class="mx-3" flat icon>
                <v-icon>icon-inbox</v-icon>
            </v-btn>
            <v-icon color="grey lighten-2" >icon-divider</v-icon>
            <span class="d-flex justify-center align-center grey--text ml-4">Sign out</span>
            <v-btn color="grey" flat icon>
                <v-icon color="primary">icon-sign-out</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
