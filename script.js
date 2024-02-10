$(document).ready(function() {

    let products = [
        {
            name:"Apple Mouse",
            price:"100 Euro"
        },
        {
            name:"Apple Keyboard",
            price:"250 Euro"
        }
    ]

    let name = $("#name");
    let price = $("#price");
    
    let popupWindow = $("#popupwindow");
    popupWindow.hide();

    $("#mousepoint").mouseover(function() {
        let mousePointPosition = $(this).offset();
        let popupWindowTop = mousePointPosition.top - 90 ;
        let popupWindowLeft = mousePointPosition.left - 50;

        // Set the position of the popup window
        popupWindow.show();
        popupWindow.css({"top": popupWindowTop, "left": popupWindowLeft});
        name.text(products[0].name)
        price.text(products[0].price)
    });

    $("#mousepoint").mouseleave(function() {
        // Hide the popup window on mouse leave
        popupWindow.hide();
    });

    $("#keyboardpoint").mouseover(function() {
        let keyboardPointPosition = $(this).offset();
        let popupWindowTop = keyboardPointPosition.top - 90 ;
        let popupWindowLeft = keyboardPointPosition.left - 70;

        // Set the position of the popup window
        popupWindow.show();
        popupWindow.css({"top": popupWindowTop, "left": popupWindowLeft});
        name.text(products[1].name)
        price.text(products[1].price)
    });

    $("#keyboardpoint").mouseleave(function() {
        // Hide the popup window on mouse leave
        popupWindow.hide();
    });
});
