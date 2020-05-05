<template>
  <div class="social-media">
    <a href="https://www.youtube.com/channel/UCqMkwvDnT-nNHjrVoSBgW9Q/" target="_blank">
      <img class="youtube" src="../assets/youtube2.png" alt="YouTube">
    </a>
    <a href="https://www.instagram.com/the_dice_age/">
      <img class="instagram" src="../assets/instagram.png" alt="Instagram" target="_blank">
    </a>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped>

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media > a {
  margin-right: 15px;
}

.youtube {
  height: 30px;
}

.instagram {
  height: 30px;
}

</style>
