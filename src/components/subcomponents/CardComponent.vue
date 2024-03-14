<template>
  <div class="col-2 card-wrapper position-relative overflow-hidden rounded-1">
    <div>
      <img :src="(source)? 'http://image.tmdb.org/t/p/w342' + source : '../../../images/movie_missing.png'" :alt="title" />
    </div>
    <div
      class="text-center py-3 text-light desc-wrapper position position-absolute"
    >
      <div>
        <h4 class="text-my-red">
          {{ title }}
        </h4>
        <h5 class="fw-light">
          {{ subtitle }}
        </h5>
        <p>
          <img :src="getFlag" :alt="language + 'flag'" class="flag" />
        </p>
        <p>
          <i
            v-for="n in 5"
            :key="n"
            class="fa-star"
            :class="(n <= getStars) ? 'fa-solid' : 'fa-regular'"
          ></i>
        </p>
        <p class="plot-wrapper">
          {{ plot }}
        </p>
      </div>
    </div>
    <div class="black-overlay"></div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    source: String,
    title: String,
    subtitle: String,
    language: String,
    vote: Number,
    plot: String,
  },
  data() {
    return {
      flags: ["ca", "de", "es", "fr", "gb", "it", "ja", "kr", "us"],
    };
  },
  computed: {
    getFlag() {
      let flag = `/images/${this.language}.svg`;
      if (!this.flags.includes(this.language)) {
        flag = "/images/imagemissing_92832.png";
      }
      return flag;
    },
    getStars() {
      return Math.ceil(this.vote / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
img.flag {
  width: 30px;
}

div>img {
  width: 100%;
}
.card-wrapper {
  width: 250px;
  height: 375px;

}

.card-wrapper:hover {
  transform: translateY(-1rem);
  transition: all 0.3s;
}

.desc-wrapper {
  opacity: 0;
  z-index: 950;
  width: 80%;
  top: 10%;
  left: 10%;
}

.card-wrapper:hover .desc-wrapper {
  opacity: 1;
  transition: all 1s;
}

.black-overlay {
  background-color: #000000;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
  opacity: 0;
}

.card-wrapper:hover .black-overlay {
  opacity: 0.7;
  transition: all 0.8s;
}

.plot-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
