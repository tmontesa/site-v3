export const ContactQuery = `
query {
    contact {
        data {
            attributes {
                about
                email
                links {
                    data {
                        attributes {
                            title
                            url
                        }
                    }
                }
            }
        }
    }
}
`;