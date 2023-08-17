function upvotePost(postId) {
    // Send an AJAX request to upvote the post
    fetch(`/api/post/${postId}/upvote`, {
        method: 'PUT',
    })
        .then(response => response.json())
        .then(data => {
            // Update the UI to reflect the updated post information
            const upvoteCountElement = document.getElementById(`upvote-post-${postId}`);
            upvoteCountElement.textContent = "Upvotes: " + data.post.upvote;

            // Optionally, provide feedback to the user (e.g., success message)
            console.log(data.message);
        })
        .catch(error => {
            // Handle errors, show error message to the user
            console.error('Error upvoting post:', error);
        });
}

function deleteePost(postId) {
    // Send an AJAX request to upvote the post
    fetch(`/api/delte/${postId}/delete`, {
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