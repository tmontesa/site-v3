import { gql } from "@apollo/client";

export const ProjectsQuery = gql`
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
                                        sourceUrl
                                        demoUrl
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