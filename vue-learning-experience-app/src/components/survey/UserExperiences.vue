<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found.<br>
        Start adding some survey experiences first.
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
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
        isLoading: false,
        error: null
      }
    },
    mounted() {
      this.loadExperiences();
    },
    methods: {
      loadExperiences() {
        this.isLoading = true;
        this.error = null;
        fetch('https://vue-http-demo-3c99d-default-rtdb.firebaseio.com/surveys.json')
            .then(res => {
              if (res.ok) {
                return  res.json();
              } else {
                this.error = 'Can not save data - Please try again later';
              }
            })
            .then(data => {
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
            })
            .catch(reason => {
              console.log(reason);
              this.isLoading = false;
              this.error = 'Failed to fetch data - Please try again later';
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