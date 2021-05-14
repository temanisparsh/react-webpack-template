/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { merge: webpackMerge } = require('webpack-merge');
const commonConfig = require('./internals/webpack.common');

const addons = addonsArg => {
	const aons = [...[addonsArg]].filter(Boolean);

	return aons.map(addonName =>
		require(`./internals/addons/webpack.${addonName}.js`)
	);
};

module.exports = env => {
	const envConfig = require(`./internals/webpack.${env.env}.js`);
	const mergedConfig = webpackMerge(
		commonConfig,
		envConfig,
		...addons(env.addons)
	);
	return mergedConfig;
};
