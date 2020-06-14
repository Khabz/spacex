<template>
  <footer class="footer mt-5 bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
          <a href="/" class="logo-footer text-white">
            spaceXstats
          </a>
          <p class="mt-4">
            SpaceXStats is a all SpaceX stats web application created by
            <a class="text-danger" href="khabubundivhu.co.za"
              >Khabubu Ndivhuwo</a
            >
            using Vue Js framework and using the SpaceX API
          </p>
          <ul class="list-unstyled social-icon social mb-0 mt-4">
            <li class="list-inline-item">
              <a
                href="https://github.com/khabz"
                class="rounded"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="white"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="http://twitter.com/khabubundivhu"
                class="rounded"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="white"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter fea icon-sm fea-social"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.linkedin.com/in/khabubu-ndivhuwo-656282149/"
                class="rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="white"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin fea icon-sm fea-social"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
          </ul>
          <!--end icon-->
        </div>
        <!--end col-->

        <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 class="text-light footer-head">Navigation</h4>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <a href="/rockets" class="text-foot">
                <i class="mdi mdi-chevron-right mr-1"></i> SpaceX Rockets
              </a>
            </li>
            <li>
              <a href="/missions" class="text-foot">
                <i class="mdi mdi-chevron-right mr-1"></i> SpaceX Missions
              </a>
            </li>
            <li>
              <a href="/launches" class="text-foot">
                <i class="mdi mdi-chevron-right mr-1"></i> SpaceX Launches
              </a>
            </li>
            <li>
              <a href="/timeline" class="text-foot">
                <i class="mdi mdi-chevron-right mr-1"></i> Project Timeline
              </a>
            </li>
          </ul>
        </div>
        <!--end col-->

        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 class="text-light footer-head">Want to Work Me?</h4>
          <p class="mt-4">
            <a href="mailto:hello@khabubundivhu.co.za">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="white"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail fea icon-sm icons"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            Send me a mail
          </p>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style></style>
