import { gql } from "@apollo/client";

export const QUERY_PROJECT = gql`
query {
    project {
        data {
            attributes {
                project_categories {
                    data {
                        attributes {
                            title
                            entries {
                                data {
                                    attributes {
                                        title
                                        subtitle
                                        description
                                        source_url
                                        demo_url
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