<template>
  <div>
    <h4>Subscribe to my Newsletter</h4>
    <p
      class="text"
    >Don't miss out on new articles from me. Get notified when a new article is published.</p>
    <form
      class="form"
      action="https://tinyletter.com/lauragift21"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/lauragift21', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <input
        type="text"
        name="email"
        class="form__email"
        id="email"
        onfocus="this.value=''"
        placeholder="Email address"
      />
      <input type="hidden" value="1" name="embed" />
      <input class="form__submit" type="submit" value="Subscribe" />
    </form>
  </div>
</template>

<style lang="scss">
h4 {
  text-align: center;
}

.text {
  font-style: italic;
  font-size: 16px;
  text-align: center;
}

.form {
  text-align: center;
  &__email {
    padding: 13px;
    width: 15rem;
    border: 1px solid #F0F0F5;
    margin-right: 13px;
  }
  &__submit {
    border: 1px solid;
    padding: 10px;
    outline: none;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>

