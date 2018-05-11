var buttonList = $(".color");
var chkbox = $("#modify-texte");
/*
## 1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le
data attribute data-color
*/
for (var i = 0; i < buttonList.length; i++) {
    var buttoncolor = $(buttonList[i]).attr("data-color");
    $(buttonList[i]).css("background-color", buttoncolor);
}

function changeColor() {
    buttoncolor = $(this).attr("data-color");

    /*
    ## 3e étape
    quand la case #modify-texte est cochée, la couleur du texte
    doit etre modifiée
    */
    if (chkbox.is(':checked')) {
        $(".main").css("color", buttoncolor);
    } else {

        $(".main").css("background-color", buttoncolor);
    }
}
/*
## 2e étape 
Un click sur le bouton doit mettre cette couleur en fond
*/
$(buttonList).on("click", changeColor);
