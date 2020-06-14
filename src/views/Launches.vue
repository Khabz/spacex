<template>
  <div class="launches">
    <div v-if="allLaunches != null" class="section overflow-hidden">
      <div class="container mt-5 mt-60">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="features text-center">
              <h1 class="title text-info">{{ allLaunches.length }}</h1>
              <div class="content mt-4">
                <h4 class="title-2 text-info">Total Launches</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 mt-5 mt-sm-0">
            <div class="features text-center">
              <h1 class="title text-success">{{ successfulLaunches.length }}</h1>
              <div class="content mt-4">
                <h4 class="title-2 text-success">Successful Launches</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 mt-5 mt-sm-0">
            <div class="features text-center">
              <h1 class="title text-danger">{{ unsuccessfulLaunches.length }}</h1>
              <div class="content mt-4">
                <h4 class="title-2 text-danger">Unsuccessful Launches</h4>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="form-group col-md-6">
            <input placeholder="Search Launch By Name" class="form-control" type="text">
          </div>
        <div class="form-group col-md-6" @change="onChangeLaunches($event)">
          <select  class="form-control">
            <option>Filter Launches</option>
            <option value="allLaunches">Total Launches</option>
            <option value="successfulLaunches">Successful Launches</option>
            <option value="unsuccessfulLaunches">Unsuccessful Launches</option>
          </select>
        </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Results</h4>
            </div>
          </div>
          <div class="row">
        <a
          v-for="(launch, index) in sortedLaunches"
          :key="index"
          @click="getMission(launch)"
          class="col-lg-6 col-md-6 pt-2"
        >
          <div class="media key-feature align-items-center p-3 rounded shadow">
            <div
              class="icon text-center rounded-circle h4 text-primary mr-3 mb-0"
            >
              <img width="32" height="32" src="https://image.flaticon.com/icons/svg/3062/3062299.svg">
            </div>
            <div class="media-body">
              <h4 class="title text-dark mb-0">{{ launch.mission_name }}</h4>
            </div>
            <p class="small">Click to Read More</p>
          </div>
        </a>
      </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class>
        <img class="loader" src="img/images/loader.gif" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Launches",
  data() {
    return {
      allLaunches: null,
      successfulLaunches: [],
      unsuccessfulLaunches: [],
      sortedLaunches: []
    };
  },
  methods: {
    getAllLaunches() {
      axios.get("https://api.spacexdata.com/v3/launches").then(res => {
        this.allLaunches = res.data;
      });
    },
    unSuccessfulLauches() {
      axios.get("https://api.spacexdata.com/v3/launches").then(res => {
        this.allLaunches = res.data;
        let allLaunches = this.allLaunches;
        allLaunches.forEach(item => {
          if (item.launch_success != false) {
            this.successfulLaunches.push(item);
          } else {
            this.unsuccessfulLaunches.push(item);
          }
        });
      });
    },
    onChangeLaunches(event) {
      this.sortedLaunches = [];
      let launches = event.target.value;
      if (launches == "allLaunches") {
        axios.get("https://api.spacexdata.com/v3/launches").then(res => {
          this.sortedLaunches = res.data;
        });
      }
      if (launches == "successfulLaunches") {
        axios.get("https://api.spacexdata.com/v3/launches").then(res => {
          let allLaunches = res.data;
          allLaunches.forEach(item => {
            if (item.launch_success != false) {
              this.sortedLaunches.push(item);
            }
          });
        });
      }
    }
  },
  mounted() {
    this.getAllLaunches();
    this.unSuccessfulLauches();
  }
};
</script>

<style scoped>
.overflow-hidden {
  padding-top: 50px;
}
</style>