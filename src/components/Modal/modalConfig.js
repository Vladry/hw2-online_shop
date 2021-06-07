//создадим ассоциативный массив свойств модальных окон:
//https://itchief.ru/javascript/associative-arrays
const modalConfig = new Map([
    ["cart", {
        header: "Confirm",
        text: "Подтвердите добавление\n  товара в Cart!"
    }],
    ["m2", {
        header: "Хотите еще что ни будь?",
        text: "Задайте действие к выполнению!"
    }],
    ["wishList", {
        header: "Confirm",
        text: "Подтвердите добавление\n  товара в WishList!"
    }],
    ["closed", {
        header: "",
        text: ""
    }]
]);

export default modalConfig;