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
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block
            tag="a"
            rounded
            link-pop
            content-class="d-flex py-4"
            href="javascript:void(0)"
          >
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Entregados
              </div>
              <div class="font-size-h3">120,580</div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block
            tag="a"
            rounded
            link-pop
            content-class="d-flex py-4"
            href="javascript:void(0)"
          >
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Ganancias
              </div>
              <div class="font-size-h3">N/A</div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block
            tag="a"
            rounded
            link-pop
            content-class="d-flex py-4"
            href="javascript:void(0)"
          >
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Avg ventas
              </div>
              <div class="font-size-h3">N/A</div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block
            tag="a"
            rounded
            link-pop
            content-class="d-flex py-4"
            href="javascript:void(0)"
          >
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Clientes
              </div>
              <div class="font-size-h3">N/A</div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Stats -->

      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Borderless Table -->
          <base-block rounded title="Entregas recientes">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-reload"></i>
              </button>
            </template>
            <b-table-simple responsive borderless table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px">#</b-th>
                  <b-th>Nombre cliente</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%"
                    >Estado</b-th
                  >
                  <b-th class="text-center" style="width: 100px">Acciones</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{
                      user.labelText
                    }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-info"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Borderless Table -->
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Adam McCoy",
          href: "javascript:void(0)",
          labelVariant: "success",
          labelText: "Entregado",
          rowVariant: "secondary",
        },
        {
          id: 2,
          name: "Betty Kelley",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Pendiente",
          rowVariant: "",
        },
        {
          id: 3,
          name: "Jesse Fisher",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Pendiente",
          rowVariant: "primary",
        },
        {
          id: 4,
          name: "Ryan Flores",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Pendiente",
          rowVariant: "",
        },
        {
          id: 5,
          name: "Alice Moore",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Fallado",
          rowVariant: "warning",
        },
        {
          id: 6,
          name: "Scott Young",
          href: "javascript:void(0)",
          labelVariant: "success",
          labelText: "Entregado",
          rowVariant: "",
        },
        {
          id: 7,
          name: "Ralph Murray",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Disabled",
          rowVariant: "danger",
        },
        {
          id: 8,
          name: "Marie Duncan",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Pendiente",
          rowVariant: "",
        },
        {
          id: 9,
          name: "Helen Jacobs",
          href: "javascript:void(0)",
          labelVariant: "primary",
          labelText: "Personal",
          rowVariant: "info",
        },
        {
          id: 10,
          name: "Carl Wells",
          href: "javascript:void(0)",
          labelVariant: "info",
          labelText: "Business",
          rowVariant: "",
        },
        {
          id: 11,
          name: "Jose Mills",
          href: "javascript:void(0)",
          labelVariant: "success",
          labelText: "Entregado",
          rowVariant: "success",
        },
      ],
    };
  },
};
</script>
