document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Fetch data from API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      // Display data
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        card.appendChild(title);
        card.appendChild(body);
        content.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.postId = post.id;

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const viewComments = document.createElement("button");
        viewComments.textContent = "View Comments";
        viewComments.addEventListener("click", () =>
          loadComments(post.id, card)
        );

        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(viewComments);
        content.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function loadComments(postId, card) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      const commentsSection = document.createElement("div");
      commentsSection.className = "comments";

      comments.forEach((comment) => {
        const commentCard = document.createElement("div");
        commentCard.className = "comment";

        const name = document.createElement("h3");
        name.textContent = comment.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${comment.email}`;

        const body = document.createElement("p");
        body.textContent = comment.body;

        commentCard.appendChild(name);
        commentCard.appendChild(email);
        commentCard.appendChild(body);
        commentsSection.appendChild(commentCard);
      });

      card.appendChild(commentsSection);
    })
    .catch((error) => console.error("Error fetching comments:", error));
}
