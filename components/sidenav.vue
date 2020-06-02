<template lang="pug">
.body
	.NavLateral
		.open-close(@click="classToggle")
			mdb-icon#openLeft(icon="chevron-circle-left")
			mdb-icon#openRight.none(icon="chevron-circle-right")
		.sidenavbar
			.content-items
				.item-flex.active(@click="selectCountry('')")
					p Todos
					img(src="https://img.icons8.com/color/48/000000/america.png" alt="Imagen de America")
				.item-flex(@click="selectCountry('Peru')")
					p Peru
					img(src="https://img.icons8.com/color/48/000000/peru.png" alt="Bandera de Peru")
				.item-flex(@click="selectCountry('Colombia')")
					p Colombia
					img(src="https://img.icons8.com/color/48/000000/colombia.png" alt="Bandera de Colombia")
				.item-flex(@click="selectCountry('Brazil')")
					p Brazil
					img(src="https://img.icons8.com/color/48/000000/brazil.png" alt="Bandera de Brazil")
				.item-flex(@click="selectCountry('Chile')")
					p Chile
					img(src="https://img.icons8.com/color/48/000000/chile.png" alt="Bandera de Chile")
				.item-flex(@click="selectCountry('Argentina')")
					p Argentina
					img(src="https://img.icons8.com/color/48/000000/argentina.png" alt="Bandera de Argentina")
				.item-flex(@click="selectCountry('Mexico')")
					p Mexico
					img(src="https://img.icons8.com/color/48/000000/mexico.png" alt="Bandera de Mexico")
				.item-flex(@click="selectCountry('Venezuela')")
					p Venezuela
					img(src="https://img.icons8.com/color/48/000000/venezuela.png" alt="Bandera de Venezuela")
	div.classGrey
	.ContentNav
		.divContent
			movies(:type = "country" :mov="arr_peliculas")

</template>
<script>
import { mdbIcon } from 'mdbvue';
import movies from '../components/movies';

export default {
	name: 'sideNav',
	components: {
		mdbIcon,
		movies
	},
	data() {
		return {
			country:"",
			peliculas: [
				'Locos de amor 2',
				'La casa rosada',
				'Sin Vagina, me Marginan',
				'Rosa Chumbe',
				'Retablo',
				'La Paisana Jacinta',
				'asu mare',
				'una comedia macabra',
				'el gran leon',
				'siete semillas',
				'la peor de mis bodas',
				'no estamos solos',
				'Roma',
				'Ana y bruno',
				'gueros',
				'Halley',
				'A la mala',
				'coco',
				'la leyenda de la llorona',
				'Amores perros',
				'la leyenda del charro negro',
				'Tesoros',
				'Whisky',
				'25 Watts',
				'Anina',
				'Clever',
				'Ojos de madera',
				'El Candidato',
				'La vendedora de rosas',
				'La estrategia del caracol',
				'Zama',
				'Carancho',
				'Aquarius',
				'Pixote',
				'No',
				'Gloria',
				'Rara',
				'Venezzia',
				'El Inca'
			],
			arr_peliculas: []
		}
	},
	created() {
		this.peliculas.forEach(ele => {
			this.$axios({
				methods:"GET",
				url: `https://www.omdbapi.com/?t=${ele.split(' ').join('+').toLowerCase()+'&apikey=8f7b2287'}`,
				headers:{
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
				.then(response => this.arr_peliculas.push(response.data))
				.catch(error => console.log(error));
		})
	},
	methods: {
		classToggle() {
			document.querySelector(".NavLateral").classList.toggle("classWidth");
			document.querySelector("#openRight").classList.toggle("none");
			document.querySelector("#openLeft").classList.toggle("none");
			document.querySelector(".classGrey").classList.toggle("none");
			document.querySelector(".ContentNav").classList.toggle("marginLeft");
			document.querySelector(".sidenavbar").classList.toggle("widthAuto");
			document.querySelector(".content-items").classList.toggle("widthAuto");
			document.querySelector(".open-close").classList.toggle("widthButton");

			const x = document.querySelectorAll(".item-flex> p");
				for (let i = 0; i < x.length; i++)
					x[i].classList.toggle("none");
		},
		selectCountry(country) {
			this.country = country;
			document.querySelector("#openRight").classList.remove("none");
			document.querySelector("#openLeft").classList.add("none");
			document.querySelector(".NavLateral").classList.add("classWidth");
			document.querySelector(".sidenavbar").classList.add("widthAuto");
			document.querySelector(".content-items").classList.add("widthAuto");
			document.querySelector(".open-close").classList.add("widthButton");
			document.querySelector(".classGrey").classList.add("none");
			document.querySelector(".ContentNav").classList.add("marginLeft");
			
			const x = document.querySelectorAll(".item-flex> p");
				for (let i = 0; i < x.length; i++) {
					x[i].classList.add("none");
					if(country === '' && x[i].textContent === 'Todos') {
						x[i].parentElement.classList.add("active");
					} else {
						if(x[i].textContent === country) {
							x[i].parentElement.classList.add("active");
						}
						else
							x[i].parentElement.classList.remove("active");
					}
				}
		}
	}
}

</script>
<style lang="styl">
	@import '../assets/style/sidenav.styl';
</style>
