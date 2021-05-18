import UrlParser from "../../routes/url-parser";
import TheRestoDbSource from "../../data/theresto-source";
import { createRestoDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        <div id="restos-detail" class="restos-detail"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    console.log(resto);

    const restoContainer = document.querySelector("#restos-detail");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
  },
};

export default Detail;
