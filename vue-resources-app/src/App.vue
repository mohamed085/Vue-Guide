<template>
  <TheHeader
      title="RememberMe"
  ></TheHeader>
  <StoredResources
      :resources="storedResources"
  ></StoredResources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources";
import TheHeader from "./components/layouts/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },      ]
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>