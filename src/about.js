
export const loadAbout = function () {
    const contact = document.createElement("div");
    contact.classList.add("category");
    contact.innerHTML = "<p><strong>We want to hear from you</strong></p> <p>Let us know what you need to make your dining experience the best it can be!</p>"

    const phone = document.createElement("div");
    phone.classList.add("address");
    phone.innerHTML = "<p><strong>PHONE</strong></P> <P>111.111.111</P>"

    const location = document.createElement("div");
    location.classList.add("address");
    location.innerHTML = "<p><strong>ADDRESS</strong></p><p>0000 Heaven Avenue</p><p>Do-Right, Heaven, 11111</p>"

    const email = document.createElement("div");
    email.classList.add("address");
    email.innerHTML = "<p><strong>E-MAIL</strong></P> <P>dorightalways@regardless.com</P>"

    const content  = document.getElementById("content")

    content.append(contact, phone, location, email)

}