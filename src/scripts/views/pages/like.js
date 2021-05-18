import FavoriteRestoIdb from "../../data/favoriteresto-idb";
import { createRestoItemTemplate, njajal } from "../templates/template-creator";

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Like Restaurant</h2>
      <div id="restos" class="restos">
      </div>
  </div>`;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    // console.log(restos);
    const restosContainer = document.querySelector("#restos");
    restos.map((resto) => {
      console.log(resto.name);
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // restos.forEach((resto) => {
    //   console.log(resto);
    // });
  },
};

export default Like;
