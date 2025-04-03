document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun sayfayı yeniden yüklemesini engeller

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if(name && message) {
        alert("Mesajınız başarıyla gönderildi, " + name + "!");
    } else {
        alert("Lütfen tüm alanları doldurduğunuzdan emin olun.");
    }
});