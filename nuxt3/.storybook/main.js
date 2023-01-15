const { mergeConfig } = require('vite')
const path = require('path')

/**
 * 참고
 * @see https://storybook.js.org/docs/react/configure/overview
 * */
module.exports = {
	stories: ['../components/stories/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-essentials'],
	framework: '@storybook/vue3',
	core: {
		builder: 'storybook-builder-vite',
	},
	
	viteFinal: async (config) => {
		return mergeConfig(config, {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "../assets/global.scss";',
					},
				},
			},
			resolve: {
				alias: {
					'@': path.resolve(__dirname, '../'),
					'~': path.resolve(__dirname, '../')
				},
			},
		})
	},
}
