//создадим ассоциативный массив свойств модальных окон:
//https://itchief.ru/javascript/associative-arrays
const modalConfig = new Map([
    ["m1", {
        header: "Do you want to delete this file?",
        text: "Once you delete this file, it won't be possible to undo this action.\n Are you sure you want to delete it?"
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