<template>
  <div>
    <base-page-heading title="Entregar pedido">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item to="/backend/dashboard"
            >Dashboard</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Entregar pedido</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Formulario de entrega">
        <b-row>
          <b-col sm="5">
            <p class="font-size-sm text-muted">
              Una vez rellenes el siguiente formulario el cliente sera
              notificado a su correo electronico. ¡Asegurate de que todos los
              datos estan bien escritos!
            </p>
          </b-col>
          <b-col sm="7">
            <b-form @submit.prevent>
              <b-form-group label="Datos del cliente" label-for="email">
                <b-form-input
                  id="email"
                  type="text"
                  placeholder="Nombre del cliente"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="email"
                  placeholder="Email del cliente"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Datos de la cuenta" label-for="acc">
                <b-form-input
                  id="acc"
                  type="email"
                  placeholder="Email de la cuenta"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="Contraseña de la cuenta"
                ></b-form-input>
              </b-form-group>
              <b-form-group class="d-flex justify-content-end">
                <b-button type="submit" variant="primary">Enviar</b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>
