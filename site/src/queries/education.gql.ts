import { gql } from "@apollo/client";

export const QUERY_EDUCATION = gql`
query {
    education {
        data {
            attributes {
                school_title
                school_subtitle
                school_description
                education_categories {
                    data {
                        attributes {
                            title
                            entries {
                                data {
                                    attributes {
                                        title
                                        description
                                        tags {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

// Strapi nests too much...
