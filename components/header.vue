<template lang="pug">
	mdb-navbar(light)
		mdb-navbar-brand
			.brand
				h1 LATIN M
				span
					img.logo(src="@/assets/images/logo-latin.png" alt="Logo de pagina web")
				h1 VIE
		mdb-navbar-toggler
			mdb-navbar-nav(right)
				mdb-dropdown
					mdb-dropdown-toggle(slot="toggle" waves-fixed)
						mdb-icon( icon="user-alt")
						div.user
							p Nombre y apellido
							p geor@gmail.com
					mdb-dropdown-menu
						mdb-dropdown-item Ver perfil
						mdb-dropdown-item Gestionar usuario
				mdb-dropdown
					mdb-dropdown-toggle.cog(slot="toggle" waves-fixed)
						mdb-icon( icon="cog")
					mdb-dropdown-menu
						mdb-dropdown-item Empresa
						mdb-dropdown-item --
						mdb-dropdown-item --
				mdb-nav-item(href="#" )
					mdb-icon( icon="envelope")
				mdb-nav-item(href="#" )
					mdb-icon( icon="bell")
				mdb-nav-item(href="#" )
					mdb-icon( icon="power-off")
</template>
<script>
import { mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem,mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbIcon } from 'mdbvue';

export default {
	name: 'Header',
	components: {
		mdbNavbar,
		mdbNavItem,
		mdbNavbarNav,
		mdbNavbarToggler,
		mdbNavbarBrand,
		mdbIcon,
		mdbDropdown,
		mdbDropdownMenu,
		mdbDropdownToggle,
		mdbDropdownItem
	},
	data() {
		return {
		};
	}
}
</script>

<style lang="styl">
	@import '../assets/style/header.styl';
</style>
