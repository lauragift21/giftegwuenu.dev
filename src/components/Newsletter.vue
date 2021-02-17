<template>
  <div id="newsletter" />
</template>

<script>
export default {
  mounted() {
    let newsletterScript = document.createElement('script')
    newsletterScript.async = true;
    newsletterScript.setAttribute('data-uid', '473ee130c5')
    newsletterScript.setAttribute('src', 'https://sunny-maker-3173.ck.page/473ee130c5/index.js')
    document.getElementById('newsletter').appendChild(newsletterScript)
  },
  metaInfo() {
    [
      { src: 'https://sunny-maker-3173.ck.page/473ee130c5/index.js', body: true }
    ]
  }
}
</script>
