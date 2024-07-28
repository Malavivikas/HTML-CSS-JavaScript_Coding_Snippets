const btn = document.getElementById("btn");
const list = document.getElementById("list");

async function fetchAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
function createCard(post) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${post.title}</h3>`;
  return card;
}

document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts-container");
  const posts = await fetchAPI();
  posts.forEach((post) => {
    const card = createCard(post);
    postsContainer.appendChild(card);
  });
});
