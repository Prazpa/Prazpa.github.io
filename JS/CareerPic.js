let n = 1;

function change_pic() {
    switch(n) {
        case 1: document.getElementById("pictures").src = "IMG/4.JPG";
            break;
        case 2: document.getElementById("pictures").src = "IMG/5.JPG";
            break;
        case 3: document.getElementById("pictures").src = "IMG/6.JPG";
            break;
        case 4: document.getElementById("pictures").src = "IMG/7.JPG";
            break;
    }

    if (n==1) {
        document.getElementById("back-btn").disabled = true;
        document.getElementById("forward-btn").disabled = false;
    } else if (n==4) {
        document.getElementById("back-btn").disabled = false;
        document.getElementById("forward-btn").disabled = true;
    } else {
        document.getElementById("back-btn").disabled = false;
        document.getElementById("forward-btn").disabled = false;
    }
}
