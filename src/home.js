
export default function loadHomepage() {
    const img1 = document.createElement("div");
    img1.classList.add("img1");

    const img2 = document.createElement("div");
    img2.classList.add("img2");

    const img3 = document.createElement("div");
    img3.classList.add("img3");

    const p1 = document.createElement("div");
    p1.classList.add("description");
    p1.innerHTML = "SO GOOD SO TRUE <br> At Augustine's Roadhouse, we serve delicious food and drinks in a comfortable, sociable atmosphere. Our carefully crafted menu includes something for everyone, and our Chefs use fresh, locally sourced ingredients. We also carry an extensive selection of wines, beers and cocktails to pair with any meal!"

    const p2 = document.createElement("div");
    p2.classList.add("description");
    p2.innerHTML = "YOUR SPECIAL HOUSE IN PARADISE, HEAVEN <br> We believe in creating a space where people can come together to share stories, make memories and celebrate life. We invite you to join us for lunch & dinner!";

    const p3 = document.createElement("div");
    p3.classList.add("description");
    p3.innerHTML = "SIMPLE AND FRESH INGREDIENTS, CRAFT COCKTAILS, WINE & BEER <br> Lunch beginning daily at 11am. Dinner beginning nightly at 4pm. Opened throughout Saturdays & Sundays"

    const content  = document.getElementById("content")

    content.append(img1, img2, img3, p1, p2, p3)


}