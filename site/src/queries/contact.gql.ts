import { gql } from "@apollo/client";

export const ContactQuery = gql`
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