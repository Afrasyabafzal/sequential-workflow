export class ObjectCloner {
	public static deepClone<T>(instance: T): T {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (typeof window.structuredClone !== 'undefined') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
			return window.structuredClone(instance);
		}
		return JSON.parse(JSON.stringify(instance));
	}
}
