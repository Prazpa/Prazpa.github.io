const Q_btn = document.getElementsByTagName("q");

function ranquote() {
    const rannum = Math.floor(Math.random() * 17);

    fetch("https://type.fit/api/quotes")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            Array.from(Q_btn).forEach((element) => {
                element.innerHTML = data[rannum].text;
            });
        })
        .catch((err) => {
            console.log("failed", err);
        });
}