let btn = document.querySelector(".button");

let player = {
    photo: "https://img.sportarena.com/2018/01/2-pszh.jpg",
    fullName: "Рона́лду ди Аси́с Море́йра (Ronaldinho)",
    citizenShip: "Бразилия",
    birthday: "21.03.1980",
    role: "Нападающий",
    clubs: [
        {
            clabName: "Gremio",
            years: "1998–2001",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Gremio.svg/403px-Gremio.svg.png",
            classClub: "gremio"
        },
        {
            clabName: "PSG",
            years: "2001–2003",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/480px-Paris_Saint-Germain_F.C..svg.png",
            classClub: "psg"
        },
        {
            clabName: "Barcelona",
            years: "2003–2008",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/472px-FC_Barcelona_%28crest%29.svg.png",
            classClub: "barcelona"
        },
        {
            clabName: "AC Milan",
            years: "2008–2011",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/305px-Logo_of_AC_Milan.svg.png",
            classClub: "milan"
        },
        {
            clabName: "Flamengo",
            years: "2011–2012",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/387px-Flamengo_braz_logo.svg.png",
            classClub: "flamengo"
        },
        {
            clabName: "Atletico Mineiro",
            years: "2012–2014",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Clube_Atl%C3%A9tico_Mineiro_crest.svg/318px-Clube_Atl%C3%A9tico_Mineiro_crest.svg.png",
            classClub: "atletico"
        },
        {
            clabName: "Queretaro",
            years: "2014–2015",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Quer%C3%A9taro_F.C._logo.svg/369px-Quer%C3%A9taro_F.C._logo.svg.png",
            classClub: "queretaro"
        },
        {
            clabName: "Fluminense",
            years: "2015",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FFC_crest.svg/415px-FFC_crest.svg.png",
            classClub: "fluminense"
        },
    ]
}

btn.addEventListener("click", () => {
    let modal = document.querySelector(".modal");
    modal.classList.add("visibility-hidden")

    let wrapper = document.querySelector(".wrapper")
    wrapper.classList.add("visibility-visible")

    document.body.style.backgroundColor = "rgb(11, 192, 11)";

    let head = document.querySelector(".head")
    head.innerHTML = `<img src=${player.photo} alt="">
    <div class="info-text">
        <h1>
            ${player.fullName}
        </h1>
        <p>Гражданство: ${player.citizenShip}</p>
        <p>Дата рождения: ${player.birthday}</p>
        <p>Аплуа: ${player.role}</p>
    </div>`

    let clubsHtml = ""
    for (const str of player.clubs) {
        clubsHtml += `<div class="club ${str.classClub}">
        <img src=${str.logo} alt="">
        <div class="club-name">
            ${str.clabName} ${str.years}
        </div>
    </div>`    
    }

    let clubs = document.querySelector(".clubs")
    clubs.innerHTML = clubsHtml
})