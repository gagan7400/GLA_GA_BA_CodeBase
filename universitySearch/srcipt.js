// Unversity Search 
let url = "http://universities.hipolabs.com/search?&country="
let input = document.querySelector("input");
let btn = document.querySelector("button");
let searchinp = async () => {
    let alldata = await fetch(url + input.value);
    let res = await alldata.json();
    showdata(res)
}
input.addEventListener("keyup", debounce(searchinp, 100));
function debounce(fn, delay) {
    let timer = "";
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => { fn() }, delay)
    }
}





function showdata(data) {
    let universities = document.querySelector(".universities");
    universities.innerHTML = ""; //emtpy the card list;
    data.map((v, i) => {
        universities.innerHTML += `    <div>
    <p> name : ${v.name}</p>
    <p> country : ${v.country}</p>
    <p> state-province : ${v["state-province"]}</p>
    <p> domains : ${v.domains[0]}</p>
    <a href="${v.web_pages[0]}">WebSite</a>
    </div>`
    });
}

// [
//     {
//         alpha_two_code: "NP",
//         country: "Nepal",
//          domains: ['afu.edu.np'     ],
//          name: "Agriculture and Forestry University",
//           state-province: "Bagmati",
//            web_pages: ['http: //www.afu.edu.np/']
//          }
//     ]

