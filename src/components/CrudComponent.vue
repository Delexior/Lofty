<template>
    <v-container>
        <v-dialog
            v-model="editDialog"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formHeader }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.artnumber" label="Артикул"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.name" label="Название товара"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.brand" label="Бренд"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.weight" label="Вес"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.quantity" label="Фасовка"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.price" label="Цена"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.stock" label="Наличие"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancelEditing">Отменить</v-btn>
                    <v-btn color="blue darken-1" text @click="saveData">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-row justify="center">
            <v-card
                class="elevation-0"
            >
                <v-card-title>
                    <span class="head-title">Таблица CRUD операций</span>
                </v-card-title>
            </v-card>
        </v-row>

        <v-row>
            <v-col class="ma-2 pa-2">
                <v-btn  @click="editDialog = !editDialog" color="teal" class="flex-fill" small>
                    <v-icon color="white">mdi-plus</v-icon><span class="button-text">Создать новый товар</span>
                </v-btn>
            </v-col>

        </v-row>

        <v-row>
            <v-data-table
                class="elevation-3 flex-fill"
                sort-by="Артикул"
                no-data-text="К сожалению, получить данные не получилось"
                :items-per-page="5"
                :headers="headersForTable"
                :items="itemsForTable"
            >
                <template v-slot:item.actions="{ item }">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-row>
    </v-container>
</template>

<script>
    import data from '../assets/data.json';

    export default {
        name: "CrudComponent",

        data(){
            return{
                jsonData: data,
                editDialog: false,
                headersForTable:[
                    {
                        text: 'Артикул',
                        value: 'artnumber',
                        align: 'center'
                    },
                    {
                        text: 'Название товара',
                        value: 'name',
                        align: 'center'
                    },
                    {
                        text: 'Бренд',
                        value: 'brand',
                        align: 'center'
                    },
                    {
                        text: 'Вес',
                        value: 'weight',
                        align: 'center'
                    },
                    {
                        text: 'Фасовка',
                        value: 'quantity',
                        align: 'center'
                    },
                    {
                        text: 'Цена',
                        value: 'price',
                        align: 'center'
                    },
                    {
                        text: 'Наличие',
                        value: 'stock',
                        align: 'center'
                    },
                    {
                        text: 'Редактировать',
                        value: 'actions',
                        align: 'center',
                        sortable: 'false'
                    }
                ],
                itemsForTable: [],
                editingItemIndex: -1,
                editedItem: {
                    artnumber: 0,
                    name: '',
                    brand: '',
                    weight: 0,
                    quantity: 0,
                    price: 0,
                    stock: 0
                },
                defaultItem: {
                    artnumber: 0,
                    name: '',
                    brand: '',
                    weight: 0,
                    quantity: 0,
                    price: 0,
                    stock: 0
                }

            }
        },

        mounted() {
            this.getData();
        },

        computed: {
            formHeader(){
                return this.editingItemIndex === -1 ? 'Новый товар' : 'Редактировать товар';
            },
        },

        watch: {
            editDialog(state){
                state || this.cancelEditing()
            }
        },

        methods: {
            getData(){
                this.itemsForTable = this.jsonData;
            },

            saveData(){
                if (this.editingItemIndex > -1) {
                    Object.assign(this.itemsForTable[this.editingItemIndex], this.editedItem);

                } else {
                    this.itemsForTable.push(this.editedItem);
                }
                this.cancelEditing()
            },

            cancelEditing(){
                this.editDialog = false;
                this.$nextTick( () => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editingItemIndex = -1;
                })
            },

            editItem(item){
                this.editingItemIndex = this.itemsForTable.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.editDialog = true;
            },

            deleteItem(item){
                const index = this.itemsForTable.indexOf(item);
                confirm('Вы точно хотите удалить этот товар?') && this.itemsForTable.splice(index, 1);

            }
        }

    }
</script>

<style scoped>
    .button-text{
        color: white;
    }
    .head-title{
        color: #2196F3;
        font-size: 1.4rem;
    }
</style>
