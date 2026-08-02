function makeRoute() {
    const route = document.getElementById("route").value.trim();
    const start = document.getElementById("start").value.trim();
    const end = document.getElementById("end").value.trim();

    const preview = document.getElementById("preview");

    if (route === "" || start === "" || end === "") {
        preview.innerHTML = "<p>노선번호, 기점, 종점을 모두 입력하세요.</p>";
        return;
    }

    preview.innerHTML = `
        <div class="route-box">
            <h1 style="color:#1565c0;">🚌 ${route}</h1>
            <div style="margin-top:20px;font-size:20px;">
                <strong>${start}</strong>
                <br>
                │
                <br>
                ●
                <br>
                │
                <br>
                <strong>${end}</strong>
            </div>
        </div>
    `;
}
