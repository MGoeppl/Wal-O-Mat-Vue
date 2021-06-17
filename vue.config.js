module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Wal-O-Mat-Vue'
        : '/',

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
