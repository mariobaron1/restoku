import TheRestoDbSource from "../../data/theresto-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">List Restaurant</h2>
        <div id="movies" class="movies">

        </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await TheRestoDbSource.homeResto();
    // console.log(restos);

    const restosContainer = document.querySelector("#movies");
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
