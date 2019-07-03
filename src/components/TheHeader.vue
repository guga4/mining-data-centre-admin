<template>
    <v-toolbar height="100" color="white" fixed style="padding-left: 300px">
        <v-list two-line>
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
            <v-icon>icon-divider</v-icon>
            <v-btn flat icon>
                <v-icon>icon-bell</v-icon>
            </v-btn>
            <v-btn flat icon>
                <v-icon>icon-sun</v-icon>
            </v-btn>
            <v-btn flat icon>
                <v-icon>icon-inbox</v-icon>
            </v-btn>
            <v-icon>icon-divider</v-icon>
            <v-btn flat>
                Sign out
                <v-icon>icon-sign-out</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>