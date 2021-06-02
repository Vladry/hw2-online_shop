

export function checkCartInLocalStorage() {
    if (localStorage.getItem("cart")
        && localStorage.getItem("cart").length > 0) {
        return JSON.parse(localStorage.getItem("cart"));
    } else return [];
}

export function alreadyExists(currentCart, getProduct) {
    if (currentCart.length === 0) return true;
    return currentCart.some(cartProduct => cartProduct.id === getProduct.id
    );
}



