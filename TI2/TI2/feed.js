function criarPost(publicacao) {
    var postContainer = document.createElement("div");
    postContainer.classList.add("post-container");

    var post = document.createElement("div");
    post.classList.add("post");

    var userHeader = document.createElement("div");
    userHeader.classList.add("user-header");

    var profileImg = document.createElement("img");
    profileImg.classList.add("profile-img");
    profileImg.setAttribute("src", "https://via.placeholder.com/50");
    profileImg.setAttribute("alt", "Profile Image");

    var username = document.createElement("a");
    username.classList.add("username");
    username.setAttribute("href", "perfil.html");
    username.textContent = "nome_usuario";

    userHeader.appendChild(profileImg);
    userHeader.appendChild(username);

    var publicacaoText = document.createElement("p");
    publicacaoText.textContent = publicacao;

    var likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.classList.add("like-button");

    var commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.classList.add("comment-button");

    var commentsSection = document.createElement("div");
    commentsSection.classList.add("comments");

    post.appendChild(userHeader);
    post.appendChild(publicacaoText);
    post.appendChild(likeButton);
    post.appendChild(commentButton);
    post.appendChild(commentsSection);

    postContainer.appendChild(post);

    return postContainer;
}
