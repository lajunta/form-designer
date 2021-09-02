dev:
	npx tailwindcss -i ./src/app.scss  -c ./tailwind.config.js -o ./static/app.css  --jit --minify
	esbuild --bundle ./src/app.js --outdir=./static/ --minify --sourcemap
