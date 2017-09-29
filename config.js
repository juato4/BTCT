{
	"ws": {
		"port": 5000,
		"clientport": 3000,
		"hostname": "127.0.0.1"
	},
	"bot": {
		"debug": true,
		"BOT_DELAY": 1,
		"interval_ticker_update": 25000,
		"period_storage_ticker": 2000,
		"timeout_buy": 60000,
		"timeout_sell": 60000,
		"TV_GAIN": 0.6,
		"TV_TRADING_LIMIT_BUY": 0.001,
		"TV_PYRAMID": true,
		"TV_TRADING_LIMIT_SELL": 0.001,
		"TV_PROTECTION": true,
		"VERBOSE": true,
		"WATCH_MODE": false
	},
	"exchanges": {
		"bittrex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"cryptopia": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"kraken": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"poloniex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		}
	},
	"pairs": {
		"bittrex": {
			"BTC-LTC": {
				"strategy": "bb"
			}
		},
		"cryptopia": {
			"SIGT_BTC": {
				"strategy": "bb"
			},
			"XMR_BTC": {
				"strategy": "bb"
			},
			"ETH_BTC": {
				"strategy": "bb"
			}
		},
		"kraken": {
			"DASHEUR": {
				"strategy": "bb"
			},
			"XLTCXXBT": {
				"strategy": "bb"
			},
			"XETHXXBT": {
				"strategy": "bb"
			}
		},
		"poloniex": {
			"BTC_XMR": {
				"strategy": "bb"
			},
			"BTC_ETH": {
				"strategy": "bb"
			},
			"eBTC_ETC": {
				"strategy": "bb"
			}
		}
	},
	"imap_listener": {
		"enabled": false,
		"authorized_froms": "[\"noreply@tradingview.com\"]",
		"user": "YOUR_EMAIL_HERE",
		"password": "YOUR_PASSWORD_HERE",
		"host": "imap.gmail.com",
		"port": 993,
		"tls": true,
		"tlsOptions": {
			"rejectUnauthorized": false
		}
	},
	"strategies": {
		"bb": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"pp": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainbb": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbstepgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgainbb": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbpp": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppbb": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainstepgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgaingain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainpp": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgainpp": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppstepgain": {
			"TRADING_LIMIT": 0.01,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 1,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"EMA1": 16,
			"EMA2": 8,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STDV": 2,
			"SMA_PERIOD": 20,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 1,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		}
	},
	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": 0.104744
		}
	}
}