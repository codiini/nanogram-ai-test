export default {
	name: "base-input",
	template: `
        <label class="input-container">
            <span>{{ label }}</span>
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
            >
        </label>
    `,
	inheritAttrs: false,
	props: ["label", "value"],
};
