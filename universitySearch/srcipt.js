// Unversity Search 
let url = "http://universities.hipolabs.com/search?&country="
let input = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let alldata = await fetch(url + input.value);
    let res = await alldata.json();
    console.log(res);
})

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

