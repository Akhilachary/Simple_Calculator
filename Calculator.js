let result = document.querySelector("h4");
let p = document.querySelectorAll("p");

p.forEach((ele) => {
    ele.addEventListener("click", () => {
        let value = ele.innerText;

        if (value === "DEL") {
            result.innerText = result.innerText.slice(0, -1) || "0";
        } else if (value === "AC") {
            result.innerText = "0";
        } else if (value === "=") {
            let expression = result.innerText.split("x").join("*"); 
            try {
                result.innerText = eval(expression);
            } catch {
                result.innerText = "Error";
            }
        } else {
            if (result.innerText === "0" && value !== ".") {
                result.innerText = value;
            } else {
                result.innerText += value;
            }
        }
    });
});
