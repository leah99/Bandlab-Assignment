const listData = document.querySelector('ul');

// Fetch API
const fetchApi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            json.forEach(post => {
                listData.insertAdjacentHTML('beforeend', `
                    <li value=${post.userId}>
                        <h2>${post.title}</h2>
                        <span>${post.userId}</span>
                        <span>${post.body}</span>
                    </li>
                `);
            })
        }).catch(error => {
            console.log(error);
        });
}
        
// Sort by ascending Order
const sortListAsc = list => [...list].sort((a, b) => {
    return a.textContent.localeCompare(b.textContent)
});

// Sort by descending Order
const sortListDesc = list => [...list].sort((a, b) => {
    return b.textContent.localeCompare(a.textContent)
});

const group = list => [...list].sort((a, b) => 
    a.value - b.value
);

let alphaSort = true;
const toggleSort = () => {
    if (alphaSort) {
        document.querySelector("#btnSort").innerHTML = "↓ Sort Z to A";
        const ul = document.getElementById("sortList");
        const list = ul.querySelectorAll("li");
        ul.append(...sortListAsc(list));
    } else {
        document.querySelector("#btnSort").innerHTML = "↑ Sort A to Z";
        const ul = document.getElementById("sortList");
        const list = ul.querySelectorAll("li");
        ul.append(...sortListDesc(list));
    }
    alphaSort = ! alphaSort;
}

const groupByUserId = () => {
    const ul = document.getElementById("sortList");
    const list = ul.querySelectorAll("li");
    ul.append(...group(list));
}