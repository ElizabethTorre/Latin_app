<template lang="pug">
	div
		Header
		.container-body
			sideNav
		//-button#up.hiden(@click="up") subir
		//-mdb-icon(icon="eye" class="mr-1")

</template>

<script>
import Header from '../components/header';
import sideNav from '../components/sidenav';
//import { mdbBtn, mdbIcon } from 'mdbvue';

export default {
	components: {
		Header,
		sideNav,
		//mdbBtn
	},
	//mounted() {
	//	window.addEventListener('scroll', () => {
	//		const up = document.querySelector('#up');
	//		if (window.pageYOffset > 200) {
	//			up.classList.remove('hiden');
	//		} else {
	//			up.classList.add('hiden');
	//		}
	//	});
	//},
	//methods: {
	//	up() {
	//		window.scrollTo(0, 0);
	//	}
	//}
}
</script>

<style lang="styl">
	@import '../assets/style/index.styl';
</style>
