<script setup lang="ts">
const hiWrap = ref()
const parallaxMouse = (event: any) => {
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

document.addEventListener("mousemove", parallaxMouse)
window.addEventListener('deviceorientation', parallaxDevice, true)
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
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
      <portfolio-item title="Kathmann Bau" :tags="['Nuxt', 'Wordpress']">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau" />
      </portfolio-item>
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
  }

  @media only screen and (max-width: 500px) {
    .hide-xs {
      display: none;
    }
  }
}
</style>