<template>
  <nav-menu
    title="Tej Birring"
    :additional-info="[
      'www.tejbirring.com',
      '+44 (0) 7472 239 190',
      'tej.birring@gmail.com',
    ]"
    :nav-options="navOptions"
  />

  <div class="page">
    <main>
      <router-view />
    </main>

    <footer>
      <div class="holder">
        <p>
          <span class="c">©</span> {{ year }}
          <span class="text-uppercase">Tej Birring</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavMenu from "../components/navigation/nav-menu";
export default {
  components: { NavMenu },
  data() {
    return {
      navOptions: [
        {
          text: "Home",
          icon: "feather-home",
          path: "/",
        },
        {
          text: "Link Tree",
          icon: "feather-bookmark",
          path: "/link-tree",
        },
        // {
        //   text: "Blog",
        //   icon: "feather-file-text",
        //     path: "/"
        // },
        {
          text: "CV",
          icon: "feather-briefcase",
          path: "/cv",
        },
        {
          text: "Contact",
          icon: "feather-mail",
          path: "/get-in-touch",
        },
      ],
      year: new Date().getFullYear(),
    };
  },
};
</script>