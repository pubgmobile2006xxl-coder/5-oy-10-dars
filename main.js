let container = document.getElementById("container");
const searchInput = document.getElementById("input");

let datas = [
    {
        "id": 1,
        "name": "Ali Valiyev",
        "age": 22,
        "email": "ali@mail.com",
        "job": "Frontend Developer",
        "city": "Tashkent"
    },
    {
        "id": 2,
        "name": "Hasan Karimov",
        "age": 25,
        "email": "hasan@mail.com",
        "job": "Backend Developer",
        "city": "Samarkand"
    },
    {
        "id": 3,
        "name": "Vali Xasanov",
        "age": 21,
        "email": "vali@mail.com",
        "job": "UI Designer",
        "city": "Bukhara"
    },
    {
        "id": 4,
        "name": "Jasur Aliyev",
        "age": 27,
        "email": "jasur@mail.com",
        "job": "Mobile Developer",
        "city": "Tashkent"
    },
    {
        "id": 5,
        "name": "Sardor Bek",
        "age": 24,
        "email": "sardor@mail.com",
        "job": "QA Engineer",
        "city": "Fergana"
    },
    {
        "id": 6,
        "name": "Bekzod Karim",
        "age": 23,
        "email": "bekzod@mail.com",
        "job": "DevOps Engineer",
        "city": "Namangan"
    },
    {
        "id": 7,
        "name": "Diyor Xasan",
        "age": 26,
        "email": "diyor@mail.com",
        "job": "Fullstack Developer",
        "city": "Andijan"
    },
    {
        "id": 8,
        "name": "Umid Sh",
        "age": 22,
        "email": "umid@mail.com",
        "job": "Data Analyst",
        "city": "Tashkent"
    },
    {
        "id": 9,
        "name": "Rustam Ali",
        "age": 28,
        "email": "rustam@mail.com",
        "job": "Project Manager",
        "city": "Samarkand"
    },
    {
        "id": 10,
        "name": "Zafar Karim",
        "age": 29,
        "email": "zafar@mail.com",
        "job": "Software Engineer",
        "city": "Bukhara"
    },
    {
        "id": 11,
        "name": "Odiljon Boltaev",
        "age": 29,
        "email": "zafar@mail.com",
        "job": "Software Engineer",
        "city": "Bukhara"
    },
    {
        "id": 12,
        "name": "Mamaraim Teshmat",
        "age": 29,
        "email": "zafar@mail.com",
        "job": "Software Engineer",
        "city": "Bukhara"
    }
]

function renderUsers(data) {
    container.innerHTML = datas.map(data => `
    <div keys= "el.id" class = "card">
        <img src="https://picsum.photos/id/${data.id}/200/200" alt="">
        <h1>${data.name}</h1>
        <p>${data.age}</p>
        <a href="#">${data.email}</a>
    </div>
        `).join("")
}

searchInput.addEventListener("input", function(e){
    data = e. target.value.toLowerCase().includes();
})