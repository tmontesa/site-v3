import { gql } from "@apollo/client";

export const QUERY_CONTACT = gql`
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