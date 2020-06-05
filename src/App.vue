<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <router-link class="no-decor" to ='/'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#2196F3">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="menu-link">
              <v-list-item-title>Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-divider></v-divider>

        <router-link class="no-decor" to ='/crud'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#2196F3">mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="menu-link">
              <v-list-item-title>CRUD таблица</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-divider></v-divider>

        <router-link class="no-decor" to ='/about'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#2196F3">mdi-help-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="menu-link">
              <v-list-item-title>О приложении</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="indigo"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row justify="center">
        <v-toolbar-title>Lofty</v-toolbar-title>
      </v-row>

    </v-app-bar>

    <v-content>
      <v-container
              fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
            color="indigo"
            app
    >
      <v-row justify="center">
        <span class="white--text">Дмитрий Обрубов &copy; {{footerDate}}</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
  import HomeComponent from "./components/HomeComponent";

  export default {
    data: () => ({
      drawer: null,
      footerDate: new Date().getUTCFullYear(),
    }),
    components:{
      HomeComponent
    }
  }
</script>

<style>
  .menu-link:hover{
    cursor: pointer;
  }
  .no-decor{
    text-decoration: none;
  }
</style>
