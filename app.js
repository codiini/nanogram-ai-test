import AppForm from "./components/AppForm.js";
import AppLogo from "./components/AppLogo.js";

new Vue({
	el: "#app",
	components: {
		"app-logo": AppLogo,
		"app-form": AppForm,
	},
	data: {
		email: "",
		name: "",
		password: "",
		passwordType: "password",
	},
	methods: {
		togglePasswordVisibility() {
			if (this.passwordType === "password") {
				this.passwordType = "text";
			} else {
				this.passwordType = "password";
			}
		},

		submitForm() {
			axios
				.post("https://test.nanogram.ai/", {
					name: this.name,
					email: this.email,
					password: this.password,
				})
				.then(() => {
					alert("Data has been submitted successfully");
				})
				.catch(() => {
					alert(
						"There was an error submitting the data, Please try again later."
					);
				});
		},
	},
});
