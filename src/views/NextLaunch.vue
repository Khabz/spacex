<template>
  <div class="next-launch mt-5">
    <div v-if="nextLaunch != null" class="container">
      <h1 class="uppercase text-center mb-1">Next Launch</h1>
      <h3 class="text-center text-uppercase mb-2 text-danger">{{ nextLaunch.mission_name }}</h3>
      <vue-countdown-timer
        class="text-center mb-3"
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
      <div class="col-md-12 mt-5">
        <div class="row">
          <div class="col-md-4">
            <div
              class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
            >
              <div class="card-body p-0">
                <a class="mfp-image d-inline-block" title>
                  <img
                    :src="nextLaunch.links.mission_patch"
                    class="img-fluid"
                    :alt="nextLaunch.links.flickr_images.mission_patch"
                  />
                </a>
                <div class="content bg-white p-3">
                  <h5 class="mb-0">
                    <a href="page-work-detail.html" class="text-dark title">
                      {{
                      nextLaunch.mission_name
                      }}
                    </a>
                  </h5>
                  <h6 class="text-muted tag mb-0 small">Type: {{ nextLaunch.launch_year }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
              <p class="lead">{{ nextLaunch.details }}</p>
              <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Launch Site :</h6>
                    <p class="">
                      {{ nextLaunch.launch_site.site_name_long }}
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NextLaunch",
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