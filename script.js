const form = document.getElementById("leadForm");
const webhookURL = "https://hook.us2.make.com/o88t82mkc21k1ypnb5wg9cj56aq1dj8e";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value
  };

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if(response.ok) {
      document.getElementById("status").innerText =
        "Lead submitted successfully!";
      form.reset();
    } else {
      document.getElementById("status").innerText =
        "Something went wrong.";
    }

  } catch(error) {
    document.getElementById("status").innerText =
      "Server error.";
  }
});
