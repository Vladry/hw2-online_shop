//создадим ассоциативный массив свойств модальных окон:
//https://itchief.ru/javascript/associative-arrays
const modalConfig = new Map([
    ["m1", {
        header: "Confirm",
        text: "Подтвердите добавление\n  товара в корзину!"
    }],
    ["m2", {
        header: "Хотите еще что ни будь?",
        text: "Задайте действие к выполнению!"
    }],
    ["closed", {
        header: "",
        text: ""
    }]
]);

export default modalConfig;