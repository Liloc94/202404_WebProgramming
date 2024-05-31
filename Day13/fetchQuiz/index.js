const webData = fetch("https://fakerapi.it/api/v1/books?_quantity=20");

const randomImg = (imgLink) => String(imgLink).replace("200/300", "300/200");

const jsonData = webData
  .then((v) => v.json())
  .then((v) => {
    const bookData = v.data;
    bookData.map((v) => {
      v.image = "https://picsum.photos/200/300";
    });

    const toHTML = document.querySelector(".bookList");

    bookData.map((v) => {
      toHTML.insertAdjacentHTML(
        "beforeend",
        `
        <div class="bookCard">
          <div class="inner-bookCard">
            <div class="imgBox">
              <img src="${v.image}" alt="" />
            </div>
            <div class="bookInfos">
              <span class="bookTitle">TITLE<br> ${v.title}</span>
              <span class="bookAuthor">AUTHOR<br> ${v.author}</span>
              <span class="bookDescription">DESCRIPTION<br> ${v.description}</span>
            </div>
          </div>
        </div>
        `
      );
    });
  });
