<template>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="12"
            >
                <v-card class="elevation-0">
                    <v-row justify="center">
                        <v-card-title>
                            <span class="head-title">Тестовое задание</span>
                        </v-card-title>
                    </v-row>

                    <v-row class="fill-height align-content-center" justify="center">
                        <v-card
                                class="elevation-0"
                                min-width="320px"
                                max-width="600px"
                        >
                            <v-row>
                                <v-col
                                    class="pa-0 ma-0"
                                    cols="12"
                                >
                                    <v-card-text class="text-center">
                                        Добро пожаловать на реализацию тестового задания для компании Lofty!
                                    </v-card-text>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="pa-0 ma-0"
                                >
                                    <v-card-text class="text-center  align-self-center">
                                        Чтобы начать работу с приложением, нажмите <router-link to="/crud">сюда</router-link> или перейдите к боковому меню.
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "HomeComponent",
    }
</script>

<style>
    .head-title{
        color: #2196F3;
        font-size: 1.4rem;
    }
</style>
