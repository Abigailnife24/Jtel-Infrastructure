document.getElementById('myForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Send form data to Formspree
        fetch('https://formspree.io/f/xldeyznp', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    document.getElementById('myForm').reset(); // Reset form after submission
                } else {
                    throw new Error('Form submission failed!');
                }
            })
            .catch(function (error) {
                console.error(error);
                alert(
                    'An error occurred while submitting the form. Please try again later.'
                );
            });
    });


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');
    const downArrow = item.querySelector("img");
    downArrow.style.transition = "all 0.2s";

    questionButton.addEventListener('click', () => {
        const isVisible = answerDiv.style.display === 'block';
        answerDiv.style.display = isVisible ? 'none' : 'block';
        downArrow.style.transform = isVisible ? "rotateX(0)" : "rotateX(-180deg)";
    });
});



// Newsletter subscription function
function subscribeNewsletter() {
    var email = document.getElementById("newsletter").value;
    if (email) {
        alert("Thank you for subscribing, " + email + "!");
        document.getElementById("newsletter").value = ''; // Clear the input field after subscription
    } else {
        alert("Please enter a valid email address.");
    }
}