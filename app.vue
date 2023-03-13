<script setup lang="ts">

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
            <li>
              <text-link href="#">DE</text-link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <div class="hi-wrap">
          <span>Hi!</span>
          <img src="@/assets/images/KM_Hand_peace.png" alt="Hand Peace Sign">
        </div>
      </section>
      <footer>
        <div class="info">
          Full-Stack Web Developer<br>
          from Bremen
        </div>
        <div class="info">
          <text-link href="#">Built with Nuxt</text-link>
        </div>
      </footer>
    </main>
    <aside>
      <div class="block">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau">
      </div>
      <div class="block">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau">
      </div>
      <div class="block">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau">
      </div>
      <div class="block">
        <img src="@/assets/images/KM_Portfolio_Kath.jpg" alt="Website - Kathmann Bau">
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.page-wrap {
  display: flex;

  main {
    padding: 4rem;
    height: 100vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1.25rem;
        line-height: 1;
        margin: 0;
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
      margin-left: 5vw;
      display: flex;

      span {
        font-weight: 700;
        font-size: 11rem;
      }

      img {
        width: 22rem;
        height: auto;
        position: relative;
        left: -9rem;
      }
    }

    footer {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
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

    .block {
      img {
        width: 100%;
      }
    }
  }
}
</style>