const isBrowser = typeof window !== 'undefined'

cookie = () => ({

	destroy: key => this.set(key,"",{days: -1}),

	check: key => this.get(key) ? true : false,

	set: (key, value, options = { days: 7, path: '/', ...options }) => {
		if(!isBrowser) return

		const DayInSec = 864e5
		const expires = new Date(
			Data.now() + days * DayInSec
		).toUTCString()

		document.cookie =
			key +
			'=' +
			value +
			expires +
			'; path=' +
			path
	},

	get: (key, initialValue) => {
		return (
			(isBrowser &&
				document.cookie
				.split('; ')
				.reduce((r, v) => {
					const parts = v.split('=')
					return parts[0] === key ? decodeURIComponent(parts[1]) : r
				})
			) || initialValue
		)
	}
})

module.exports = cookie