import { gymData } from "./gymData.js";

const refinedData = gymData.centerList.map(
  ({
    gymName,
    gymPhotoSmall: gymImg,
    address: gymAddr,
    tags: gymTags,
    program: gymProg,
    service: gymService,
    price: gymPrice,
    review: gymReview,
  }) => ({
    gymName,
    gymImg,
    gymAddr,
    gymTags,
    gymProg,
    gymService,
    gymPrice,
    gymReview,
  })
);

export const finalRefine = [...refinedData];

const monthlyPrice = (price) => (price / 12).toLocaleString();
const originPrice = (price) => price.toLocaleString();
export const spreadDatas = (gym) =>
  `
  <div class="liteAdList">
  <div class="mainGymInfo">
    <div class="mainCard">
      <div class="scripts">
        <div class="imgTag">
          <img
            src="${gym.gymImg}"
            alt=""
          />
        </div>
        <div class="inners-scripts-container">
          <div class="tagLike">
            <span class="tag">${[...gym.gymTags]}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.26253 5.59668C5.19337 4.54442 6.51555 3.80615 8.01562 3.80615C9.61988 3.80615 11.0418 4.53326 12.0003 5.66055C12.9589 4.53366 14.3801 3.80721 15.9844 3.80721C17.4845 3.80721 18.8066 4.54549 19.7375 5.59774C20.6607 6.64138 21.2425 8.03926 21.2499 9.47216C21.438 12.2013 19.3937 15.6384 12.4064 20.077C12.1657 20.2299 11.8592 20.233 11.6154 20.0852C5.0502 16.1044 2.75331 12.3467 2.75 9.49981L2.75 9.49894C2.75 8.05632 3.33333 6.64707 4.26253 5.59668ZM4.25 9.49848C4.25253 11.4865 5.88006 14.7558 11.9956 18.5585C18.6317 14.2622 19.8845 11.3309 19.7521 9.55581C19.7507 9.53724 19.75 9.51862 19.75 9.5C19.75 8.45212 19.3202 7.38997 18.614 6.5916C17.9094 5.79509 16.9737 5.30721 15.9844 5.30721C14.5453 5.30721 13.2987 6.13156 12.6641 7.34095C12.5345 7.58789 12.2787 7.74255 11.9998 7.74246C11.7209 7.74238 11.4651 7.58758 11.3357 7.34056C10.7021 6.13148 9.45467 5.30615 8.01562 5.30615C7.02627 5.30615 6.09063 5.79402 5.38602 6.59054C4.67987 7.38879 4.25013 8.45075 4.25 9.49848Z"
                fill="#3D4149"
              ></path>
            </svg>
            <!-- 하트 아이콘 -->
          </div>
          <div class="inner-scripts-main">
            <div class="gymName">
              <span class="gymName-inner">${gym.gymName}</span>
              <div class="gymSubInfo">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.80275 0.341098C5.96084 -0.1137 6.60403 -0.113699 6.76212 0.341099L7.95741 3.77978C8.02714 3.98041 8.21438 4.11644 8.42674 4.12077L12.0665 4.19494C12.5479 4.20475 12.7466 4.81647 12.3629 5.10736L9.46193 7.30675C9.29267 7.43507 9.22115 7.65518 9.28266 7.85849L10.3369 11.343C10.4763 11.8039 9.95593 12.1819 9.56071 11.9069L6.5725 9.82753C6.39816 9.70621 6.16672 9.70621 5.99237 9.82753L3.00416 11.9069C2.60894 12.1819 2.08859 11.8039 2.22802 11.343L3.28222 7.85849C3.34372 7.65518 3.27221 7.43507 3.10295 7.30675L0.201932 5.10736C-0.181756 4.81646 0.0170023 4.20475 0.498393 4.19494L4.13813 4.12077C4.35049 4.11644 4.53773 3.98041 4.60747 3.77978L5.80275 0.341098Z"
                    fill="#FFC500"
                  ></path>
                </svg>
                <!-- 별모양 -->
                <span class="reviewRate">${gym.gymReview.rate}</span>
                <span class="reviewCount">(${gym.gymReview.count})</span>
                <span class="gymAddr-inner">${gym.gymAddr}</span>
              </div>
            </div>
            <div class="gymPrices">
              <span class="originalPrice">${originPrice(
                gym.gymPrice.originalPrice
              )}</span>
              <div class="priceLine">
                <div class="eventTags">
                  <span class="dailyItem">일일권</span>
                  <span class="membership">다짐 회원가</span>
                </div>
                <div class="lowestPrice">
                  <span class="discountRate">15%</span> ${monthlyPrice(
                    gym.gymPrice.lowestPrice
                  )}~/월
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scripts-lower">
        <div class="freeProperty">
          <div class="freeProg">
            <p class="freeProg-inner">무료 프로그램</p>
            <span class="freeProg-innerText">
              ${gym.gymProg.free}
            </span>
          </div>
          <div class="freeServices">
            <p class="freeServices-inner">무료 서비스</p>
            <span class="freeServices-innerText">
              ${gym.gymService.free}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
