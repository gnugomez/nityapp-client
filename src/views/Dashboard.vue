<template>
  <div>
    <!-- Hero -->
    <div class="bg-body-light">
      <div class="content content-full">
        <div
          class="
            d-flex
            flex-column flex-sm-row
            justify-content-sm-between
            align-items-sm-center
            py-2
            text-center text-sm-left
          "
        >
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-2">Panel de control</h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Bienvenido
              <a class="font-w600" href="javascript:void(0)">Manuel</a>, no
              tienes notificaciones pendientes.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button
              variant="alt-primary"
              class="mr-1"
              href="javascript:void(0)"
              v-click-ripple
            >
              <i class="fa fa-plus-square mr-1"></i> Nueva entrega
            </b-button>
            <b-button
              variant="alt-primary"
              href="javascript:void(0)"
              v-click-ripple
            >
              <i class="fa fa-cog"></i>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row class="justify-content-center">
        <b-col sm="6" xl="4">
          <!-- Your Block -->
          <base-block rounded title="Block Title">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-cog"></i>
              </button>
            </template>
            <p>
              This is a backend layout based page which you can use as a base
              for your backend pages.
            </p>
            <p>
              We created a custom Backend layout variation
              (<code>BackendStarter.vue</code>) to showcase how easily you can
              add extra layout variations and override the default content of
              the partial elements.
            </p>
          </base-block>
          <!-- END Your Block -->
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>
