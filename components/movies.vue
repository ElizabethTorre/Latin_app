<template lang="pug">
	div.flex
		.content-top
			h1.title-top |&nbsp
				span Recomendados {{type}}
		.content-middle
			//-p {{type}}
		.content-bottom(v-if="type === ''")
			mdb-card.zoom.hoverable(v-for="(item, index) in mov" :key="item.id")
				mdb-card-image(:src="item.Poster")
				mdb-card-body
					a(:href="`https://www.imdb.com/title/${item.imdbID}/`")
						img.logo-imdb.z-depth-3(src="@/assets/images/logo-imdb.png" alt="Logo Imdb")
					mdb-card-title {{item.Title}}
						span ({{item.Year}})
					mdb-card-text
						img.img-card(src="@/assets/images/star.png" alt="Estrella para rating")
						span.rating {{item.imdbRating}}
						span /10
					mdb-btn.see-btn( tag="a" role="button" :href="`https://www.imdb.com/title/${item.imdbID}/`") Ver película
						mdb-icon(icon="eye" class="mr-1")
		.content-bottom(v-else)
			mdb-card.zoom.hoverable(v-for="(item, index) in getSelect" :key="item.id")
				mdb-card-image(:src="item.Poster")
				mdb-card-body
					a(:href="`https://www.imdb.com/title/${item.imdbID}/`")
						img.logo-imdb.z-depth-3(src="@/assets/images/logo-imdb.png" alt="Logo Imdb")
					mdb-card-title {{item.Title}}
						span ({{item.Year}})
					mdb-card-text
						img.img-card(src="@/assets/images/star.png" alt="Estrella para rating")
						span.rating {{item.imdbRating}}
						span /10
					mdb-btn.see-btn( tag="a" role="button" :href="`https://www.imdb.com/title/${item.imdbID}/`") Ver película
						mdb-icon(icon="eye" class="mr-1")
</template>
<script>
import Axios from "axios";
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbIcon } from 'mdbvue';

export default {
	name: 'movies',
	props: ['type', 'mov'],
	components: {
		mdbCard,
		mdbCardImage,
		mdbCardBody,
		mdbCardTitle,
		mdbCardText,
		mdbBtn,
		mdbIcon
	},
	data() {
		return {
		}
	},
	computed: {
		getSelect: function ()  {
			return this.mov.filter(obj => obj.Country.includes(this.type));
		}
	}
}
</script>
<style lang="styl">
	@import '../assets/style/movies.styl';
</style>
