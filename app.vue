<script setup lang="ts">
const { isMobile } = useDevice();

const hiWrap = ref()
const cursor = ref()
const mouseX = ref()
const mouseY = ref()
const parallaxMouse = (event: any) => {
  if (hiWrap.value) {
    hiWrap.value.querySelectorAll("span").forEach((shift: any) => {
      const x = (window.innerWidth - event.pageX) / 90;
      const y = (window.innerHeight - event.pageY) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    hiWrap.value.querySelectorAll("img").forEach((shift: any) => {
      const x = (window.innerWidth - event.pageX) / 60;
      const y = (window.innerHeight - event.pageY) / 60;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    mouseY.value = (event.clientY / 16) - (42 / 16) + 'rem'
    mouseX.value = (event.clientX / 16) - (47 / 16) + 'rem'
  }
}

const parallaxDevice = (event: any) => {
  hiWrap.value.querySelectorAll("span").forEach((shift: any) => {
    const x = (window.innerWidth - event.beta * 20) / 90;
    const y = (window.innerHeight - event.gamma * 20) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });

  hiWrap.value.querySelectorAll("img").forEach((shift: any) => {
    const x = (window.innerWidth - event.beta * 20) / 60;
    const y = (window.innerHeight - event.gamma * 20) / 60;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const openPortfolioItem = ref()
const setOpenPortfolioItem = (id: number) => {
  if (openPortfolioItem.value == id) {
    openPortfolioItem.value = null
  }
  else {
    openPortfolioItem.value = id
  }
}

const reveal = ref(false)
const revealCount = ref(3)
const revealDone = ref(false)

onMounted(() => {

  if (isMobile) {
    window.addEventListener('deviceorientation', parallaxDevice, true)
  }
  else {
    document.addEventListener("mousemove", parallaxMouse)
  }

  const revealInt = setInterval(() => {
    revealCount.value--
    if (revealCount.value < 1) {
      clearInterval(revealInt)
      reveal.value = true

      setTimeout(() => {
        revealDone.value = true
      }, 200);
    }
  }, 1000)
})
</script>

<template>
  <div class="page-wrap">
    <main :class="{ done: revealDone }">
      <header>
        <h1>Kristin Meyer</h1>
        <nav>
          <ul>
            <li>
              <text-link href="#">LinkedIn</text-link>
            </li>
            <li>
              <text-link href="mailto:hi@kristin.codes">hi@kristin.codes</text-link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <div ref="hiWrap" class="hi-wrap">
          <span>Hi!</span>
          <img src="@/assets/images/KM_Hand_peace.png" alt="Hand Peace Sign">
        </div>
      </section>
      <footer>
        <div class="info">
          Full-Stack Web Developer<br>
          from Bremen
        </div>
        <div class="info hide-xs">
          <text-link href="#">Built with Nuxt</text-link>
        </div>
      </footer>
    </main>
    <aside :class="{ done: revealDone }">
      <portfolio-item title=" Kathmann Bau"
                      desc="Developed a dynamic website using Nuxt and a headless CMS for a construction company, showcasing their services and references with a modern design, responsive layout, and intuitive user interface."
                      :tags="['Nuxt', 'Wordpress', 'REST API', 'Responsive Webdesign', 'Animations']"
                      @click="setOpenPortfolioItem(1)" :open="openPortfolioItem == 1" href="https://kathmann-bau.de/">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="oui. studios"
                      desc="Built a responsive and dynamic website for my agency using Nuxt. The website showcases the agency's references and services with engaging animations and transitions. The site is easy to update with new references and case studies."
                      :tags="['Nuxt', 'Wordpress', 'REST API', 'Responsive Webdesign', 'Animations']"
                      @click="setOpenPortfolioItem(2)" :open="openPortfolioItem == 2" href="https://oui-studios.de/">
        <img src="@/assets/images/KM_portfolio_oui.jpg" alt="Website - oui. studios" />
      </portfolio-item>
      <portfolio-item title="OTC International"
                      desc="Developed a REST API and database for OTC, complete with data batch processing for optimal performance. This has enabled OTC to effortlessly upload large data catalogs via a user-friendly interface and seamlessly integrate this data into their website."
                      :tags="['Node', 'Express', 'MongoDB']" @click="setOpenPortfolioItem(3)"
                      :open="openPortfolioItem == 3" href="https://otc-international.eu/">
        <img src="@/assets/images/KM_Portfolio_otc.jpg" alt="Website - OTC International" />
      </portfolio-item>
      <portfolio-item :dev="true" title="DispoWorks"
                      desc="Designed and developed a web application and mobile app for scaffolding companies using Nuxt, Strapi and Ionic. The system simplifies crew and resource management, enabling real-time progress tracking and improved productivity."
                      :tags="['Nuxt', 'Strapi', 'Ionic']" @click="setOpenPortfolioItem(4)" :open="openPortfolioItem == 4">
        <img src="@/assets/images/KM_Portfolio_dispo.jpg" alt="Web App - DispoWorks" />
      </portfolio-item>
      <svg v-if="!isMobile" id="cursor" ref="cursor" xmlns="http://www.w3.org/2000/svg" xml:lang="en"
           xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" :style="{ top: mouseY, left: mouseX }">
        <title>Portfolio Item Hover Text</title>
        <defs>
          <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
        </defs>
        <rect width="100%" height="100%" fill="none" />
        <text>
          <textPath xlink:href="#textcircle" aria-label="Take a closer look." textLength="942">Take a closer look.&nbsp;
          </textPath>
        </text>

      </svg>
    </aside>
    <div class="reveal" :class="{ show: reveal }">
      <span class="reveal-count" :class="{ show: revealCount == 3 }">3</span>
      <span class="reveal-count" :class="{ show: revealCount == 2 }">2</span>
      <span class="reveal-count" :class="{ show: revealCount == 1 }">1</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-wrap {
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }

  main {
    padding: 4rem;
    height: 100vh;
    width: 100%;
    margin-right: -25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: all 0.5s ease-out;

    &.done {
      width: 75%;
      margin-right: 0;
      transition: all 1.35s cubic-bezier(.02, .01, .47, 1);
    }

    @media only screen and (max-width: 1200px) {
      margin-right: -33.33333333%;

      &.done {
        width: 66.666666%;
      }
    }

    @media only screen and (max-width: 900px) {
      margin-right: 0;
      width: 100%;
      padding: 2rem;
      height: auto;

      &.done {
        margin-right: 0;
        width: 100%;
      }
    }

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1.25rem;
        line-height: 1;
        margin: 0;
        letter-spacing: 0.035em;
      }

      nav {
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;

          li {
            line-height: 1;
          }
        }
      }
    }

    .hi-wrap {
      margin-left: 7vw;
      display: flex;
      margin-top: 10vh;
      margin-bottom: 10vh;

      span {
        font-weight: 700;
        font-size: 12vw;
        transition: all 0.5s ease-out;

        @media only screen and (max-width: 900px) {
          font-size: 20vw;
        }

        @media only screen and (max-width: 500px) {
          font-size: 25vw;
        }
      }

      img {
        width: 22vw;
        height: auto;
        position: relative;
        left: -9vw;

        transition: all 0.5s ease-out;

        @media only screen and (max-width: 900px) {
          width: 36vw;
          left: -12vw
        }

        @media only screen and (max-width: 500px) {
          width: 42vw;
          left: -14vw
        }
      }
    }

    footer {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      @media only screen and (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    }
  }

  aside {
    width: 25%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-flow: wrap;
    transition: all 0.5s ease-out;

    :deep(.portfolio-item) {
      position: relative;
      right: -100%;
      transition: right 1s cubic-bezier(.02, .01, .47, 1) 0.35s;
    }

    &.done {
      :deep(.portfolio-item) {
        right: 0;
      }
    }

    @media only screen and (max-width: 1200px) {
      gap: 1rem;
      width: 33.33333333%;
    }

    @media only screen and (max-width: 900px) {
      width: 100%;
      padding: 0 2rem 2rem;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      :deep(.portfolio-item) {
        right: 0;
      }
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      overflow: hidden;
    }

    svg#cursor {
      width: 100px;
      position: absolute;
      animation: rotation 7.5s infinite linear;
      pointer-events: none;
      opacity: 0;
      transition: top 0.35s, left 0.35s, opacity 0.35s;
      transition-timing-function: ease-out;
      mix-blend-mode: difference;
      z-index: 2;

      @media (hover: none) {
        display: none;
      }

      text {
        font-size: 4em;
        font-weight: 700;
        fill: rgb(255, 255, 255);
        text-transform: uppercase;
      }
    }

    &:hover {
      svg#cursor {
        opacity: 1;
      }
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(359deg);
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .hide-xs {
      display: none;
    }
  }

  .reveal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: $black;
    inset: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 1s cubic-bezier(.02, .01, .47, 1) 0.35s;

    span {
      position: absolute;
      color: $white;
      font-size: 10vh;
      font-weight: 700;
      opacity: 0;
      transition: opacity 0.25s cubic-bezier(.02, .01, .47, 1);

      &.show {
        opacity: 1;
      }
    }

    &.show {
      width: 0;

      span {
        opacity: 0;
      }
    }
  }
}
</style>