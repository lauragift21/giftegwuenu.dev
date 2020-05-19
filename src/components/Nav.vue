<template>
  <header class="flex justify-between sm:pt-5">
    <g-link to="/">
      <g-image class="logo" src="../assets/img/logo.png" alt="logo" />
    </g-link>
    <!-- toggle button -->
    <input type="checkbox" id="toggle" />
    <label class="toggle-btn toggle-btn__cross" for="toggle">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>

    <nav class="nav navEffects sm:flex sm:flex-col sm:-mx-10 md:flex md:flex-col md:-mx-10">
      <label for="menuToggle"></label>
      <div class="nav-content">
        <ul>
          <li>
            <g-link
              class="nav-item mr-12 sm:mr-2 sm:-pr-3 sm:mb-3 md:mb-4 font-black text-xl sm:text-base link"
              to="/#about"
            >About</g-link>
          </li>
          <li>
            <g-link
              class="nav-item mr-12 sm:mr-2 sm:-pr-3 sm:mb-3 md:mb-4 font-black text-xl sm:text-base link"
              to="/speaking/"
            >Speaking</g-link>
          </li>
          <li>
            <g-link
              class="nav-item mr-12 sm:mr-2 sm:-pr-3 sm:mb-3 md:mb-4 font-black text-xl sm:text-base link"
              to="/writing/"
            >Writing</g-link>
          </li>
          <li>
            <g-link
              class="nav-item mr-12 sm:mr-2 sm:-pr-3 sm:mb-3 md:mb-4 font-black text-xl sm:text-base link"
              to="/uses/"
            >Uses</g-link>
          </li>
          <li>
            <g-link
              class="nav-item mr-6 sm:mr-2 sm:-pr-3 sm:mb-3 md:mb-4 font-black text-xl sm:text-base link"
              to="/#contact"
            >Contact</g-link>
          </li>
          <li tabindex="0">
        <toggle-theme />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import ToggleTheme from "./ToogleTheme";
export default {
  components: {
    ToggleTheme
  }
};
</script>

<style lang="scss" scoped>
header {
  margin: 0 auto;
}

.logo {
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: var(--logo);
  background-size: 60px;
  height: 80px;
  padding-left: 100px;
}

input {
  display: none;
}

ul {
  list-style: none;
  display: flex;
}

@media screen and (max-width: 900px) {
  $th_pink: #e84a5f;
  $th_dark: #2a363b;

  header {
    nav {
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      width: 110vw;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;

      ul {
        list-style-type: none;
        display: inline;
        padding: 0;
        margin: 0;
        position: absolute;
        left: 50%;
        top: 170px;
        transition: all 0.3s ease-in-out;
        transform: translateX(-50%);

        li {
          transform: translateY(50px);
          opacity: 0;

          a {
            display: block;
            font-size: 2em;
            text-decoration: none;
            padding: 10px 0;
            text-align: center;
            color: #fff;
            font-weight: bold;
            transition: all 0.2s ease-in-out;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

            &:hover {
              color: $th_pink;
            }
          }
        }
      }
    }
  }

  .toggle-btn {
    display: block;
    position: absolute;
    z-index: 10;
    right: 40px;
    top: 45px;
    cursor: pointer;

    .bar {
      width: 30px;
      height: 2px;
      margin: 7px auto;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 1px 1px rgba(134, 132, 132, 0.3);

      &:nth-child(2) {
        width: 20px;
      }
    }
  }

  #toggle:checked {
    & ~ nav {
      opacity: 1;
      visibility: visible;
      z-index: 1;

      ul {
        top: 100px;

        li {
          transform: translateY(0px);
          opacity: 1;

          @for $i from 1 through 4 {
            $t: $i * 0.1;
            &:nth-child(#{$i}) {
              transition: all 0.3s cubic-bezier(0.6, 0, 0.8, 1.5) #{$t}s;
            }
          }
        }
      }
    }

    & + label.toggle-btn {
      .bar {
        background-color: var(--pink-color);

        &:nth-child(2) {
          transform: translateX(50px);
          opacity: 0;
        }

        &:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        &:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
}
</style>