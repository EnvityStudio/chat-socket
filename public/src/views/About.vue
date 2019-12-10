<template>
  <div class="about">
    <div>
      <b-button-toolbar
        aria-label="Toolbar with button groups and input groups"
        size="sm"
        justify
      >
        <b-button-group size="sm" class="mr-1">
          <b-button>Save</b-button>
          <b-button>Cancel</b-button>
        </b-button-group>
        <b-input-group size="sm" prepend="$" append=".00">
          <b-form-input value="100" class="text-right"></b-form-input>
        </b-input-group>
      </b-button-toolbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {}
};
</script>
