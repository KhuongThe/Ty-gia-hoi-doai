
    function fun_name() {
        let input_x = document.getElementById("demo1").value;
        let x = parseInt(input_x);
        let y = document.getElementById("dinhgia").value;
        let z = document.getElementById("yetgia").value;
        let A = y && z;
        let A1;

        if (y == "VND" && z == "USD") {
            A1 = 0.000043;
        }
        else if (y == "VND" && z == "EURO") {
            A1 = 0.000042;
        }
        else if (y == "VND" && z == "POUND") {
            A1 = 0.000036;
        }
        else if (y == "VND" && z == "VND") {
            A1 = 1;
        }
        else if (y == "USD" && z == "VND") {
            A1 = 23255.81;
        }
        else if (y == "USD" && z == "EURO") {
            A1 = 0.976744;
        }
        else if (y == "USD" && z == "POUND") {
            A1 = 0.837209;
        }
        else if (y == "USD" && z == "USD") {
            A1 = 1;
        }
        else if (y == "EURO" && z == "VND") {
            A1 = 23809.52;
        }
        else if (y == "EURO" && z == "USD") {
            A1 = 1.02381;
        }
        else if (y == "EURO" && z == "POUND") {
            A1 = 0.857143;
        }
        else if (y == "EURO" && z == "EURO") {
            A1 = 1;
        }
        else if (y == "POUND" && z == "VND") {
            A1 = 27777.78;
        }
        else if (y == "POUND" && z == "USD") {
            A1 = 1.194444;
        }
        else if (y == "POUND" && z == "EURO") {
            A1 = 1.166667;
        }
        else if (y == "POUND" && z == "POUND") {
            A1 = 1;
        }
        else {
            A1 = 0;
        }
        let B = x * A1
        document.getElementById("demo2").innerText = "Tra ket qua: " + B;
    }
