<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
  import SurveyResult from './SurveyResult.vue';
  export default {
    components: {
      SurveyResult,
    },
    data() {
      return {
        results: [],
        isLoading: false
      }
    },
    mounted() {
      this.loadExperiences();
    },
    methods: {
      loadExperiences() {
        this.isLoading = true;
        fetch('https://vue-http-demo-3c99d-default-rtdb.firebaseio.com/surveys.json').then(
            res => {
              if (res.ok) {
                return  res.json();
              }
            }).then(data => {
              this.isLoading = false;
              const result = [];
              for (const id in data){
                result.push({
                  id: id,
                  name: data[id].name,
                  rating: data[id].rating,
                });
              }
              this.results = result;
        });
      }
    }
  };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>