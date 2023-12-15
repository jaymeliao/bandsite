import BandSiteAPI from "./band-site-api.js";
const bandSiteAPI = new BandSiteAPI("jayme");

const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");




// Function to render comments
async function renderComments() {
  commentsList.innerHTML = "";
  const userComments = await bandSiteAPI.getComment();
  userComments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  userComments.forEach(async (item) => {
    const [randomProfileUrl] = await Promise.all([
      bandSiteAPI.getRandomProfile(),
    ]);

    const listItem = document.createElement("li");
    listItem.classList.add("comments__list__item");
    const avatar = document.createElement("img");
    avatar.classList.add("user-avatar");

    avatar.src = randomProfileUrl;
    avatar.alt = "User Avatar";

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("comment__header");

    const username = document.createElement("h3");
    username.classList.add("comment__username");
    username.textContent = item.name;

    const timestamp = document.createElement("h3");
    timestamp.classList.add("comment__timestamp");
    timestamp.textContent = new Date(item.timestamp).toLocaleDateString();

    const content = document.createElement("p");
    content.classList.add("comment__content");
    content.textContent = item.comment;

    headerDiv.appendChild(username);
    headerDiv.appendChild(timestamp);
    commentDiv.appendChild(headerDiv);
    commentDiv.appendChild(content);
    listItem.appendChild(avatar);
    listItem.appendChild(commentDiv);
    commentsList.appendChild(listItem);
  });
}

commentForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("personName");
  const commentInput = document.getElementById("personComment");

  const userName = nameInput.value.trim();
  const commentContent = event.target.comment.value.trim();
  const date = new Date().getTime();

  if (userName === "" && commentContent=== "") {
    alert("Name and Commnet cannot be empty.");
    nameInput.classList.add("input-error");
    commentInput.classList.add("input-error");
    return;
  } else {
    nameInput.classList.remove("input-error");
    commentInput.classList.remove("input-error");
  }

  if (userName === "") {
    alert("Name cannot be empty.");
    nameInput.classList.add("input-error");
    return;
  } else {
    nameInput.classList.remove("input-error");
  }

  if (commentContent === "") {
    alert("Comment cannot be empty.");
    commentInput.classList.add("input-error");
    return;
  } else {
    commentInput.classList.remove("input-error");
  }
  const newComments = { name: userName, comment: commentContent };


  const response = await bandSiteAPI.postComment(newComments);

  nameInput.value = "";
  commentInput.value = "";

  renderComments();
});

renderComments();
