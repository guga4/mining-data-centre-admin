import Vue from 'vue'
import Vuetify from 'vuetify'
import '@/assets/style/stylus/main.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#ed1847',
  },
  icons: {
    icon_sun: 'icon-sun',
    icon_sign_out: 'icon-sign-out',
    icon_inbox: 'icon-inbox',
    icon_bell: 'icon-bell',
    icon_mining_data: 'icon-mining-data',
    icon_divider: 'icon-divider',
    icon_user: 'icon-user',
    icon_home: 'icon-home',
    icon_bookmark: 'icon-bookmark',
    icon_document: 'icon-document',
    icon_alert_circle: 'icon-alert-circle',
    icon_reverse_arrows: 'icon-reverse-arrows',
    icon_alert_triangle: 'icon-alert-triangle',
  }
})
