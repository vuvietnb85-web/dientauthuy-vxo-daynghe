import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cu-live-BWc79yW_.js
var readCuLive_createServerFn_handler = createServerRpc({
	id: "18568ba13a4ce8ac837f7c8689c197deffdd566141c3b16e59b7030af3ed02db",
	name: "readCuLive",
	filename: "src/lib/eta/cu-live.ts"
}, (opts) => readCuLive.__executeServer(opts));
var readCuLive = createServerFn({ method: "GET" }).handler(readCuLive_createServerFn_handler, async () => {
	let weather = null;
	let fx = null;
	try {
		const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=20.42&longitude=106.17&current=temperature_2m", { signal: AbortSignal.timeout(4e3) });
		if (res.ok) {
			const temp = (await res.json()).current?.temperature_2m;
			if (typeof temp === "number") weather = `${Math.round(temp)} °C NAM ĐỊNH`;
		}
	} catch {
		weather = null;
	}
	try {
		const res = await fetch("https://api.frankfurter.app/latest?from=EUR&to=VND", { signal: AbortSignal.timeout(4e3) });
		if (res.ok) {
			const rate = (await res.json()).rates?.VND;
			if (typeof rate === "number") fx = `1 EUR = ${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(rate)} VND`;
		}
	} catch {
		fx = null;
	}
	return {
		weather,
		fx
	};
});
//#endregion
export { readCuLive_createServerFn_handler };
