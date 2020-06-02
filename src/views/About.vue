<template>
  <div class="main">
    <h1 style="text-align:center">Welcome to The Dice Age</h1>
    <p>
      The Dice Age was formed in 2019 to provide some insight on popular board games.
      We create how to play and playthrough videos of our favorite games.
      The goal is to create quick videos so that you can jump into games as soon as possible and less time in the rule book.
    </p>
    <p>
      We also give a quick review of games to help you decide what is the best game to buy.
    </p>
    <p>
      As the site grows we would like to give away games to our viewers and would like to hear what you think of the games we play.
    </p>
  </div>
</template>

<script>

export default {
    name: 'About',
    metaInfo() {
        return {
            title: 'About',
            meta: [
                {
                    name: 'description',
                    content: `
                      The Dice Age was formed in 2019 to provide some insight on popular board games.
                      We create how to play and playthrough videos of our favorite games.
                      The goal is to create quick videos so that you can jump into games as soon as possible 
                      and less time in the rule book. We also give a quick review of games to help you decide what is the best game to buy.
                    `,
                },
            ],
        };
    },
};
</script>

<style scoped>

.main {
  padding: 20px;
}

</style>
