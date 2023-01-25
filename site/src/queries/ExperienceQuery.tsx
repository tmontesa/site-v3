export const ExperienceQuery = `
query {
    experience {
        data {
            attributes {
                industry_experience {
                    data {
                        attributes {
                            ...experience_entry
                        }
                    }
                }
                other_experience {
                    data {
                        attributes {
                            ...experience_entry
                        }
                    }
                }
            }
        }
    }
}

fragment experience_entry on ExperienceEntry {
    title
    subtitle
    description
    tags {
        data {
            attributes {
                name
            }
        }
    }
}
`;