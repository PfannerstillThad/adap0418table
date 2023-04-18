const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'5337ccd9-863b-4575-836e-f9660b4bbbda'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
