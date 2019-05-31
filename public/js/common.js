let mains = [
    {
        'name': '부대찌개',
        'ingr': [
            "김치",
            "햄",
            "각종 야채"
        ],
        'price': 7000,
        'cal': 1500,
        'img': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTFfMTU5%2FMDAxNTA1MTAzODU2ODcw.rZv-AuTLxcPwNLVFkwzUgVe24uuVnlf6ImjLAFxhDnwg.f0uoYSV7DFwWbTcL_ju2WVjibHhiArZ-4qOf24-qcnwg.JPEG.kyyung_s2%2F%25C1%25BE%25B0%25A2_%25BF%25CF%25B9%25E9%25BA%25CE%25B4%25EB%25C2%25EE%25B0%25B310.jpg&type=b400'
    },
    {
        'name': '라면',
        'ingr': [
            "밀가루",
            "스프"
        ],
        'price': 2000,
        'cal': 1000,
        'img': 'http://imgnews.naver.net/image/296/2013/09/16/235786_570_59_20130916135002.jpg'
    },
    {
        'name': '돼지두루치기',
        'ingr': [
            "돼지고기",
            "양념"
        ],
        'price': 6000,
        'cal': 900,
        'img': 'http://blogfiles.naver.net/20140719_133/hwangug0420_1405768192295N341e_JPEG/%B5%C5%C1%F6%B5%CE%B7%E7%C4%A1%B1%E2%BF%CD%BC%D2%B0%A5%BA%F1_%281%29.jpg'
    },
]

let sides = [
    {
        'name': '사이드메뉴',
        'ingr': [
            "재",
            "료",
            "재료"
        ],
        'price': 1234,
        'cal': 5678,
        'img': 'https://via.placeholder.com/300'
    },
]

let fruits = [
    {
        'name': '과일',
        'ingr': [
            "생각해보니까",
            "과일에",
            "재료가 어딨어"
        ],
        'price': 1234,
        'cal': 5678,
        'img': 'https://via.placeholder.com/300'
    },
]

function addMenu(foods) {
    for (let i = 0; i < foods.length; i++) {
        let item = document.createElement("div")
        item.classList.add("item")

        let imgDiv = document.createElement("div")
        imgDiv.classList.add("img")

        let img = document.createElement("img")
        img.setAttribute("src", foods[i].img)
        img.setAttribute("alt", foods[i].name)

        imgDiv.append(img)
        item.append(imgDiv)

        let info = document.createElement("div")
        info.classList.add("info")

        let name = document.createElement("h3")
        name.innerText = "이름: " + foods[i].name
        info.append(name)

        let ingr = document.createElement("h3")
        ingr.innerText = "재료: " + foods[i].ingr.join(", ")
        info.append(ingr)

        let price = document.createElement("h3")
        price.innerText = "가격: " + foods[i].price
        info.append(price)

        let cal = document.createElement("h3")
        cal.innerText = "열량: " + foods[i].cal
        info.append(cal)

        item.append(info)

        document.getElementById("board").append(item)
    }
}
