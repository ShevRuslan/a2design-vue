<template>
  <PagePreloader :isLoading="isLoading" />
  <q-page class="flex column q-px-lg q-pb-lg q-mt-lg">
    <h4>Добро пожаловать! Это ваш профиль</h4>
    <div class="wrapper-profile flex row">
      <ProfileAvatar />
      <ProfileAbout />
    </div>
    <ProfileArticles />
    <FormAddArticle />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import PagePreloader from "src/components/PagePreloader.vue";
import ProfileAvatar from "src/components/ProfilePage/ProfileAvatar.vue";
import ProfileAbout from "src/components/ProfilePage/ProfileAbout.vue";
import ProfileArticles from "src/components/ProfilePage/ProfileArticles.vue";
import FormAddArticle from "src/components/ProfilePage/FormAddArticle.vue";
export default defineComponent({
  name: "ArticlesPage",
  components: {
    PagePreloader,
    ProfileAvatar,
    ProfileAbout,
    ProfileArticles,
    FormAddArticle,
  },
  setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    });

    return {
      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 464px) {
  .wrapper-profile {
    flex-direction: column;
  }
}
</style>
