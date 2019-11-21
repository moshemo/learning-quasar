<template>
  <q-drawer
    show-if-above
    content-class="bg-grey-2"
    side="right"
    width="350"
    v-if="isOpen"
  >
    <SearchBar />
    <SignupForm />
    <ArticleList />
  </q-drawer>
</template>

<script>
import ArticleList from "./article-list";
import SearchBar from "./search-bar";
import SignupForm from "./signup-form";

export default {
  components: {
    ArticleList,
    SearchBar,
    SignupForm
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
#search-bar--right-drawer {
  .q-field__control {
    height: 36px;
    padding-left: 7px;
    padding-right: 0;
  }

  .q-field__after {
    padding-left: 0;
  }

  .q-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
