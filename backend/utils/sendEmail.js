const sendEmail = async (options) => {
  // IMPORTANT: Replace this key with your own Web3Forms access key
  // Get it for free in 5 seconds at: https://web3forms.com/
  const WEB3FORMS_ACCESS_KEY = "48a61441-0889-4040-b894-e64647d0cdba";

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: options.name || "Portfolio Contact",
        email: options.replyTo, // User's email
        subject: options.subject,
        message: options.message,
        from_name: "Portfolio Website"
      })
    });

    const result = await response.json();
    if (!result.success) {
      console.error("Web3Forms error:", result);
    }
  } catch (error) {
    console.error("HTTP Email error:", error);
  }
};

export default sendEmail;
