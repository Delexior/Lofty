<template>
    <v-container class="fill-height">
        <v-row justify="center">
            <v-col>
                <v-card class="elevation-0">
                    <v-img max-height="350px" class="text-center" alt="404.png" contain src="../assets/img/404Error.png"></v-img>
                    <v-card-text class="text-center ma-0 pa-0">Запрашиваемая страница не найдена!</v-card-text>
                    <v-card-text class="text-center">Нажмите <router-link to="/">сюда</router-link> чтобы вернуться на главную</v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped>

</style>
