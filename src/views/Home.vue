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
                    <h4 class="title mb-4">Next Launch</h4>
                    <vue-countdown-timer
                      @start_callback="startCallBack('event started')"
                      @end_callback="endCallBack('event ended')"
                      :start-time="startAt"
                      :end-time="endAt"
                      :interval="1000"
                      label-position="begin"
                      :day-txt="'days'"
                      :hour-txt="'hrs'"
                      :minutes-txt="'mins'"
                      :seconds-txt="'secs'"
                    >
                      <template slot="countdown" slot-scope="scope">
                        <div class="row">
                          <div class="col-3">
                            <h4>{{ scope.props.days }}</h4>
                            <span class="h5">{{ scope.props.dayTxt }}</span>
                          </div>
                          <div class="col-3">
                            <h4>{{ scope.props.hours }}</h4>
                            <span class="h5">{{ scope.props.hourTxt }}</span>
                          </div>
                          <div class="col-3">
                            <h4>{{ scope.props.minutes }}</h4>
                            <span class="h5">{{ scope.props.minutesTxt }}</span>
                          </div>
                          <div class="col-3">
                            <h4>{{ scope.props.seconds }}</h4>
                            <span class="h5">{{ scope.props.secondsTxt }}</span>
                          </div>
                        </div>
                      </template>
                    </vue-countdown-timer>
                    <p class="h5 mt-4">{{ nextLaunch.mission_name }}</p>
                    <p class="h6">
                      Flight #<span class="text-info">{{
                        nextLaunch.flight_number
                      }}</span>
                    </p>
                    <hr />
                    <p class="text-muted para-desc mb-0 mt-1">
                      {{ nextLaunch.details }}
                    </p>
                  </div>
                  <!--end row-->

                  <div class="mt-4">
                    <a href="/next-launch" class="btn btn-primary"
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
    axios.get("https://api.spacexdata.com/v3/launches/next").then(res => {
      this.nextLaunch = res.data;
      this.endAt = res.data.launch_date_unix;
    });
  }
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
