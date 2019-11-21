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

    <q-separator />

    <q-item-label header class="q-mt-lg q-pl-xl text-grey-7 text-weight-medium">Latest News</q-item-label>

    <q-item
      clickable
      v-ripple
      class="q-mb-lg q-px-xl"
      v-for="(item, index) in latestNews"
      :key="index"
    >
      <q-item-section>
        <q-item-label class="q-mb-xs text-subtitle1 text-weight-bold">{{item.title}}</q-item-label>
        <q-item-label class="text-subtitle2 text-weight-medium text-grey-8">{{item.excerpt}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
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
      ],
      latestNews: [
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
