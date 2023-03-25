<script setup lang="ts">
useServerSeoMeta({
  title: 'Kristin Meyer – Full-Stack Web Developer',
  ogTitle: 'Kristin Meyer – Full-Stack Web Developer',
  description: 'Experienced Full-Stack Developer with 8+ years of experience in web development. I help companies elevate their online presence and drive growth through dynamic, user-friendly web applications.',
  ogDescription: 'Experienced Full-Stack Developer with 8+ years of experience in web development. I help companies elevate their online presence and drive growth through dynamic, user-friendly web applications.',
  ogImage: 'https://kristin.codes/KM_OG-Image.jpg',
  twitterCard: 'summary_large_image',
})

const { isDesktop } = useDevice();

// ----------------------------------------- custom cursor & hi movement
const hiWrap = ref()
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

    if (window.innerWidth < 2000) {
      mouseY.value = (event.clientY / 16) - (42 / 16) + 'rem'
      mouseX.value = (event.clientX / 16) - (47 / 16) + 'rem'
    }
    else {
      mouseY.value = (event.clientY / 24) - (42 / 24) + 'rem'
      mouseX.value = (event.clientX / 24) - (47 / 24) + 'rem'
    }
  }
}

// ----------------------------------------- portfolio items
const openPortfolioItem = ref()
const setOpenPortfolioItem = (id: number) => {
  if (openPortfolioItem.value == id) {
    openPortfolioItem.value = null
  }
  else {
    openPortfolioItem.value = id
  }
}

// ----------------------------------------- page reveal
const reveal = ref(false)
const revealCount = ref(3)
const revealDone = ref(false)

// ----------------------------------------- init
onMounted(() => {
  if (isDesktop) {
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
  }, 700)
})

const ie = ref(false)

if (process.client) {
  const isIE = () => {
    var userAgent = navigator.userAgent;
    return /MSIE|Trident/.test(userAgent);
  }

  ie.value = isIE()

  console.log('Hi!✌🏻')
}
</script>

<template>
  <div v-if="!ie" class="page-wrap">
    <main :class="{ done: revealDone }">
      <header>
        <h1>Kristin Meyer</h1>
        <nav>
          <ul>
            <li>
              <text-link href="https://www.linkedin.com/in/kristin-codes/" blank>LinkedIn</text-link>
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
          <img src="~/assets/images/KM_Hand_peace.png" alt="Hand Peace Sign">
        </div>
      </section>
      <footer>
        <div class="info desc">
          I'm a Full-Stack Web Developer from Bremen with 8+ years of experience. I create dynamic and user-friendly web
          applications that help companies boost their online presence and drive growth.
        </div>
        <div class="info tech">
          <text-link href="https://github.com/kristincodes" blank>Built with Nuxt</text-link>
        </div>
      </footer>
    </main>
    <aside :class="{ done: revealDone }">
      <portfolio-item class="first" title=" Kathmann Bau"
                      desc="Developed a dynamic website using Nuxt and a headless CMS for a construction company, showcasing their services and references with a modern design, responsive layout, and intuitive user interface."
                      :tags="['Nuxt', 'Wordpress', 'REST API', 'Responsive Webdesign', 'Animations']"
                      @click="setOpenPortfolioItem(1)" :open="openPortfolioItem == 1" href="https://kathmann-bau.de/">
        <img src="~/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="oui. studios"
                      desc="Built a responsive and dynamic website for my agency using Nuxt. The website showcases the agency's references and services with engaging animations and transitions. The site is easy to update with new references and case studies."
                      :tags="['Nuxt', 'Wordpress', 'REST API', 'Responsive Webdesign', 'Animations']"
                      @click="setOpenPortfolioItem(2)" :open="openPortfolioItem == 2" href="https://oui-studios.de/">
        <img src="~/assets/images/KM_portfolio_oui.jpg" alt="Website - oui. studios" />
      </portfolio-item>
      <portfolio-item title="OTC International"
                      desc="Developed a REST API and database for OTC, complete with data batch processing for optimal performance. This has enabled OTC to effortlessly upload large data catalogs via a user-friendly interface and seamlessly integrate this data into their website."
                      :tags="['Node', 'Express', 'MongoDB']" @click="setOpenPortfolioItem(3)"
                      :open="openPortfolioItem == 3" href="https://otc-international.eu/">
        <img src="~/assets/images/KM_Portfolio_otc.jpg" alt="Website - OTC International" />
      </portfolio-item>
      <portfolio-item class="last" :dev="true" title="DispoWorks"
                      desc="Designed and developed a web application and mobile app for scaffolding companies using Nuxt, Strapi and Ionic. The system simplifies crew and resource management, enabling real-time progress tracking and improved productivity."
                      :tags="['Nuxt', 'Strapi', 'Ionic']" @click="setOpenPortfolioItem(4)" :open="openPortfolioItem == 4">
        <img src="~/assets/images/KM_Portfolio_dispo.jpg" alt="Web App - DispoWorks" />
      </portfolio-item>
      <div class="arrow-up">
        <img src="~/assets/images/KM_arrow_up_white.svg" alt="Arrow Up" />
      </div>
      <div class="arrow-down">
        <img src="~/assets/images/KM_arrow_down_white.svg" alt="Arrow Down" />
      </div>
      <svg v-if="isDesktop" id="cursor" xmlns="http://www.w3.org/2000/svg" xml:lang="en"
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
  <div v-else class="ie">
    Bold browser choice.
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
    margin-right: -33.33333333%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: all 0.5s ease-out;

    &.done {
      width: 66.666666666%;
      margin-right: 0;
      transition: all 1.35s cubic-bezier(.02, .01, .47, 1);
    }

    @media only screen and (max-width: 1200px) {
      margin-right: -40%;
      padding: 2rem;

      &.done {
        width: 60%;
        margin-right: 0;
      }
    }

    @media only screen and (max-width: 900px) {
      height: auto;
      width: 100%;
      margin-right: 0;

      &.done {
        width: 100%;
        margin-right: 0;
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
        transition: all 0.5s cubic-bezier(.02, .01, .47, 1);
        line-height: 1.2;

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
        opacity: 0;
        transition: all 0.5s cubic-bezier(.02, .01, .47, 1);

        &.loaded {
          opacity: 1;
        }

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
      gap: 4rem;

      @media only screen and (max-width: 1200px) {
        max-width: calc(60vw - 4rem);
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      @media only screen and (max-width: 900px) {
        max-width: initial;
      }

      .desc {
        max-width: 36rem;

        @media only screen and (max-width: 900px) {
          max-width: 80%;
        }

        @media only screen and (max-width: 500px) {
          max-width: initial;
        }
      }

      .tech {
        white-space: nowrap;
      }
    }
  }

  aside {
    width: 33.33333333%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-flow: wrap;
    transition: all 0.5s cubic-bezier(.02, .01, .47, 1);

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
      gap: 2rem;
      width: 40%;
    }

    @media only screen and (max-width: 900px) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      right: 0;
      height: auto;
      overflow: hidden;

      :deep(.portfolio-item) {
        right: 0;
      }
    }

    @media only screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      padding: 0 2rem 2rem;
    }

    @media only screen and (max-width: 500px) {
      padding: 0;
    }

    .portfolio-item.first,
    .portfolio-item.last {
      z-index: 2;
    }

    .arrow-down,
    .arrow-up {
      position: fixed;
      right: 4rem;
      display: flex;
      justify-content: center;
      z-index: 1;
      mix-blend-mode: difference;

      @media only screen and (max-width: 900px) {
        display: none;
      }

      img {
        width: 1rem;
        height: auto;
      }
    }

    .arrow-up {
      top: 4rem;
    }

    .arrow-down {
      bottom: 4rem;
    }

    svg#cursor {
      width: 6.25rem;
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
        font-size: 1em;
        font-weight: 700;
        fill: rgb(255, 255, 255);
        text-transform: uppercase;
        transition: font-size 0.5s;
        letter-spacing: 0.15em;
      }
    }

    &:hover {
      svg#cursor {
        opacity: 1;

        text {
          font-size: 4em;

          @media only screen and (min-width: 2000px) {
            font-size: 2rem;
          }
        }
      }
    }

    @keyframes rotation {
      from {
        transform: rotate(359deg);
      }

      to {
        transform: rotate(0deg);
      }
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

.ie {
  padding: 50px;
  text-align: center;
  font-size: 20px;
}
</style>