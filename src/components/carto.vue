<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.runDemo();
  },
  methods: {
    runDemo() {
      this.$nextTick(() => {
        const carto = this.$carto;
        const map = L.map("map").setView([116.397128, 39.916527], 5);
        map.scrollWheelZoom.disable();

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png",
          {
            maxZoom: 18
          }
        ).addTo(map);

        const client = new carto.Client({
          apiKey: "apikey",
          username: "brelsfoeagain"
        });

        const source = new carto.source.Dataset(
          "hms_efh_2009tiger_shark"
        );
        const style = new carto.style.CartoCSS(`
        #layer {
          marker-width: 7;
          marker-fill: #EE4D5A;
          marker-line-color: #FFFFFF;
        }
      `);
        const layer = new carto.layer.Layer(source, style);

        client.addLayer(layer);
        client.getLeafletLayer().addTo(map);
      });
    }
  }
};
</script>

<style>
</style>