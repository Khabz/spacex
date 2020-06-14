<template>
  <div class="missions">
    <div v-if="missions != null" class="container mt-5 mt-60">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2">
            <h4 class="title mb-4">Missions</h4>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
      <div class="row">
        <a
          v-for="mission in missions"
          :key="mission.mission_id"
          @click="getRocket(mission.mission_id)"
          class="col-lg-12 col-md-6 pt-2"
        >
          <div class="media key-feature align-items-center p-3 rounded shadow">
            <div class="icon text-center rounded-circle h4 text-primary mr-3 mb-0">
              <img
                alt="Astronaut icon"
                src="https://img.icons8.com/ios/2x/astronaut.png"
                lazy="loaded"
                style="height: 32px; width: 32px;"
              />
            </div>
            <div class="media-body">
              <h4 class="title text-dark mb-0">{{ mission.mission_name }}</h4>
            </div>
            <p class="small">Click to Read More</p>
          </div>
        </a>
      </div>
      <!--end row-->
    </div>
    <div v-else class="container">
        <div class="">
            <img class="loader" src="img/images/loader.gif" alt="" srcset="">
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Missions",
  data() {
    return {
      missions: null
    };
  },
  mounted() {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(res => {
        this.missions = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>