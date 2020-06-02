<template>
  <footer class="social-media">
    <a href="https://www.youtube.com/channel/UCqMkwvDnT-nNHjrVoSBgW9Q/" target="_blank">
      <img class="youtube" src="../assets/youtube.png" alt="The Dice Age YouTube">
    </a>
    <a href="https://www.instagram.com/the_dice_age/" target="_blank">
      <img class="instagram" src="../assets/instagram.png" alt="The Dice Age Instagram" >
    </a>
  </footer>
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
