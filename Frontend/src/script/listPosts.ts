if (sessionStorage.getItem("isloggedin")) {
    if (document.querySelector(".login-link")) {
        let Loginlink = document.querySelector("#login-link") as HTMLElement;
        Loginlink.classList.toggle("invisible");
        Loginlink.classList.toggle("position-absolute");
        if (document.querySelector('.posts')) {
            let posts = document.querySelector(".posts") as HTMLElement;
            posts.classList.toggle("invisible");
            posts.classList.toggle("position-absolute");
        }
    }
}
if (sessionStorage.getItem("type")) {
    if (document.querySelector(".accounts")) {
        let acc = document.querySelector(".accounts") as HTMLElement;
        acc.classList.toggle("invisible");
        acc.classList.toggle("position-absolute");
    }
}


//Displaying Agency Posts
fetch("http://localhost:3000/posts", {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    cache: "default",
})
    .then((response) => response.json())
    .then((json) => {
        const posts = json;
        displayPosts(posts);
        console.log(posts);
    });

function displayPosts(p: any[]) {
    p.forEach((i) => {
        const card = document.getElementById("to-be-duplicated") as HTMLElement;
        const clone = card.cloneNode(true) as HTMLElement;
        clone.classList.toggle("invisible");
        clone.classList.toggle("position-absolute");
        document.querySelector(".row")?.appendChild(clone);
        clone.querySelector(".agency")!.textContent = i.name;
        clone.querySelector(".service")!.textContent = i.description;
        clone.querySelector(".location")!.textContent = i.contact;
        clone.querySelector(".id")!.textContent = i._id;
        clone.querySelector('.userid')!.textContent = i.user;
        (clone.querySelector('.phone') as HTMLAnchorElement)!.href = "tel:".concat(i.contact);
        const createdAt = new Date(i.createdAt);
        const dateOptions = { year: "numeric", month: "long", day: "numeric" };
        const timeOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        const readableCreatedAt = `${createdAt.toLocaleDateString()} 
      ${createdAt.toLocaleTimeString()}`;
        clone.querySelector(".date")!.innerHTML = readableCreatedAt;
    });
}
function request(event: Event) {
    event.preventDefault();
    sessionStorage.setItem("fromrequest", "true");
    if (sessionStorage.getItem("isloggedin")) {
        window.location.replace("../HTML Sebawi User/ServiceRequest.html");
    } else {
        window.location.replace("../HTML Sebawi User/Login.html");
    }
}


//deleting posts
function deletePost(event: Event) {
    const tbd =
        (event.target as HTMLElement).parentElement?.parentElement?.parentElement
            ?.parentElement;
    tbd?.remove();
    const name = tbd?.querySelector(".id");
    const id = name?.innerHTML;
    console.log(id);
    fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        cache: "default",
    });
}
function TogglePost(event: Event) {
    const parent = (event.target as HTMLElement).parentElement?.parentElement
        ?.parentElement;
    const name = parent?.querySelector(".id");
    const id = name?.innerHTML;
    const tbu = parent?.querySelector("#update-input");
    tbu?.classList.toggle("invisible");
    tbu?.classList.toggle("position-absolute");
}
function updatePost(event: Event) {
    const parent = (event.target as HTMLElement).parentElement?.parentElement
        ?.parentElement;
    const name = parent?.querySelector(".id");
    const id = name?.innerHTML;
    event.preventDefault();
    const updatedPost = {
        name: (event.target as HTMLFormElement).fullname.value,
        description: (event.target as HTMLFormElement).service.value,
        contact: (event.target as HTMLFormElement).contact.value,
    };
    fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
        cache: "default",
    }).then((response) => {
        if (response.ok) {
            const tbu = parent?.querySelector("#update-input");
            tbu?.classList.toggle("invisible");
            tbu?.classList.toggle("position-absolute");
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    });
}


