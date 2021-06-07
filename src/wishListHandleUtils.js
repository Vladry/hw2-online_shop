

export function checkWishListInLocalStorage() {
    if (localStorage.getItem("wishList")
        && localStorage.getItem("wishList").length > 0) {
        return JSON.parse(localStorage.getItem("wishList"));
    } else return [];
}

export function alreadyExists(currentWishList, getProduct) {
    if (currentWishList.length === 0) return true;
    return currentWishList.some(cartProduct => cartProduct.id === getProduct.id
    );
}



