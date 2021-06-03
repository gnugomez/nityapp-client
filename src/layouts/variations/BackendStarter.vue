<template>
  <base-layout :layout-classes="layoutClasses">
    <!-- Side Overlay Content -->
    <!-- Using the available v-slot, we can override the default Side Overlay content from layouts/partials/SideOvelay.vue -->
    <template #side-overlay>
      <!-- Side Header -->
      <div class="content-header border-bottom">
        <!-- User Avatar -->
        <a class="mr-1" href="javascript:void(0)">
          <img
            class="img-avatar img-avatar32"
            src="../../assets/img/avatar10.png"
            alt="Avatar"
          />
        </a>
        <!-- END User Avatar -->

        <!-- User Info -->
        <div class="ml-2">
          <a class="text-dark font-w600" href="javascript:void(0)">{{
            $auth.user.name
          }}</a>
        </div>
        <!-- END User Info -->

        <!-- Close Side Overlay -->
        <base-layout-modifier
          action="sideOverlayClose"
          variant="alt-danger"
          size="sm"
          class="ml-auto"
        >
          <i class="fa fa-fw fa-times text-danger"></i>
        </base-layout-modifier>
        <!-- END Close Side Overlay -->
      </div>
      <!-- END Side Header -->

      <!-- Side Content -->
      <div class="content-side">
        <p>No tienes tareas pendientes.</p>
      </div>
    </template>
    <!-- END Side Overlay Content -->

    <!-- Sidebar Content -->
    <!-- Using the available v-slot, we can override the default Sidebar content from layouts/partials/Sidebar.vue -->
    <template #sidebar>
      <!-- Side Header -->
      <div class="content-header bg-white-5">
        <!-- Logo -->
        <router-link to="/landing" class="font-w600 text-dual">
          <span class="smini-visible">
            <i class="fa fa-circle-notch text-primary"></i>
          </span>
          <span class="smini-hide font-size-h5 tracking-wider">
            Nity<span class="font-w400">Shop</span>
          </span>
        </router-link>
        <!-- END Logo -->

        <!-- Extra -->
        <div>
          <!-- Close Sidebar, Visible only on mobile screens -->
          <base-layout-modifier
            size="sm"
            variant="dual"
            action="sidebarClose"
            class="d-lg-none ml-2"
          >
            <i class="fa fa-times"></i>
          </base-layout-modifier>
          <!-- END Close Sidebar -->
        </div>
        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Sidebar Scrolling -->
      <simplebar class="js-sidebar-scroll">
        <!-- Side Navigation -->
        <div class="content-side">
          <base-navigation
            :nodes="[
              {
                name: 'Panel de control',
                to: '/backend/dashboard',
                icon: 'si si-speedometer',
              },
              {
                name: 'Entregar pedido',
                to: '/backend/entrega',
                icon: 'fas fa-box',
              },
              {
                name: 'More',
                heading: true,
              },
              {
                name: 'Página principal',
                to: '/landing',
                icon: 'si si-rocket',
              },
            ]"
          ></base-navigation>
        </div>
        <!-- END Side Navigation -->
      </simplebar>
      <!-- END Sidebar Scrolling -->
    </template>
    <!-- END Sidebar Content -->

    <!-- Header Content -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Sidebar -->
          <base-layout-modifier
            action="sidebarToggle"
            size="sm"
            variant="dual"
            class="mr-2 d-lg-none"
          >
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Sidebar -->

          <!-- Toggle Mini Sidebar -->
          <base-layout-modifier
            action="sidebarMiniToggle"
            size="sm"
            variant="dual"
            class="mr-2 d-none d-lg-inline-block"
          >
            <i class="fa fa-fw fa-ellipsis-v"></i>
          </base-layout-modifier>
          <!-- END Toggle Mini Sidebar -->
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- User Dropdown -->
          <b-dropdown
            size="sm"
            variant="dual"
            class="d-inline-block ml-2"
            menu-class="p-0 border-0 dropdown-menu-md"
            right
            no-caret
            ref="oneDropdownDefaultUser"
          >
            <template #button-content>
              <div class="d-flex align-items-center">
                <img
                  class="rounded-circle"
                  src="../../assets/img/avatar10.png"
                  alt="Header Avatar"
                  style="width: 21px"
                />
                <i
                  class="
                    fa fa-fw fa-angle-down
                    d-none d-sm-inline-block
                    ml-1
                    mt-1
                  "
                ></i>
              </div>
            </template>
            <li @click="$refs.oneDropdownDefaultUser.hide(true)">
              <div class="p-3 text-center bg-primary-dark rounded-top">
                <img
                  class="img-avatar img-avatar48 img-avatar-thumb"
                  src="../../assets/img/avatar10.png"
                  alt="Avatar"
                />
                <p class="mt-2 mb-0 text-white font-w500">
                  {{ $auth.user.name.replace(/ .*/, "") }}
                </p>
                <p class="mb-0 text-white-50 font-size-sm">Administrador</p>
              </div>
              <div class="p-2">
                <a
                  class="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                  href="javascript:void(0)"
                >
                  <span class="font-size-sm font-w500">Ajustes</span>
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <router-link
                  class="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                  to="/auth/lock"
                >
                  <span class="font-size-sm font-w500">Bloquear cuenta</span>
                </router-link>
                <b-button
                  class="
                    dropdown-item
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                  @click="logout"
                >
                  <span class="font-size-sm font-w500">Cerrar sesión</span>
                </b-button>
              </div>
            </li>
          </b-dropdown>
          <!-- END User Dropdown -->

          <!-- Notifications Dropdown -->
          <b-dropdown
            size="sm"
            variant="dual"
            class="d-inline-block ml-2"
            menu-class="dropdown-menu-lg p-0 border-0 font-size-sm"
            right
            no-caret
          >
            <template #button-content>
              <i class="fa fa-fw fa-bell"></i>
              <span v-if="notifications.length" class="text-primary">•</span>
            </template>
            <li>
              <div class="p-2 bg-primary-dark text-center rounded-top">
                <h5 class="dropdown-header text-uppercase text-white">
                  Notificaciones
                </h5>
              </div>
              <ul class="nav-items mb-0">
                <li
                  v-for="(notification, index) in notifications"
                  :key="`notification-${index}`"
                >
                  <a
                    class="text-dark media py-2"
                    :href="`${notification.href}`"
                  >
                    <div class="mr-2 ml-3">
                      <i :class="`${notification.icon}`"></i>
                    </div>
                    <div class="media-body pr-2">
                      <div class="font-w600">{{ notification.title }}</div>
                      <span class="font-w500 text-muted">{{
                        notification.time
                      }}</span>
                    </div>
                  </a>
                </li>
                <li v-if="!notifications.length" class="p-2">
                  <b-alert variant="warning" class="text-center m-0" show>
                    <p class="mb-0">No tienes notificaciones pendientes</p>
                  </b-alert>
                </li>
              </ul>
              <div v-if="notifications.length" class="p-2 border-top">
                <b-button
                  size="sm"
                  variant="light"
                  class="text-center"
                  block
                  href="javascript:void(0)"
                >
                  <i class="fa fa-fw fa-arrow-down mr-1"></i> Leer más...
                </b-button>
              </div>
            </li>
          </b-dropdown>
          <!-- END Notifications Dropdown -->

          <!-- Toggle Side Overlay -->
          <base-layout-modifier
            action="sideOverlayToggle"
            variant="dual"
            size="sm"
            class="ml-2"
          >
            <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
          </base-layout-modifier>
          <!-- END Toggle Side Overlay -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->
    </template>
    <!-- END Header Content -->

    <!-- Footer Content -->
    <!-- Using the available v-slot, we can override the default Footer content from layouts/partials/Footer.vue -->
    <template #footer>
      <div class="content py-3">
        <b-row class="font-size-sm">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            Creado con <i class="fa fa-heart text-danger"></i> por
            <a
              class="font-w600"
              href="https://1.envato.market/5Noyb"
              target="_blank"
              >KFuee</a
            >
          </b-col>
          <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
            <a
              class="font-w600"
              href="https://1.envato.market/5Noyb"
              target="_blank"
              >{{ $store.getters.appName + " " + $store.getters.appVersion }}</a
            >
            &copy; {{ $store.getters.appCopyright }}
          </b-col>
        </b-row>
      </div>
    </template>
    <!-- END Footer Content -->
  </base-layout>
</template>

<script>
import BaseLayout from "../Base";

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from "simplebar-vue";

export default {
  name: "LayoutBackend",
  components: {
    BaseLayout,
    simplebar,
  },
  data() {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: "",
        sidebar: "",
        header: "",
        footer: "",
      },
      notifications: [
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-check-circle text-success",
          title: "You have a new follower",
          time: "15 min ago",
        },
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-plus-circle text-primary",
          title: "1 new sale, keep it up",
          time: "22 min ago",
        },
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-times-circle text-danger",
          title: "Update failed, restart server",
          time: "26 min ago",
        },
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-plus-circle text-primary",
          title: "2 new sales, keep it up",
          time: "33 min ago",
        },
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-user-plus text-success",
          title: "You have a new subscriber",
          time: "41 min ago",
        },
        {
          href: "javascript:void(0)",
          icon: "fa fa-fw fa-check-circle text-success",
          title: "You have a new follower",
          time: "42 min ago",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  created() {
    // Set default elements for this layout
    this.$store.commit("setLayout", {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true,
    });

    // Set various template options
    this.$store.commit("headerStyle", { mode: "light" });
    this.$store.commit("mainContent", { mode: "full" });
  },
};
</script>
