<template>
  <div>
    <header>
      <h1 class="title">▲</h1>
    </header>
    <ul class="menu">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
    <main class="container">
      <nuxt/>
    </main>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", 游ゴシック体, "Yu Gothic", YuGothic,
    "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    sans-serif;
  font-size: 16px;
}
h1,
h2,
h3 {
  font-weight: normal;
}
.title {
  color: #35495e;
  margin: 100px 0 30px;
  text-align: center;
}
.menu {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.menu li {
  margin: 0 16px;
  list-style: none;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>

