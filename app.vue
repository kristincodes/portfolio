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

if (isMobile) {
  onMounted(() => {
    window.addEventListener('deviceorientation', parallaxDevice, true)
  })
}
else {
  onMounted(() => {
    document.addEventListener("mousemove", parallaxMouse)
  })
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
</script>

<template>
  <div class="page-wrap">
    <main>
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
    <aside>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']" @click="setOpenPortfolioItem(1)"
                      :open="openPortfolioItem == 1">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']" @click="setOpenPortfolioItem(2)"
                      :open="openPortfolioItem == 2">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']" @click="setOpenPortfolioItem(3)"
                      :open="openPortfolioItem == 3">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']" @click="setOpenPortfolioItem(4)"
                      :open="openPortfolioItem == 4">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
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
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: all 0.5s ease-out;

    @media only screen and (max-width: 1200px) {
      width: 66.666666%;
    }

    @media only screen and (max-width: 900px) {
      width: 100%;
      padding: 2rem;
      height: auto;
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

    @media only screen and (max-width: 1200px) {
      gap: 1rem;
      width: 33.33333333%
    }

    @media only screen and (max-width: 900px) {
      width: 100%;
      padding: 0 2rem 2rem;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media only screen and (max-width: 500px) {
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
}
</style>