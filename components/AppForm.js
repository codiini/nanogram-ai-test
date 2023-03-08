import BaseInput from "../components/BaseInput.js";
export default {
	name: "app-form",
	components: {
		"base-input": BaseInput,
	},
	props: {
		email: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		passwordType: {
			type: String,
			required: true,
		},
	},
	template: `
    	<form @submit="submitForm" class="form-container">
            <base-input
                :value="name"
                @input="$emit('name-input', $event)"
                label="Name*"
                type="text"
                placeholder="Iniubong Obonguko"
                required
            >
            </base-input>
            <base-input
                :value="email"
                @input="$emit('email-input', $event)"
                label="Email*"
                type="email"
                required
                placeholder="hello@iniubongobonguko.com"
            >
            </base-input>
            <div>
                <base-input
                    :value="password"
                    @input="$emit('password-input', $event)"
                    label="Password*"
                    :type="passwordType"
                    required
					minlength="8"
					placeholder="Mininum of 8 characters"
                >
                </base-input>
                <div class="password-extras">
					<span>
                        <input
                            type="checkbox"
                            id="show-password"
                            @change="togglePasswordVisibility"
                        />
                        <label for="show-password">Show password</label>
					</span>
					<span>
						<a href="#">Forgot password?</a>
					</span>
				</div>
			</div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <p>Already have an account? <a href="#">Sign in</a></p>
            </div>
		</form>
    `,
	methods: {
		togglePasswordVisibility() {
			this.$emit("toggle-password-visibility");
		},
		submitForm(e) {
			e.preventDefault();
			this.$emit("submit-form", e);
		},
	},
};
