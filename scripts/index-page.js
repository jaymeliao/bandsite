const userComments = [
  {
    author: "Connor Walton",
    date: "02/17/2021",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    author: "Emilie Beach",
    date: "01/09/2021",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    author: "Miles Acosta",
    date: "12/20/2020",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");



// Function to render comments
function renderComments() {
  commentsList.innerHTML = "";

  userComments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.classList.add("comments__list__item");

    const avatar = document.createElement("img");
    avatar.classList.add("user-avatar");
    avatar.src = "./assets/Images/blank-profile.png";
    avatar.alt = "User Avatar";

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("comment__header");

    const username = document.createElement("h3");
    username.classList.add("comment__username");
    username.textContent = comment.author;

    const timestamp = document.createElement("h3");
    timestamp.classList.add("comment__timestamp");
    timestamp.textContent = new Date(comment.date).toLocaleDateString();

    const content = document.createElement("p");
    content.classList.add("comment__content");
    content.textContent = comment.content;

    headerDiv.appendChild(username);
    headerDiv.appendChild(timestamp);
    commentDiv.appendChild(headerDiv);
    commentDiv.appendChild(content);
    listItem.appendChild(avatar);
    listItem.appendChild(commentDiv);
    commentsList.appendChild(listItem);
  });
}


commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("personName");
  const commentInput = document.getElementById("personComment");

  const name = nameInput.value.trim();
  //const comment = commentInput.value.trim();
  const comment = event.target.comment.value.trim();;
  const date = new Date().toISOString();

  if (name === "" || comment === "") {
    alert("Name and comment cannot be empty.");
    return;
  }

  userComments.push({ author: name, date, content: comment });

  nameInput.value = "";
  commentInput.value = "";

  renderComments();
  console.log(userComments);
});

renderComments();
