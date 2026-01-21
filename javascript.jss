function checkEligibility() {
  document.getElementById("eligibilityResult").innerText =
    "You are eligible to apply ✔";
}

function showDocs() {
  const docs = document.getElementById("docs");
  docs.classList.toggle("hidden");
}
