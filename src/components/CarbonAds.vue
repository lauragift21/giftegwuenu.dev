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
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#carbonads > span {
  position: relative;
  display: block;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, .05);
}

#carbonads .carbon-wrap {
  display: flex;
}

#carbonads .carbon-img {
  margin-right: 10px;
  line-height: 1;
}

#carbonads .carbon-text {
  margin-bottom: 12px;
  color: #637381;
  text-decoration: none;
  font-size: 12px;
  line-height: 1.45;
}

#carbonads .carbon-poweredby {
  position: absolute;
  bottom: 10px;
  left: 152px;
  color: #c5cdd0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 500;
  font-size: 8px;
  line-height: 1;
}
</style>