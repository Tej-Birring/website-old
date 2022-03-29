<template>
  <div class="main-content">

   <cmn-section-title title="The Best Thing Ever" icon="feather-grid"/>

    <blockquote>This is a block quote.</blockquote>
    <cite>Somebody Very Special</cite>

    <div class="feature">
      <span>Test</span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
        </p>
    </div>

    <p class="feature">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>


    <h1>Heading 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
    <h2>Heading 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
    <h4>Heading 4</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
    <h5>Heading 5</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
    <h6>Heading 6</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at malesuada libero. Fusce ornare sem velit, vel luctus augue volutpat sit amet. Proin in ante et dolor porttitor finibus. Curabitur quis nisl lorem. Maecenas tristique luctus tortor, at eleifend ex varius et. Sed venenatis suscipit hendrerit. Duis bibendum felis vel congue efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget ex id ante fermentum euismod vel ac lectus. Ut lacinia sapien mattis lectus lacinia finibus. Nam sodales maximus sem, et feugiat dolor feugiat non. Nam congue tellus vestibulum, cursus turpis eu, molestie sapien.
    </p>
<!--    <img src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div>
      <button @click="(ev) => { ev.target.blur() }">asds</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CmnSectionTitle from "../components/common/cmn-section-title";
export default {
  name: 'home',
    components: {CmnSectionTitle},
}
</script>
