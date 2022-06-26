module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'contact-photo': 'url("./src/view/photos/contact.png")',
                'project-photo': 'uri("./src/view/photos/project.png")'
            }
        },
    },
    plugins: [],
}