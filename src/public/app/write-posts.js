$('#write-btn').click(()=>{
    const userId = JSON.parse(window.localStorage.user).id
    const title = $('#postTitle').val()
    const body = $('#postBody').val()

    $.post('/api/posts',{userId,title,body},(data)=>{
        $('#content').load('/components/my_posts.html')
        $('.nav-item .active').removeClass('active')
        $("[data-components='my_posts']").addClass('active')
    })
})