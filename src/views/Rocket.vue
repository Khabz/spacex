<template>
  <div class="rocket">
    <section
      class="bg-profile d-table w-100"
      style="background: url('img/images/bg.jpg') center center;"
    >
      <div v-if="rocket != null" class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="card public-profile border-0 rounded shadow"
              style="z-index: 1;"
            >
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
                      <div
                        class="col-md-12 text-md-left text-center mt-4 mt-sm-0"
                      >
                        <h3 class="title mb-0">{{ rocket.rocket_name }}</h3>
                        <small class="text-muted h6 mr-2">
                          {{ rocket.description }}
                        </small>
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
                <div class="col-lg-4 mt-4">
                  <h5>Overview</h5>
                  <div class="mt-4">
                    <div class="media">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Status :</h6>
                        <p v-if="rocket.active != false" class="text-muted">
                          Active
                        </p>
                        <p v-else class="text-muted">Inactive</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Cost Per Launch :</h6>
                        <p class="text-muted">
                          US$ {{ rocket.cost_per_launch }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Diameter :</h6>
                        <p class="text-muted">
                          {{ rocket.diameter.meters }} Meters
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Height :</h6>
                        <p class="text-muted">
                          {{ rocket.height.meters }} Meters
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Mass :</h6>
                        <p class="text-muted">
                          {{ rocket.mass.kg }}kg / {{ rocket.mass.lb }}lb
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Landing Legs :</h6>
                        <p class="text-muted">
                          Number: {{ rocket.landing_legs.number }}
                        </p>
                        <p class="text-muted">
                          Material: {{ rocket.landing_legs.material }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">
                          Success Rate Percentage :
                        </h6>
                        <p class="text-muted">{{ rocket.success_rate_pct }}</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Boosters :</h6>
                        <p class="text-muted">{{ rocket.boosters }}</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">First Flight :</h6>
                        <p class="text-muted">{{ rocket.first_flight }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 mt-4">
                  <h5>Engine</h5>
                  <div class="mt-4">
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Number Of Engines :</h6>
                        <p class="text-muted">{{ rocket.engines.number }}</p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Engine Loss Max :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.engine_loss_max }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Specific Impulse :</h6>
                        <p class="text-muted">
                          Sea Level :{{ rocket.engines.isp.sea_level }}
                        </p>
                        <p class="text-muted">
                          Vacuum :{{ rocket.engines.isp.vacuum }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Propellant 1 :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.propellant_1 }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Propellant 2 :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.propellant_2 }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Thrust Sea Level :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.thrust_sea_level.kN }}kN/{{
                            rocket.engines.thrust_sea_level.lbf
                          }}lbf
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Thrust to_Weight :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.thrust_to_weight }}
                        </p>
                      </div>
                    </div>
                    <div class="media mt-3">
                      <div class="media-body">
                        <h6 class="text-primary mb-0">Thrust Vacuum :</h6>
                        <p class="text-muted">
                          {{ rocket.engines.thrust_vacuum.kN }}kN/{{
                            rocket.engines.thrust_vacuum.lbf
                          }}lbf
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-lg-4 col-md-5 col-12">
                  <div class="sidebar sticky-bar p-4 rounded shadow">
                    <div class="widget">
                      <h5 class="widget-title">Stages (<span class="text-danger">{{ rocket.stages }}</span>) :</h5>
                      <div class="progress-box mt-4">
                        <h6 class="title lead"><u>First Stage</u></h6>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Burn Time :</h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.burn_time_sec }} seconds
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Cores :</h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.cores }}
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Engines :</h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.engines }}
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Fuel Amount :</h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.fuel_amount_tons }} tons
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">
                              Thrust Sea Level :
                            </h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.thrust_sea_level.kN }}kN/{{
                                rocket.first_stage.thrust_sea_level.lbf
                              }}lbf
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Thrust Vacuum :</h6>
                            <p class="text-muted">
                              {{ rocket.first_stage.thrust_vacuum.kN }}kN/{{
                                rocket.first_stage.thrust_vacuum.lbf
                              }}lbf
                            </p>
                          </div>
                        </div>
                      </div>
                      <!--end process box-->
                    </div>
                    <div class="widget">
                      <div class="progress-box mt-4">
                        <h6 class="title lead"><u>Second Stage</u></h6>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Burn Time :</h6>
                            <p class="text-muted">
                              {{ rocket.second_stage.burn_time_sec }} seconds
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Cores :</h6>
                            <p class="text-muted">
                              {{ rocket.second_stage.cores }}
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Engines :</h6>
                            <p class="text-muted">
                              {{ rocket.second_stage.engines }}
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">Fuel Amount :</h6>
                            <p class="text-muted">
                              {{ rocket.second_stage.fuel_amount_tons }} tons
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">
                              Thrust :
                            </h6>
                            <p class="text-muted">
                              {{ rocket.second_stage.thrust.kN }}kN/{{
                                rocket.second_stage.thrust.lbf
                              }}lbf
                            </p>
                          </div>
                        </div>
                        <div class="media mt-3">
                          <div class="media-body">
                            <h6 class="text-primary mb-0">reusable :</h6>
                            <p v-if="rocket.second_stage.reusable != false" class="text-muted">
                              Yes
                            </p>
                            <p v-else class="text-muted">
                              No
                            </p>
                          </div>
                        </div>
                      </div>
                      <!--end process box-->
                    </div>
                  </div>
                </div>
              </div>
              <!--end row-->
            </div>

            <h5 class="mt-4 mb-0"></h5>
            <div class="row">
              <div
                v-for="(image, index) in rocket.flickr_images"
                :key="index"
                class="col-lg-3 mt-4 pt-2"
              >
                <div class="card blog rounded border-0 shadow">
                  <div class="position-relative">
                    <img
                      :src="image"
                      class="card-img-top rounded-top"
                      alt="..."
                    />
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
