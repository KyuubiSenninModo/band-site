const api_key = "e7acfc16-afed-48d0-a469-a0a6c9fa3bd1";
const comments_url = 'https://project-1-api.herokuapp.com/comments';





let commentsSection = document.querySelector(".comments--section");
let submitButton = document.querySelector(".comment--button");
let userComment = document.getElementById("user--comment");
let userFullName = document.getElementById("full--name");
let form = document.getElementById("form");


function displayComment(commentsData) {
    // Creating HTML Structure and setting classes/text
    let individualComment = document.createElement("div")
    individualComment.classList.add("individual--comment");

    let avatarFlex = document.createElement("div");
    avatarFlex.classList.add("avatar--flex");

    let avatar =  document.createElement("img");
    avatar.classList.add("avatar");

    let flexBetweenText = document.createElement("div");
    flexBetweenText.classList.add("flex--between--text");

    let nameOfCommenter = document.createElement("p");
    nameOfCommenter.classList.add("name-of-commenter");
    nameOfCommenter.textContent = commentsData.name;

    let commentTimeStamp = document.createElement("p");
    commentTimeStamp.classList.add("comment--date");
    commentTimeStamp.textContent = commentsData.timestamp;

    let commentText = document.createElement("p");
    commentText.classList.add("comment--text");
    commentText.textContent = commentsData.comment;

    // Appending everything 
    commentsSection.appendChild(individualComment);
    individualComment.appendChild(avatarFlex);
    avatarFlex.appendChild(avatar);
    individualComment.appendChild(flexBetweenText);
    flexBetweenText.appendChild(nameOfCommenter);
    flexBetweenText.appendChild(commentTimeStamp);
    individualComment.appendChild(commentText);
};

form.addEventListener("submit", (event) => {
    inputName = event.target.userFullName.value;
    inputComment = event.target.userComment.value;
    event.preventDefault();
    let newPost = { 
        name: inputName,
        comment: inputComment
    };
    commentsArray.push(newPost);
    event.target.reset();
    displayComment(newPost);

    axios.post(`${comments_url}?api_key=${api_key}`, newPost);
});

axios.get(`${comments_url}?api_key=${api_key}`)
.then((response) => {
    for (let i = 0; i < response.data.length; i++) {
        displayComment(response.data[i]);
    }
})


