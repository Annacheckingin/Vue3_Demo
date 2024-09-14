<!-- <template>
  <nav>
    <RouterLink to="/home">Go to Home</RouterLink><br>
    <RouterLink to="/index">Go to Index</RouterLink>
  </nav>
  <main>
    <RouterView/>
  </main>
</template> -->
<template>
  <div>
    <!-- 这里可以放置全局的布局结构、导航栏、页脚等 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>