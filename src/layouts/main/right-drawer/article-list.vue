<template>
  <q-list>
    <q-item-label header class="q-pl-xl text-grey-7 text-weight-medium">Most Popular</q-item-label>

    <q-item
      clickable
      v-ripple
      class="q-mb-lg q-px-xl"
      v-for="(item, index) in mostPopular"
      :key="index"
    >
      <q-item-section>
        <q-item-label class="q-mb-xs text-subtitle1 text-weight-bold">{{item.title}}</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-medium text-grey-8">{{item.excerpt}}</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple class="q-mb-lg q-px-xl">
      <q-item-section>
        <q-item-label
          class="q-mb-xs text-subtitle1 text-weight-bold"
        >This is the Title of the Article</q-item-label>
        <q-item-label
          class="text-subtitle2 text-weight-medium text-grey-8"
        >And here is a short blurb about the article</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple class="q-mb-lg">
      <q-item-section>
        <q-item-label class="q-mb-xs text-subtitle1 text-weight-bold">
          Here is a really long title of an article that may or may not also be
          really long
        </q-item-label>
        <q-item-label
          class="text-subtitle2 text-weight-medium text-grey-8"
        >And the blurb here is also rather long -- indeed, really rather long.</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple class="q-mb-lg">
      <q-item-section>
        <q-item-label
          class="q-mb-xs text-subtitle1 text-weight-bold"
        >And here is a third article - with a medium headline.</q-item-label>
        <q-item-label
          class="text-subtitle2 text-weight-medium text-grey-8"
        >And this is the goldilocks blurb -- just right</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator spaced />
    <q-item-label header>Latest News</q-item-label>

    <q-item tag="label" v-ripple>
      <q-item-section side top>
        <q-checkbox v-model="check1" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Notifications</q-item-label>
        <q-item-label caption>Notify me about updates to apps or games that I downloaded</q-item-label>
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section side top>
        <q-checkbox v-model="check2" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Sound</q-item-label>
        <q-item-label caption>Auto-update apps at anytime. Data charges may apply</q-item-label>
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section side top>
        <q-checkbox v-model="check3" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Auto-add widgets</q-item-label>
        <q-item-label caption>Automatically add home screen widgets</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator spaced />
    <q-item-label header>Notifications</q-item-label>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Battery too low</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle color="blue" v-model="notif1" val="battery" />
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Friend request</q-item-label>
        <q-item-label caption>Allow notification</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-toggle color="green" v-model="notif2" val="friend" />
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Picture uploaded</q-item-label>
        <q-item-label caption>Allow notification when uploading images</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-toggle color="red" v-model="notif3" val="picture" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      mostPopular: [
        {
          title: "This is the Title of the Article",
          excerpt: "And here is a short blurb about the article"
        },
        {
          title:
            "Here is a really long title of an article that may or may not also be really long",
          excerpt:
            "And the blurb here is also rather long -- indeed, really rather long."
        },
        {
          title: "And here is a third article - with a medium headline.",
          excerpt: "And this is the goldilocks blurb -- just right"
        }
      ]
    };
  }
};
</script>
