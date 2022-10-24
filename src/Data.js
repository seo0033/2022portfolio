const profile =
{
    name: "jangseoyoung",
    email: "tkrhk9511@gmail.com",
    tel: "010.2981.3734"
}

const portfolio = [
    {
        id: 1, title: "PROJECT01", span: "ASEOP", brand: "이솝", type: "Responsive Web", font: ["'Hahmlet', serif"]
        , color: ["#fefef2", "#77744f", " #f1f1f1", "#333"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_01.png", link: "https://seo0033.github.io/01_aseop/"
    },
    {
        id: 2, title: "PROJECT02", span: "louispoulsen", brand: "루이스폴센", type: "Responsive Web", font: ["Pretendard-Regular", "SBAggroB"]
        , color: ["#ffffff", "#999999", "#222222"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_02.png", link: "https://seo0033.github.io/02_louispoulsen/"
    },
    {
        id: 3, title: "PROJECT03", span: "Asan Medical Center", brand: "서울아산병원", type: "Responsive Web", font: ["Noto Sans KR"]
        , color: ["#00696d", "#f29819", "#333333", "#f9f9f9"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_03.png", link: "https://seo0033.github.io/03_AMC/"
    },
    {
        id: 4, title: "PROJECT04", span: "SAMSUNG", brand: "삼성물산", type: "Responsive Web", font: ["폰트1", "폰트2", "폰트3"]
        , color: ["#369", "#f99", "#ff9"], skill: "HTML, CSS, jQuery", src: process.env.PUBLIC_URL + "/img/screenshot_04.png", link: "https://seo0033.github.io/04_samsumg/"
    },
    {
        id: 5, title: "PROJECT05", span: "COOKIT", brand: "쿡킷", type: "Responsive Web", font: ["Noto Sans KR"]
        , color: ["#ffffff", "#dddddd", "#ff8601", "#532900"], skill: "HTML, CSS, JavaScript", src: process.env.PUBLIC_URL + "/img/screenshot_05.png", link: "https://seo0033.github.io/05_cookit/"
    },
    {
        id: 6, title: "PROJECT06", span: "DOOSI", brand: "두시", type: "React Web", font: ["'Hahmlet',serif"]
        , color: ["#f9f5ea", "#7d9d91", "#004433", "00140f"], skill: "HTML, CSS, React", src: process.env.PUBLIC_URL + "/img/screenshot_06.png", link: "https://seo0033.github.io/06_doosi/"
    },

]


export { profile, portfolio }