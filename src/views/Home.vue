<template>
  <div class="home mb-5">
    <div v-if="nextLaunch != null" class="container-fluid mt-5 mt-60">
      <div
        class="rounded py-5"
        style="background: url('img/images/home-hero.jpg') center center;"
      >
        <div class="container py-md-5 py-3">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-12 offset-lg-6 offset-md-5">
              <div class="card border-0">
                <div class="card-body p-md-5 p-4 bg-white rounded">
                  <div class="section-title">
                    <h4 class="title mb-4">Latest Launch</h4>
                    <p class="lead">{{ nextLaunch.mission_name }}</p>
                    <hr />
                    <p class="text-muted para-desc mb-0 mt-1">
                      {{ nextLaunch.details }}
                    </p>
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-12 mt-4">
                      <div
                        v-if="nextLaunch.launch_success != true"
                        class="media align-items-center"
                      >
                        <div
                          class="icon text-center rounded-circle h4 text-primary mr-2 mb-0"
                        >
                          <img
                            alt="Cancel icon"
                            src="https://img.icons8.com/bubbles/2x/cancel.png"
                            lazy="loaded"
                            style="height: 64px; width: 64px;"
                          />
                        </div>
                        <div class="media-body">
                          <h6 class="title text-dark mb-0">
                            Launch Was Unsuccessful
                          </h6>
                        </div>
                      </div>
                      <div v-else class="media align-items-center">
                        <div
                          class="icon text-center rounded-circle h4 text-primary mr-2 mb-0"
                        >
                          <img
                            alt="Launch Rocket icon"
                            src="https://img.icons8.com/cotton/2x/launch-rocket.png"
                            lazy="loaded"
                            style="height: 54px; width: 54px;"
                          />
                        </div>
                        <div class="media-body">
                          <h6 class="title text-dark mb-0">
                            Launch Was Successful
                          </h6>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->

                  <div class="mt-4">
                    <a href="javascript:void(0)" class="btn btn-primary"
                      >More Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-right fea icon-sm"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline></svg
                    ></a>
                  </div>
                </div>
                <!--end div-->
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end container-->
      </div>
      <!--end div-->
    </div>
    <div v-else class="container">
      <div class="">
        <img class="loader" src="img/images/loader.gif" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import constants from "../config/constants";
export default {
  name: "Home",
  data() {
    return {
      nextLaunch: null,
      startAt: Date.now(),
      endAt: null
    };
  },
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    }
  },
  mounted() {
    axios.get(`${constants.api_url}/launches/latest`).then(res => {
      this.nextLaunch = res.data;
      this.endAt = new Date(res.data.launch_date_unix);
    });
  }
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
