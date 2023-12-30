<template>
  <section
    class="slider px-xxl bg-gradient-to-r from-colorFrom to-colorTo pt-xl2 sm:pt-[27px]"
  >
    <div class="slider_in row flex w-full">
      <div
        class="slider_content mt-[1.35rem] row font-body flex-col w-full relative z-[999] h-auto max-w-40 grow-0 shrink"
      >
        <div>
          <span class="slider_year text-colorLinks text-4xl italic opacity-30"
            >2022</span
          >
        </div>

        <h1
          class="slider_title text-colorTitle text-8xl font-black leading-[6.25rem] capitalize tracking-[.9rem] mt-6"
        >
          Autumn <br />Jackets
        </h1>

        <p
          class="slider_description text-[1.5625rem] text-colorLinks opacity-80 mt-6 font-body"
        >
          Autumn Sale / Up to 50% OFF
        </p>

        <div
          class="slider_link inline-flex items-center justify-start w-full mt-[1.5625rem]"
        >
          <a
            class="hovered_link py-buttonPadY px-buttonPadX text-center bg-colorBasket rounded-buttonIcon text-col_bg_btn text-sm font-body capitalize hover:bg-hoveredColorBasket"
            href="#"
            >Open Collection</a
          >
        </div>
      </div>

      <div
        class="slider_images row flex items-stretch justify-between w-full h-auto relative shrink-0 grow basis-3/5"
      >
        <div
          class="slider_images_content row relative w-full mt-[10.69%] py-0 px-[16.921%] flex flex-col shrink"
        >
          <div class="slider_price self-start">
            <p
              class="text-colorTitle text-center text-4xl font-body font-medium"
            >
              $299
            </p>
          </div>
          <div
            class="slider_discount relative z-[9999] flex flex-col justify-center items-center shrink-0 w-[6.875rem] h-[6.875rem] p-md rounded-discountIcon bg-colorBasket ml-[12.352%] mt-[-1.592%]"
          >
            <p
              class="text-col_bg_btn text-center font-display text-[1.625rem] font-bold"
            >
              40%<br />OFF
            </p>
          </div>
          <div class="ellipses row mt-[-20.6779%] flex flex-col items-center">
            <div
              class="ellipse_1 w-[19.285rem] aspect-square m-0 p-0 ml-[38.45%] bg-colorEllipses rounded-[50%]"
            ></div>
            <div
              class="ellipse_2 w-[19.88rem] aspect-square m-0 p-0 mt-[-45%] mb-[16.48%] mr-[36.43%] bg-colorEllipses rounded-[50%]"
            ></div>
          </div>
          <div class="slider_images_content_img hidden">
            <img src="../assets/images/green jacket.png" alt="" />
          </div>
        </div>
        <div
          class="slider_product_img absolute top-0 left-[12.8125rem] right-[13.125rem] bottom-0"
        >
          <img
            class="w-full h-full"
            src="../assets/images/green jacket.png"
            alt=""
          />
        </div>

        <div
          class="slider_circles row relative z-[9999] grow-0 inline-flex items-center justify-between flex-col w-[1.3125rem] h-[5.9375rem] self-start mt-[24.49%]"
        >
          <div class="slider_hovered_circle w-[1.3125rem] aspect-square bg-colorCircleActive rounded-[50%]"></div>
          <div class="slider_circle  w-[1.125rem] aspect-square bg-colorCircle rounded-[50%]"></div>
          <div class="slider_circle w-[1.125rem] aspect-square bg-colorCircle rounded-[50%]"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
