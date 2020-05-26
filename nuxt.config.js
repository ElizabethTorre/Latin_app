module.exports = {
  /*
  ** Headers of the page
  */
	router: {
		base: '/Latin_app/'
	
	},
  head: {
    title: 'latin-movie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
  css: [
		'bootstrap-css-only/css/bootstrap.min.css',
		'mdbvue/lib/css/mdb.min.css'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://bootstrap-vue.js.org
		// 'bootstrap-vue/nuxt',
		'mdbvue/nuxt',
		'@nuxtjs/axios'
	],

	mdbvue: {
		icons: true, // FA5
		roboto: false, // font Roboto
		css: true, // MDB CSS
		bootstrap: false // Bootstrap CSS
	},
	axios: {
		baseURL: "https://www.omdbapi.com/",
		//credentials: true
	},
	/*
	** Build configuration
	*/
	/*
  ** Build configuration
  */
  build: {
		transpile: [
			'mdbvue/lib/components'
		],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

