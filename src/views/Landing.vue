<template>
  <div>
    <!-- Hero -->
    <div class="hero bg-white">
      <div class="content content-full text-center">
        <b-row class="justify-content-center">
          <b-col lg="8" xl="6">
            <i class="fa fa-2x fa-circle-notch text-primary"></i>
            <h1 class="font-w700 mt-3 mb-2">
              Nity<span class="font-w300">Shop app</span>
            </h1>
            <p class="font-size-lg font-w500 text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta, augue vitae vulputate interdum, augue mi scelerisque magna,
              posuere varius sapien tellus quis lectus. Ut non aliquet quam.
              Donec vitae tincidunt mi, sit amet dignissim sem.
            </p>
          </b-col>
        </b-row>

        <!-- Check that the SDK client is not currently loading before accessing is methods -->
        <div v-if="!$auth.loading">
          <!-- show login when not authenticated -->
          <b-button
            size="sm"
            variant="alt-primary"
            class="px-4 py-2 m-2"
            v-click-ripple
            v-if="!$auth.isAuthenticated"
            @click="login"
          >
            Iniciar sesión
            <i class="fa fa-fw fa-arrow-right ml-1"></i>
          </b-button>
          <!-- show logout when authenticated -->
          <b-button
            size="sm"
            variant="alt-primary"
            class="px-4 py-2 m-2"
            to="/backend/dashboard"
            v-click-ripple
            v-if="$auth.isAuthenticated"
          >
            Entrar al panel
            <i class="fa fa-fw fa-arrow-right ml-1"></i>
          </b-button>
        </div>
      </div>
    </div>
    <!-- END Hero -->
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    login() {
      this.$auth.loginWithRedirect({
        redirect_uri: "http://localhost:8080/backend",
      });
    },
  },
};
</script>
