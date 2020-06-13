<template>
  <div class="rocket">
    <section
      class="bg-profile d-table w-100"
      style="background: url('img/images/bg.jpg') center center;"
    >
      <div v-if="rocket != null" class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card public-profile border-0 rounded shadow" style="z-index: 1;">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-2 col-md-3 text-md-left text-center">
                    <img
                      :src="rocket.flickr_images[0]"
                      class="avatar avatar-large rounded-circle shadow d-block"
                      alt
                    />
                  </div>
                  <!--end col-->

                  <div class="col-lg-10 col-md-9">
                    <div class="row align-items-end">
                      <div class="col-md-12 text-md-left text-center mt-4 mt-sm-0">
                        <h3 class="title mb-0">{{ rocket.rocket_name }}</h3>
                        <small class="text-muted h6 mr-2">{{ rocket.description }}</small>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--ed container-->
    </section>
    <section v-if="rocket != null" class="section profile-section">
      <div class="container mt-lg-3">
        <div class="row">
          <div class="col-lg-12 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="border-bottom pb-4">
              <div class="row">
                <div class="col-lg-6 mt-4">
                  <h5>Overview</h5>
                  <div class="mt-4">
                    <div class="media">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Status :</h6>
                        <p v-if="rocket.active != false" class="text-muted">Active</p>
                        <p v-else class="text-muted">Inactive</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Cost Per Launch :</h6>
                        <p class="text-muted">US$ {{ rocket.cost_per_launch }}</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Diameter :</h6>
                        <p class="text-muted">{{ rocket.diameter.meters }} Meters</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Height :</h6>
                        <p class="text-muted">{{ rocket.height.meters }} Meters</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Boosters :</h6>
                        <p class="text-muted">{{ rocket.boosters }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-6 mt-4 pt-2 pt-sm-0">
                  <h5>Experience :</h5>

                  <div class="media key-feature align-items-center p-3 rounded shadow mt-4">
                    <img src="images/job/Circleci.svg" class="avatar avatar-ex-sm" alt />
                    <div class="media-body content ml-3">
                      <h4 class="title mb-0">Senior Web Developer</h4>
                      <p class="text-muted mb-0">3 Years Experience</p>
                      <p class="text-muted mb-0">
                        <a href="javascript:void(0)" class="text-primary">CircleCi</a> @London, UK
                      </p>
                    </div>
                  </div>

                  <div class="media key-feature align-items-center p-3 rounded shadow mt-4">
                    <img src="images/job/Codepen.svg" class="avatar avatar-ex-sm" alt />
                    <div class="media-body content ml-3">
                      <h4 class="title mb-0">Web Designer</h4>
                      <p class="text-muted mb-0">2 Years Experience</p>
                      <p class="text-muted mb-0">
                        <a href="javascript:void(0)" class="text-primary">Codepen</a> @Washington D.C, USA
                      </p>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>

            <h5 class="mt-4 mb-0"></h5>
            <div class="row">
              <div v-for="(image, index) in rocket.flickr_images" :key="index" class="col-lg-6 mt-4 pt-2">
                <div class="card blog rounded border-0 shadow">
                  <div class="position-relative">
                    <img :src="image" class="card-img-top rounded-top" alt="..." />
                    <div class="overlay rounded-top bg-dark"></div>
                  </div>
                </div>
              </div>
              <!--end col-->
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Rocket",
  data() {
    return {
      errors: [],
      rocket: null
    };
  },
  methods: {
    getRocketInfo() {
      let id = this.$route.params.id;
      axios.get(`https://api.spacexdata.com/v3/rockets/${id}`).then(res => {
        this.rocket = res.data;
      });
    }
  },
  beforeMount() {
    this.getRocketInfo();
  }
};
</script>

<style scoped>
.avatar {
  height: 150px;
  width: 150px;
}
.profile-section {
  margin-top: 100px;
}
</style>
