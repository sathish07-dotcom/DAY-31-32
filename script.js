
async function fetchUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await response.json();
        document.getElementById("user").innerText =` Name: ${user.name}, Email: ${user.email}`;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
    document.getElementById("message").innerText = "Processing...";
    await delay(2000);
    document.getElementById("message").innerText = "Hello, Async/Await!";
}


async function fetchPostsAndComments() {
    try {
        let [posts, comments] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
        ]);

        console.log("Total Posts:", posts.length);
        console.log("Total Comments:", comments.length);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchPostsAndComments();

async function loadImage() {
    let img = document.getElementById("image");
    img.src = "https://via.placeholder.com/300";
    
    await new Promise(resolve => img.onload = resolve);
    
    img.style.display = "block";
}

async function fetchInvalidData() {
    try {
        let response = await fetch("https://invalid-url.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

fetchInvalidData();