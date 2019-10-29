<script>
export default {
  render(h) {
    return h("div", { class: "carbon-ads" });
  },
  mounted() {
    this.load();
  },
  watch: {
    $route(to, from) {
      if (
        to.path !== from.path &&
        // Only reload if the ad has been loaded
        // otherwise it's possible that the script is appended but
        // the ads are not loaded yet. This would result in duplicated ads.
        this.$el.querySelector("#carbonads")
      ) {
        this.$el.innerHTML = "";
        this.load();
      }
    }
  },
  methods: {
    load() {
      const s = document.createElement("script");
      s.id = "_carbonads_js";
      s.src = `//cdn.carbonads.com/carbon.js?serve=CE7DV2J7&placement=wwwgiftegwuenucom`;
      this.$el.appendChild(s);
    }
  }
};
</script>

<style lang="scss">
#carbonads {
  position: relative;
  display: flex;
  width: 250px;
  height: 250px;
  background-color: #fff;
  box-shadow: inset 0 0 1px 1px hsla(0, 0%, 0%, 0.15);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  justify-content: center;
  align-items: center;
}

.carbon-ads {
  margin-left: 1em;
}

#carbonads a {
  color: #111;
  text-decoration: none;
}

#carbonads a:hover {
  color: #111;
}

#carbonads span {
  display: block;
  overflow: hidden;
}

.carbon-img {
  display: block;
  margin: 0 0 8px;
  line-height: 1;
}

.carbon-img img {
  max-width: 150px !important;
  width: 150px;
  height: auto;
}

.carbon-text {
  display: block;
  margin-bottom: 8px;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
}

.carbon-poweredby {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  padding: 5px 6px;
  border-radius: 2.5px;
  background-color: hsl(246, 93%, 69%);
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 8px;
  line-height: 1;
}

@media only screen and (min-width: 1650px) {
  .carbon-ads {
    margin-left: 9rem;
  }
}

@media only screen and (max-width: 950px) {
  #carbonads {
    display: none;
  }
}
</style>