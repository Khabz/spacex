<template>
  <div class="dragons mt-4">
    <div v-if="dragons != null" class="container">
      <h1 class="uppercase text-center mb-5">Dragons</h1>
      <div v-for="dragon in dragons" :key="dragon.id" class="col-md-12 mb-5">
        <div class="row">
          <div class="dragon col-md-6">
            <div
              class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded"
            >
              <div class="card-body p-0">
                <a class="mfp-image d-inline-block" title>
                  <img
                    :src="dragon.flickr_images[2]"
                    class="img-fluid"
                    alt="work-image"
                  />
                </a>
                <div class="content bg-white p-3">
                  <h5 class="mb-0">
                    <a href="page-work-detail.html" class="text-dark title">{{
                      dragon.name
                    }}</a>
                  </h5>
                  <h6 class="text-muted tag mb-0 small">
                    Type: {{ dragon.type }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h5 class="text-center">{{ dragon.name }}</h5>
            <p class="small">{{ dragon.description }}</p>
            <div class="row">
              <div class="col-md-6">
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Status :</h6>
                    <p v-if="dragon.active != false" class="text-muted">
                      Active
                    </p>
                    <p v-else class="text-muted">Inactive</p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">First Flight :</h6>
                    <p class="text-muted">{{ dragon.first_flight }}</p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Orbit Duration (Years) :</h6>
                    <p class="text-muted">{{ dragon.orbit_duration_yr }}</p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Crew Capacity :</h6>
                    <p class="text-muted">{{ dragon.crew_capacity }}</p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Dry Mass :</h6>
                    <p class="text-muted">
                      {{ dragon.dry_mass_kg }}kg/{{ dragon.dry_mass_lb }}lb
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6 class="text-primary mb-0">Diameter :</h6>
                    <p class="text-muted">
                      {{ dragon.diameter.feet }}feet/{{
                        dragon.diameter.meters
                      }}meters
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
  name: "Dragons",
  data() {
    return {
      dragons: null
    };
  },
  mounted() {
    axios("https://api.spacexdata.com/v3/dragons").then(res => {
      this.dragons = res.data;
    });
  }
};
</script>
