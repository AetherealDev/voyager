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


const userLinks = document.querySelectorAll('.user-link');

userLinks.forEach(userLink => {
    userLink.addEventListener('click', async (event) => {
        event.preventDefault();
        const userId = userLink.getAttribute('data-user-id');

        window.location.href = `/profile/${userId}`; // Redirect to the profile page
    });
});



// // Function to get user by ID
// async function getUserById(userId) {
//     try {
//         const response = await fetch(`/api/users/${userId}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }
//
// // Attach click event listener to user links
// const userLinks = document.querySelectorAll('.user-link');
//
// userLinks.forEach(userLink => {
//     userLink.addEventListener('click', async (event) => {
//         event.preventDefault();
//         const userId = userLink.getAttribute('data-user-id');
//
//         const userData = await getUserById(userId);
//
//         if (userData) {
//             // Display the user data in a modal or other container
//             // For example, you could use a Bootstrap modal
//             const modalContent = document.getElementById('userModalContent');
//             modalContent.innerHTML = `
//         <h2>User Details</h2>
//         <p>Username: ${userData.username}</p>
//         <p>Email: ${userData.email}</p>
//       `;
//
//             // Open the modal (assuming you have a function to handle this)
//             openUserModal();
//         } else {
//             // Handle error or display a message
//             console.error('User not found');
//         }
//     });
// });
