document.addEventListener("DOMContentLoaded", function() {
    fetchBookTitles()
    
});

let bookTitles = document.getElementById("list")
let bioDescritionContainer = document.getElementById("show-panel")

function fetchBookTitles() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => {
            data.map(book => {
                const bookTitle = document.createElement("li")
                bookTitle.innerHTML = book.title
                bookTitle.addEventListener("click", (event) => {
                    bioDescritionContainer.innerHTML =""
                    thumbNail = document.createElement("img")
                    thumbNail.src = book.img_url
                    bio = document.createElement("p")
                    bio.innerHTML = book.description
                    li = document.createElement("div")
                    book.users.map(user => {
                        oneUser = document.createElement("li")
                        oneUser.innerHTML = user.username
                        li.append(oneUser)
                    })
                    likeButton = document.createElement("button")
                    likeButton.innerHTML = "Like"
                    likeButton.addEventListener("click", (event) => {
                        let randomIndex = Math.floor(Math.random() * book.users.length)
                        let randomUser = book.users[randomIndex]
                        let randomUserName = document.createElement("li")
                        randomUserName.innerHTML = randomUser.username
                        li.append(randomUserName)
                    })
                    bioDescritionContainer.append(thumbNail, bio, li, likeButton)


                })
                bookTitles.append((bookTitle))
            })

        })
    
}

function randomlyGetUser() {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data =>)
}

function likeUnlike(event) {
    console.log(event.target)
}
