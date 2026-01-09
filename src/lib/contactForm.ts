export function getContactFormData(
	name: string,
	email: string,
	opinion: string
) {
	return {
		message: `
			Name - ${name}
			Email - ${email}
			User Opinion - ${opinion}
			------------------------
			Thank you very much!!!
		`
	};
}
