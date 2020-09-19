function loadMyPosts() {
    const userId = JSON.parse(window.localStorage.user).id   

    $.get(`/api/posts?userId=${userId}`,(posts)=>{
        for (const p of posts) {
            $('#posts_container').append(
                $(`
                <div class="col-4">
                <div class="card m-2">
                <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">${p.body.substr(0,200)}
                <a href="#">...Read more</a>
                </p>
                <a href="#" class="card-link">Like</a>
                <a href="#" class="card-link">Comment</a>
                </div>
                </div>
                </div>
                `)
            )
        }
    })
}