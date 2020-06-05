<template>
    <v-container>
        <v-row justify="center">
            <v-col
                    cols="12"
            >
                <v-card class="elevation-0">
                    <v-row justify="center">
                        <v-card-title class="title-h1">
                            <span class="head-title">О приложении</span>
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
                                        cols="12"
                                        class="pa-0 ma-0"
                                >
                                    <v-card-text class="text-center  align-self-center">1) Стэк Vue + Vuetify.</v-card-text>
                                </v-col>
                                <v-col
                                        class="pa-0 ma-0"
                                        cols="12"
                                >
                                    <v-card-text class="text-center">2) Приложение содержит таблицу данных из файла json.</v-card-text>
                                </v-col>
                                <v-col
                                        cols="12"
                                        class="pa-0 ma-0"
                                >
                                    <v-card-text class="text-center  align-self-center">3) Реализованны CRUD операции в таблице с пагинацией и сортировкой.</v-card-text>
                                </v-col>

                                <v-col
                                        cols="12"
                                        class="pa-0 ma-0"
                                >
                                    <v-card-text class="text-center  align-self-center">4) Редактирование таблицы в диалоговом окне.</v-card-text>
                                </v-col>
                                <v-col
                                        cols="12"
                                        class="pa-0 ma-0"
                                >
                                    <v-card-text class="text-center  align-self-center">5) Приложение адаптивно.</v-card-text>
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
        name: "AboutComponent"
    }
</script>

<style>
    .head-title{
        color: #2196F3;
        font-size: 1.4rem;
    }
</style>
