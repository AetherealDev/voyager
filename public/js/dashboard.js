function deletePost(postId) {
    // Send an AJAX request to upvote the post
    fetch(`/api/post/${postId}/delete`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {

            location.reload();

            // Optionally, provide feedback to the user (e.g., success message)
            console.log(data.message);
        })
        .catch(error => {
            // Handle errors, show error message to the user
            console.error('Error deleting post:', error);
        });
}