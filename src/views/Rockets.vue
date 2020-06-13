<template>
  <div class="vehicles">
    <div v-if="rockets != null" class="container mt-5 mt-60">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2">
            <h4 class="title mb-4">Rockets</h4>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
      <div class="row">
        <a
          v-for="rocket in rockets"
          :key="rocket.rocket_id"
          @click="getRocket(rocket.rocket_id)"
          class="col-lg-12 col-md-6 pt-2"
        >
          <div class="media key-feature align-items-center p-3 rounded shadow">
            <div
              class="icon text-center rounded-circle h4 text-primary mr-3 mb-0"
            >
              <img
                alt="Rocket icon"
                src="https://img.icons8.com/windows/2x/rocket.png"
                style="height: 32px; width: 32px;"
              />
            </div>
            <div class="media-body">
              <h4 class="title text-dark mb-0">{{ rocket.rocket_name }}</h4>
            </div>
          </div>
        </a>
      </div>
      <!--end row-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Rockets",
  data() {
    return {
      rockets: null
    };
  },
  methods: {
    getRocket(val) {
      this.$router.push(`/${val}`);
      console.log(val);
    }
  },
  beforeMount() {
    axios.get("https://api.spacexdata.com/v3/rockets").then(res => {
      this.rockets = res.data;
    });
  }
};
</script>

<style scoped></style>
